package com.mainproject.udog_server.review.mapper;

import com.mainproject.udog_server.review.dto.ReviewDto;
import com.mainproject.udog_server.review.entity.Review;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewPostDtoToReview(ReviewDto.Post postDto);
    Review reviewPatchDtoToReview(ReviewDto.Patch patchDto);
    ReviewDto.Response reviewToReviewResponseDto(Review review);
}
