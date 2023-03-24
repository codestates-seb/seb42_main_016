package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.StyleLikeDto.Response;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.styleLike.StyleLike;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-23T19:18:15+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class StyleLikeMapperImpl implements StyleLikeMapper {

    @Override
    public Response StyleLikeToStyleLikeResponseDto(StyleLike styleLike) {
        if ( styleLike == null ) {
            return null;
        }

        Response response = new Response();

        response.setMemberId( styleLikeMemberMemberId( styleLike ) );
        response.setReviewId( styleLikeReviewReviewId( styleLike ) );
        response.setStyleLikeId( styleLike.getStyleLikeId() );

        return response;
    }

    private Long styleLikeMemberMemberId(StyleLike styleLike) {
        if ( styleLike == null ) {
            return null;
        }
        Member member = styleLike.getMember();
        if ( member == null ) {
            return null;
        }
        long memberId = member.getMemberId();
        return memberId;
    }

    private Long styleLikeReviewReviewId(StyleLike styleLike) {
        if ( styleLike == null ) {
            return null;
        }
        Review review = styleLike.getReview();
        if ( review == null ) {
            return null;
        }
        Long reviewId = review.getReviewId();
        if ( reviewId == null ) {
            return null;
        }
        return reviewId;
    }
}
