package com.mainproject.udog_server.api.reviewLike.controller;

import com.mainproject.udog_server.api.reviewLike.dto.ReviewLikeDto;
import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import com.mainproject.udog_server.api.reviewLike.mapper.ReviewLikeMapper;
import com.mainproject.udog_server.api.reviewLike.service.ReviewLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/reviewLikes")
@RequiredArgsConstructor
public class ReviewLikeController {

    private final ReviewLikeService reviewLikeService;
    private final ReviewLikeMapper mapper;

    @PostMapping
    public ResponseEntity createReviewLike(@RequestBody ReviewLikeDto reviewLikeDto) {
        ReviewLike reviewLike = mapper.reviewLikeDtoToReviewLike(reviewLikeDto);

        ReviewLike response = reviewLikeService.addReviewLike(reviewLike);
        return new ResponseEntity<>(mapper.ReviewLikeToReviewLikeResponseDto(response), HttpStatus.CREATED);
    }

    @DeleteMapping("/{reviewLike-id}")
    public ResponseEntity<Void> deleteReviewLike(@PathVariable("reviewLike-id") @Positive Long reviewLikeId) {
        reviewLikeService.deleteReviewLike(reviewLikeId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}