package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.reviewLike.ReviewLike;
import com.mainproject.udog_server.reviewLike.ReviewLikeService;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ReviewLikeCompositeService {
    private final ReviewLikeService reviewLikeService;
    private final MemberService memberService;

    public ReviewLike doReviewLike(ReviewLike creatingReviewLike, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        creatingReviewLike.setMember(member);
        Long reviewId = creatingReviewLike.getReview().getId();

        return reviewLikeService.findByMemberIdAndReviewId(member.getMemberId(), reviewId);
    }
}
