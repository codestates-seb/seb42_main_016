package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.ReviewDto;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.reservation.*;

import com.mainproject.udog_server.review.Review;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    default Review reviewPostDtoToReview(ReviewDto.Post postDto){
        HairShop hairShop = new HairShop();
        Reservation reservation = new Reservation();
        Review review = new Review();

        hairShop.setHairShopId(postDto.getHairShopId());
        reservation.setReservationId(postDto.getReservationId());

        review.setReservation(reservation);
        review.setHairShop(hairShop);
        review.setReviewText(postDto.getReviewText());

        return review;
    }
    Review reviewPatchDtoToReview(ReviewDto.Patch patchDto);
    ReviewDto.Response reviewToReviewResponseDto(Review review);
//    List<ReviewDto.hairShopReviewsResponse> hairShopReviewsToReviewResponseDto(List<Review> reviews);
    default List<ReviewDto.hairShopReviewsResponse> hairShopReviewsToReviewResponseDto(List<Review> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<ReviewDto.hairShopReviewsResponse> list = new ArrayList<ReviewDto.hairShopReviewsResponse>( reviews.size() );
        for ( Review review : reviews ) {
            list.add( reviewToHairShopReviewsResponse( review ) );
        }

        return list;
    }

    default ReviewDto.hairShopReviewsResponse reviewToHairShopReviewsResponse(Review review) {
        if ( review == null ) {
            return null;
        }

        Long reviewId = null;
        String reviewImage = null;
        String reviewText = null;
        LocalDateTime createdAt = null;
        Long memberId = null;

        reviewId = review.getReviewId();
        reviewImage = review.getReviewImage();
        reviewText = review.getReviewText();
        createdAt = review.getCreatedAt();
        memberId = review.getMember().getMemberId();

        ReviewDto.hairShopReviewsResponse hairShopReviewsResponse = new ReviewDto.hairShopReviewsResponse( reviewId, memberId, reviewImage, reviewText, createdAt );

        return hairShopReviewsResponse;
    }
//    List<ReviewDto.memberReviewsResponse> memberReviewsToReviewResponseDto(List<Review> reviews);

    default List<ReviewDto.memberReviewsResponse> memberReviewsToReviewResponseDto(List<Review> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<ReviewDto.memberReviewsResponse> list = new ArrayList<ReviewDto.memberReviewsResponse>( reviews.size() );
        for ( Review review : reviews ) {
            list.add( reviewTomemberReviewsResponse( review ) );
        }

        return list;
    }

    default ReviewDto.memberReviewsResponse reviewTomemberReviewsResponse(Review review) {
        if ( review == null ) {
            return null;
        }

        Long reviewId = null;
        String reviewImage = null;
        String reviewText = null;
        LocalDateTime createdAt = null;
        Long hairShopId = null;

        reviewId = review.getReviewId();
        reviewImage = review.getReviewImage();
        reviewText = review.getReviewText();
        createdAt = review.getCreatedAt();
        hairShopId = review.getHairShop().getHairShopId();

        ReviewDto.memberReviewsResponse memberReviewsResponse = new ReviewDto.memberReviewsResponse( reviewId, hairShopId, reviewImage, reviewText, createdAt );

        return memberReviewsResponse;
    }
}
