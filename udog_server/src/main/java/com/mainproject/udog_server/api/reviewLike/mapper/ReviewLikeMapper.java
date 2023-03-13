package com.mainproject.udog_server.api.reviewLike.mapper;

import com.mainproject.udog_server.api.member.Member;
import com.mainproject.udog_server.api.review.entity.Review;
import com.mainproject.udog_server.api.reviewLike.dto.ReviewLikeDto;
import com.mainproject.udog_server.api.reviewLike.dto.ReviewLikeResponseDto;
import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReviewLikeMapper {
    default ReviewLike reviewLikeDtoToReviewLike(ReviewLikeDto reviewLikeDto) {
        Review review = new Review();
        Member member = new Member();
        ReviewLike reviewLike = new ReviewLike();

        review.setId(reviewLikeDto.getReviewId());
        member.setMemberId(reviewLikeDto.getMemberId());

        reviewLike.setReview(review);
        reviewLike.setMember(member);

        return reviewLike;
    }
    @Mapping(source = "reviewLike.member.memberId", target = "memberId")
    @Mapping(source = "reviewLike.review.id", target = "reviewId")
    ReviewLikeResponseDto ReviewLikeToReviewLikeResponseDto(ReviewLike reviewLike);
}
