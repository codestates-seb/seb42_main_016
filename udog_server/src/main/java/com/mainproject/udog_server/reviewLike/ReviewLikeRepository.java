package com.mainproject.udog_server.reviewLike;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Long> {
    int countByReviewId(Long reviewId);
    ReviewLike findByMember_memberIdAndReviewId(Long memberId, Long reviewId);
}
