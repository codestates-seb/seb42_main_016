package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.ReviewDto.Patch;
import com.mainproject.udog_server.api.dto.ReviewDto.Response;
import com.mainproject.udog_server.api.dto.ReviewDto.hairShopReviewsResponse;
import com.mainproject.udog_server.api.dto.ReviewDto.memberReviewsResponse;
import com.mainproject.udog_server.review.Review;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",

    date = "2023-03-24T17:37:33+0900",

    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class ReviewMapperImpl implements ReviewMapper {

    @Override
    public Review reviewPatchDtoToReview(Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Review review = new Review();

        review.setReviewId( patchDto.getReviewId() );
        review.setReviewText( patchDto.getReviewText() );
        review.setMember( patchDto.getMember() );

        return review;
    }

    @Override
    public Response reviewToReviewResponseDto(Review review) {
        if ( review == null ) {
            return null;
        }

        Long reviewId = null;
        String reviewImage = null;
        String reviewText = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        reviewId = review.getReviewId();
        reviewImage = review.getReviewImage();
        reviewText = review.getReviewText();
        createdAt = review.getCreatedAt();
        modifiedAt = review.getModifiedAt();

        Response response = new Response( reviewId, reviewImage, reviewText, createdAt, modifiedAt );

        return response;
    }

    @Override
    public List<hairShopReviewsResponse> hairShopReviewsToReviewResponseDto(List<Review> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<hairShopReviewsResponse> list = new ArrayList<hairShopReviewsResponse>( reviews.size() );
        for ( Review review : reviews ) {
            list.add( reviewTohairShopReviewsResponse( review ) );
        }

        return list;
    }

    @Override
    public List<memberReviewsResponse> memberReviewsToReviewResponseDto(List<Review> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<memberReviewsResponse> list = new ArrayList<memberReviewsResponse>( reviews.size() );
        for ( Review review : reviews ) {
            list.add( reviewTomemberReviewsResponse( review ) );
        }

        return list;
    }

    protected hairShopReviewsResponse reviewTohairShopReviewsResponse(Review review) {
        if ( review == null ) {
            return null;
        }

        Long reviewId = null;
        String reviewImage = null;
        String reviewText = null;
        LocalDateTime createdAt = null;

        reviewId = review.getReviewId();
        reviewImage = review.getReviewImage();
        reviewText = review.getReviewText();
        createdAt = review.getCreatedAt();

        Long memberId = null;

        hairShopReviewsResponse hairShopReviewsResponse = new hairShopReviewsResponse( reviewId, memberId, reviewImage, reviewText, createdAt );

        return hairShopReviewsResponse;
    }

    protected memberReviewsResponse reviewTomemberReviewsResponse(Review review) {
        if ( review == null ) {
            return null;
        }

        Long reviewId = null;
        String reviewImage = null;
        String reviewText = null;
        LocalDateTime createdAt = null;

        reviewId = review.getReviewId();
        reviewImage = review.getReviewImage();
        reviewText = review.getReviewText();
        createdAt = review.getCreatedAt();

        Long hairShopId = null;

        memberReviewsResponse memberReviewsResponse = new memberReviewsResponse( reviewId, hairShopId, reviewImage, reviewText, createdAt );

        return memberReviewsResponse;
    }
}
