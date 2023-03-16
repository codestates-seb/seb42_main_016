package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.ReviewLikeDto.Response;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.reviewLike.ReviewLike;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-16T22:04:22+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class ReviewLikeMapperImpl implements ReviewLikeMapper {

    @Override
    public Response ReviewLikeToReviewLikeResponseDto(ReviewLike reviewLike) {
        if ( reviewLike == null ) {
            return null;
        }

        Response response = new Response();

        response.setMemberId( reviewLikeMemberMemberId( reviewLike ) );
        response.setReviewId( reviewLikeReviewId( reviewLike ) );
        response.setId( reviewLike.getId() );

        return response;
    }

    private Long reviewLikeMemberMemberId(ReviewLike reviewLike) {
        if ( reviewLike == null ) {
            return null;
        }
        Member member = reviewLike.getMember();
        if ( member == null ) {
            return null;
        }
        long memberId = member.getMemberId();
        return memberId;
    }

    private Long reviewLikeReviewId(ReviewLike reviewLike) {
        if ( reviewLike == null ) {
            return null;
        }
        Review review = reviewLike.getReview();
        if ( review == null ) {
            return null;
        }
        Long id = review.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
