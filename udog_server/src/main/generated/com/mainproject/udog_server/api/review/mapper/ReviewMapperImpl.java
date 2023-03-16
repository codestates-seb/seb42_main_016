package com.mainproject.udog_server.api.review.mapper;

import com.mainproject.udog_server.api.dto.ReviewDto.Patch;
import com.mainproject.udog_server.api.dto.ReviewDto.Post;
import com.mainproject.udog_server.api.dto.ReviewDto.Response;
import com.mainproject.udog_server.api.dto.ReviewDto.listResponse;
import com.mainproject.udog_server.api.mapper.*;
import com.mainproject.udog_server.review.Review;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-16T11:11:28+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class ReviewMapperImpl implements ReviewMapper {

    @Override
    public Review reviewPostDtoToReview(Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Review review = new Review();

        review.setReviewText( postDto.getReviewText() );
        review.setReviewImage( postDto.getReviewImage() );
        review.setMember( postDto.getMember() );

        return review;
    }

    @Override
    public Review reviewPatchDtoToReview(Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Review review = new Review();

        review.setId( patchDto.getId() );
        review.setReviewText( patchDto.getReviewText() );
        review.setReviewImage( patchDto.getReviewImage() );
        review.setMember( patchDto.getMember() );

        return review;
    }

    @Override
    public Response reviewToReviewResponseDto(Review review) {
        if ( review == null ) {
            return null;
        }

        Long id = null;
        String reviewImage = null;
        String reviewText = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        id = review.getId();
        reviewImage = review.getReviewImage();
        reviewText = review.getReviewText();
        createdAt = review.getCreatedAt();
        modifiedAt = review.getModifiedAt();

        int reviewLikeCount = 0;

        Response response = new Response( id, reviewImage, reviewText, reviewLikeCount, createdAt, modifiedAt );

        return response;
    }

    @Override
    public List<listResponse> reviewsToReviewResponseDto(List<Review> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<listResponse> list = new ArrayList<listResponse>( reviews.size() );
        for ( Review review : reviews ) {
            list.add( reviewTolistResponse( review ) );
        }

        return list;
    }

    protected listResponse reviewTolistResponse(Review review) {
        if ( review == null ) {
            return null;
        }

        Long id = null;
        String reviewImage = null;
        String reviewText = null;
        LocalDateTime createdAt = null;

        id = review.getId();
        reviewImage = review.getReviewImage();
        reviewText = review.getReviewText();
        createdAt = review.getCreatedAt();

        listResponse listResponse = new listResponse( id, reviewImage, reviewText, createdAt );

        return listResponse;
    }
}
