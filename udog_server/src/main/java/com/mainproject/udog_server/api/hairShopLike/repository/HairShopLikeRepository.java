package com.mainproject.udog_server.api.hairShopLike.repository;

import com.mainproject.udog_server.api.hairShop.entity.HairShop;
import com.mainproject.udog_server.api.hairShopLike.entity.HairShopLike;
import com.mainproject.udog_server.api.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HairShopLikeRepository extends JpaRepository<HairShopLike, Long> {
    Optional<HairShopLike> findByHairShopLikeIdAndHairShopAndMember(Long hairShopId, HairShop hairShop, Member member);
    int countByHairShopHairShopId(Long hairShopId);
}
