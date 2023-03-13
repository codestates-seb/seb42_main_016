package com.mainproject.udog_server.api.hairShopLike.service;

import com.mainproject.udog_server.api.hairShop.entity.HairShop;
import com.mainproject.udog_server.api.hairShop.repository.HairShopRepository;
import com.mainproject.udog_server.api.hairShopLike.dto.HairShopLikeDto;
import com.mainproject.udog_server.api.hairShopLike.entity.HairShopLike;
import com.mainproject.udog_server.api.hairShopLike.mapper.HairShopLikeMapper;
import com.mainproject.udog_server.api.hairShopLike.repository.HairShopLikeRepository;
import com.mainproject.udog_server.api.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HairShopLikeService {
    private final HairShopLikeRepository hairShopLikeRepository;
    private final HairShopRepository hairShopRepository;
    private final HairShopLikeMapper mapper;


    public void addLike(long hairShopId, HairShopLike hairShopLike) {
//        HairShop hairShop = hairShopRepository.findById(hairShopId).orElseThrow(() ->new RuntimeException("HairShop not found"));

        hairShopLike.setHairShop(findVerifiedHairShop(hairShopId));

        hairShopLikeRepository.save(hairShopLike);
    }

    public void deleteLike(long hairShopLikeId, long hairShopId, Member member) {
//        HairShop hairShop = hairShopRepository.findById(hairShopId).orElseThrow(() -> new RuntimeException("HairShop not found"));
        HairShop hairShop = findVerifiedHairShop(hairShopId);
        HairShopLike hairShopLike = findVerifiedHairShopLike(hairShopLikeId, hairShop, member);

        hairShopLikeRepository.delete(hairShopLike);
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
