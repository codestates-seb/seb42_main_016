package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.reservation.*;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.review.ReviewService;
import com.mainproject.udog_server.s3.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@Service
public class ReviewCompositeService {
    private final FileUploadService fileUploadService;
    private final ReservationService reservationService;
    private final ReviewService reviewService;
    private final MemberService memberService;


    public Review createReview(Review creatingReview, MultipartFile reviewImage, String email) {
        Member member = memberService.findLoginMemberByEmail(email);
        Reservation foundReservation = reservationService.findVerifiedReservation(creatingReview.getReservation().getReservationId());

        if (foundReservation.getHairShop().getHairShopId() != creatingReview.getHairShop().getHairShopId()) {
            throw new IllegalArgumentException("Invalid hairShopId");
        }

        if (foundReservation.getMember().getMemberId() != member.getMemberId()) {
            throw new IllegalArgumentException("Invalid memberId");
        }

        if (foundReservation.getReview() != null) {
            throw new IllegalArgumentException("Already existing review");
        }

        creatingReview.setMember(member);
//        creatingReview.setReviewImage(fileUploadService.uploadImage(reviewImage));

        creatingReview.setReservation(foundReservation);

        Review createdReview = reviewService.createReview(creatingReview);

        foundReservation.setReview(createdReview);
        reservationService.updateReservation(foundReservation);

        return createdReview;
    }

    public Review updateReview(Review updatingReview, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        updatingReview.setMember(member);

        Review updatedReview = reviewService.updateReview(updatingReview, member.getMemberId());

        return updatedReview;
    }

    public Page<Review> getMemberReviews(String email, int page, int size) {
        Member member = memberService.findLoginMemberByEmail(email);
        return reviewService.findMemberReviews(member.getMemberId(), page-1, size);
    }

    public Page<Review> getHairShopReviews(long hairShopId, int page, int size) {
        return reviewService.findHairShopReviews(hairShopId, page-1, size);
    }

    public void deleteReview(Long reviewId, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        reviewService.deleteReview(reviewId, member.getMemberId());
    }
}
