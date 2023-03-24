package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.ReviewDto;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.reservation.*;

import com.mainproject.udog_server.review.Review;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    default Review reviewPostDtoToReview(ReviewDto.Post postDto){
        HairShop hairShop = new HairShop();
        Reservation reservation = new Reservation();
        Review review = new Review();
        hairShop.setHairShopId(postDto.getHairShopId());
        reservation.setReservationId(postDto.getReservationId());
        review.setHairShop(hairShop);
        review.setReviewText(postDto.getReviewText());

        return review;
    }
    Review reviewPatchDtoToReview(ReviewDto.Patch patchDto);
    ReviewDto.Response reviewToReviewResponseDto(Review review);
    List<ReviewDto.listResponse> reviewsToReviewResponseDto(List<Review> reviews);
}
