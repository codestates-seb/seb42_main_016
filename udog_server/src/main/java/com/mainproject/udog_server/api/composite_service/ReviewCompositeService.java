package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.review.ReviewService;
import com.mainproject.udog_server.reviewLike.ReviewLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;

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

    public Review updateReview(Review updatingReview, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        updatingReview.setMember(member);

        Review updatedReview = reviewService.updateReview(updatingReview, member.getMemberId());

        updatedReview.setReviewCount(reviewLikeService.getReviewLikeCount(updatedReview.getId()));

        return updatedReview;
    }

    public Review getReview(Long reviewId){
        Review foundReview = reviewService.findReview(reviewId);

        foundReview.setReviewCount(reviewLikeService.getReviewLikeCount(reviewId));

        return foundReview;
    }

    public Page<Review> getReviews(int page, int size) {
        return reviewService.findReviews(page-1, size);
    }

    public void deleteReview(Long reviewId, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        reviewService.deleteReview(reviewId, member.getMemberId());
    }

    public int getReviewLikeCount(Long reviewId) {
        return reviewLikeService.getReviewLikeCount(reviewId);
    }
}
