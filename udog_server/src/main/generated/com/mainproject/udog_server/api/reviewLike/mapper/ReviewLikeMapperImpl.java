package com.mainproject.udog_server.api.reviewLike.mapper;

import com.mainproject.udog_server.api.member.Member;
import com.mainproject.udog_server.api.review.entity.Review;
import com.mainproject.udog_server.api.reviewLike.dto.ReviewLikeResponseDto;
import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-15T13:38:35+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class ReviewLikeMapperImpl implements ReviewLikeMapper {

    @Override
    public ReviewLikeResponseDto ReviewLikeToReviewLikeResponseDto(ReviewLike reviewLike) {
        if ( reviewLike == null ) {
            return null;
        }

        ReviewLikeResponseDto reviewLikeResponseDto = new ReviewLikeResponseDto();

        reviewLikeResponseDto.setMemberId( reviewLikeMemberMemberId( reviewLike ) );
        reviewLikeResponseDto.setReviewId( reviewLikeReviewId( reviewLike ) );
        reviewLikeResponseDto.setId( reviewLike.getId() );

        return reviewLikeResponseDto;
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
