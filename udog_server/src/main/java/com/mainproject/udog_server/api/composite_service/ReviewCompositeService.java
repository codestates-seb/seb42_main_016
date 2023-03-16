package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.reviewLike.*;
import lombok.*;

@RequiredArgsConstructor
public class ReviewCompositeService {

    private final ReviewService reviewService;
    private final ReviewLikeService reviewLikeService;
    private final MemberService memberService;

    public Review createReview(Review creatingReview, String email){
        Member member = memberService.findLoginMemberByEmail(email);

        creatingReview.setMember(member);

        Review createdReview = reviewService.createReview(creatingReview);

        return createdReview;
    }

    public Review getReview(Long reviewId){
        Review foundReview = reviewService.findReview(reviewId);
        foundReview.setReviewCount(reviewLikeService.getReviewLikeCount(reviewId));
        return foundReview;
    }
}
