package com.mainproject.udog_server.hairshopLike;

import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.reviewLike.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HairShopLikeRepository extends JpaRepository<HairShopLike, Long> {
    Optional<HairShopLike> findByHairShopLikeId(Long hairShopId);
    int countByHairShopHairShopId(Long hairShopId);

    Optional<HairShopLike> findByMemberAndHairShop(Member memberId, HairShop hairShopId);
}
