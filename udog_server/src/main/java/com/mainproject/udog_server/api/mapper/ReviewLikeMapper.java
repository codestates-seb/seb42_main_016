package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.api.dto.ReviewLikeDto;
import com.mainproject.udog_server.api.dto.ReviewLikeResponseDto;
import com.mainproject.udog_server.reviewLike.ReviewLike;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ReviewLikeMapper {
    default ReviewLike reviewLikeDtoToReviewLike(ReviewLikeDto reviewLikeDto) {
        Review review = new Review();
        Member member = new Member();
        ReviewLike reviewLike = new ReviewLike();

        review.setId(reviewLikeDto.getReviewId());
        member.setMemberId(reviewLikeDto.getMember().getMemberId());

        reviewLike.setReview(review);
        reviewLike.setMember(member);

        return reviewLike;
    }
    @Mapping(source = "reviewLike.member.memberId", target = "memberId")
    @Mapping(source = "reviewLike.review.id", target = "reviewId")
    ReviewLikeResponseDto ReviewLikeToReviewLikeResponseDto(ReviewLike reviewLike);
}
