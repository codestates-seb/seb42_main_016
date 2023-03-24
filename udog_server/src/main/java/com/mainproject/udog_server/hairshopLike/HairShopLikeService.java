package com.mainproject.udog_server.hairshopLike;


import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.Member;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.*;

import java.util.*;

@Service
@RequiredArgsConstructor
public class HairShopLikeService {
    private static final int AMOUNT_OF_TOP = 10;

    private final HairShopLikeRepository hairShopLikeRepository;
    private final HairShopService hairShopService;



    public HairShopLike createLike(long hairShopId, Member member) {
        HairShop foundHairShop = hairShopService.findVerifiedHairShop(hairShopId);
        findExistHairShopLike(member, foundHairShop);

        HairShopLike hairShopLike = new HairShopLike();
        hairShopLike.setMember(member);
        hairShopLike.setHairShop(foundHairShop);

       return  hairShopLikeRepository.save(hairShopLike);
    }

    @Transactional(readOnly = true)
    public List<HairShop> findTopHairShopsByDay(){
        return hairShopLikeRepository.findTopOfBeforeOneDay(PageRequest.of(0,AMOUNT_OF_TOP));
    }

    public void deleteLike(long hairShopLikeId) {
        HairShopLike hairShopLike = findVerifiedHairShopLike(hairShopLikeId);

        hairShopLikeRepository.delete(hairShopLike);
    }

    public int getHairShopLikeCount(long hairShopId) {
        return hairShopLikeRepository.countByHairShopHairShopId(hairShopId);
    }

    public HairShopLike findVerifiedHairShopLike(long hairShopLikeId) {
        Optional<HairShopLike> optionalHairShopLike = hairShopLikeRepository.findByHairShopLikeId(hairShopLikeId);

        HairShopLike findHairShopLike = optionalHairShopLike.orElseThrow(() -> null);

        return findHairShopLike;
    }

    private void findExistHairShopLike (Member member, HairShop hairShop){
        Optional<HairShopLike> hairShopLike = hairShopLikeRepository.findByMemberAndHairShop(member, hairShop);
        hairShopLike.ifPresent(foundHairShopLike -> {
            //todo:exception 처리
            throw null;});
    }
}
