package com.mainproject.udog_server.api.review.mapper;

import com.mainproject.udog_server.api.review.dto.ReviewDto;
import com.mainproject.udog_server.api.review.entity.Review;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewPostDtoToReview(ReviewDto.Post postDto);
    Review reviewPatchDtoToReview(ReviewDto.Patch patchDto);
    ReviewDto.Response reviewToReviewResponseDto(Review review);
}
