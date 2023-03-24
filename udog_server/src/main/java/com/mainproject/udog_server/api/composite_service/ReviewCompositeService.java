package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.reservation.*;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.review.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ReviewCompositeService {

    private final ReviewService reviewService;
    private final MemberService memberService;

    private final ReservationService reservationService;

    public Review createReview(Review creatingReview, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        reservationService.updateReservation(creatingReview.getReservation());

        creatingReview.setMember(member);

        Review createdReview = reviewService.createReview(creatingReview);

        return createdReview;
    }

    public Review updateReview(Review updatingReview, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        updatingReview.setMember(member);

        Review updatedReview = reviewService.updateReview(updatingReview, member.getMemberId());

        return updatedReview;
    }

    public Review getReview(Long reviewId) {
        Review foundReview = reviewService.findReview(reviewId);

        return foundReview;
    }

    public Page<Review> getHairShopReviews(long hairShopId, int page, int size) {
        return reviewService.findHairShopReviews(hairShopId,page-1, size);
    }

    public void deleteReview(Long reviewId, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        reviewService.deleteReview(reviewId, member.getMemberId());
    }
}
