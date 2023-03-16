package com.mainproject.udog_server.hairshopLike;

import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HairShopLikeRepository extends JpaRepository<HairShopLike, Long> {
    Optional<HairShopLike> findByHairShopLikeIdAndHairShopAndMember(Long hairShopId, HairShop hairShop, Member member);
    int countByHairShopHairShopId(Long hairShopId);
}