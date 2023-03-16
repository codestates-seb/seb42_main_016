package com.mainproject.udog_server.hairshopLike;

import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.hairshop.HairShopRepository;
import com.mainproject.udog_server.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HairShopLikeService {
    private final HairShopLikeRepository hairShopLikeRepository;
    private final HairShopRepository hairShopRepository;



    public HairShopLike addLike(long hairShopId, HairShopLike hairShopLike) {

        hairShopLike.setHairShop(findVerifiedHairShop(hairShopId));

       return  hairShopLikeRepository.save(hairShopLike);
    }

    public void deleteLike(long hairShopLikeId, long hairShopId, Member member) {

        HairShop hairShop = findVerifiedHairShop(hairShopId);
        HairShopLike hairShopLike = findVerifiedHairShopLike(hairShopLikeId, hairShop, member);

        hairShopLikeRepository.delete(hairShopLike);
    }

    public int likeCount(long hairShopId) {
        HairShop hairShop = findVerifiedHairShop(hairShopId);
        return hairShopLikeRepository.countByHairShopHairShopId(hairShopId);
    }

    public HairShop findVerifiedHairShop(long hairShopId) {
        Optional<HairShop> optionalHairShop = hairShopRepository.findById(hairShopId);

        HairShop findHairShop = optionalHairShop.orElseThrow(() -> null);

        return findHairShop;
    }

    public HairShopLike findVerifiedHairShopLike(long hairShopLikeId, HairShop hairShop, Member member) {
        Optional<HairShopLike> optionalHairShopLike = hairShopLikeRepository.findByHairShopLikeIdAndHairShopAndMember(hairShopLikeId, hairShop, member);

        HairShopLike findHairShopLike = optionalHairShopLike.orElseThrow(() -> null);

        return findHairShopLike;
    }
}
