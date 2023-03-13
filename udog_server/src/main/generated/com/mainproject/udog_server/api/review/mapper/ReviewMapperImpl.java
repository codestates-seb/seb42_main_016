package com.mainproject.udog_server.api.review.mapper;

import com.mainproject.udog_server.api.review.dto.ReviewDto.Patch;
import com.mainproject.udog_server.api.review.dto.ReviewDto.Post;
import com.mainproject.udog_server.api.review.dto.ReviewDto.Response;
import com.mainproject.udog_server.api.review.entity.Review;
import java.time.LocalDateTime;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-13T03:16:20+0900",
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

        review.setReview_text( postDto.getReview_text() );
        review.setReview_pic( postDto.getReview_pic() );

        return review;
    }

    @Override
    public Review reviewPatchDtoToReview(Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Review review = new Review();

        review.setId( patchDto.getId() );
        review.setReview_text( patchDto.getReview_text() );
        review.setReview_pic( patchDto.getReview_pic() );

        return review;
    }

    @Override
    public Response reviewToReviewResponseDto(Review review) {
        if ( review == null ) {
            return null;
        }

        Long id = null;
        String review_pic = null;
        String review_text = null;
        LocalDateTime created_at = null;
        LocalDateTime modified_at = null;

        id = review.getId();
        review_pic = review.getReview_pic();
        review_text = review.getReview_text();
        created_at = review.getCreated_at();
        modified_at = review.getModified_at();

        Response response = new Response( id, review_pic, review_text, created_at, modified_at );

        return response;
    }
}
