package com.mainproject.udog_server.review;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Page<Review> findAllByHairShopHairShopId(long hairShopId, PageRequest pageRequest);

    Page<Review> findAllByMemberMemberId(long memberId, PageRequest pageRequest);
}
