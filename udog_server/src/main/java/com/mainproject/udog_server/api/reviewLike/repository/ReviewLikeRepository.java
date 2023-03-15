package com.mainproject.udog_server.api.reviewLike.repository;

import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Long> {
    int countByReviewId(Long reviewId);
    ReviewLike findByMember_memberIdAndReviewId(Long memberId, Long reviewId);
}
