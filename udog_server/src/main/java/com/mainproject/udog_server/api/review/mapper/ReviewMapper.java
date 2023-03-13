package com.mainproject.udog_server.api.review.mapper;

import com.mainproject.udog_server.api.review.dto.ReviewDto;
import com.mainproject.udog_server.api.review.entity.Review;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewPostDtoToReview(ReviewDto.Post postDto);
    Review reviewPatchDtoToReview(ReviewDto.Patch patchDto);
    ReviewDto.Response reviewToReviewResponseDto(Review review);
    List<ReviewDto.listResponse> reviewsToReviewResponseDto(List<Review> reviews);
}
