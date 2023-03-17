package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.ReviewCompositeService;
import com.mainproject.udog_server.api.dto.ReviewDto;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.api.mapper.ReviewMapper;
import com.mainproject.udog_server.dto.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
@CrossOrigin
public class ReviewController {

    private final ReviewCompositeService compositeService;
    private final ReviewMapper mapper;
    @PostMapping
    public ResponseEntity postReview(@RequestBody ReviewDto.Post postDto, Principal principal) {
        Review creatingReview = mapper.reviewPostDtoToReview(postDto);
        Review createdReview = compositeService.createReview(creatingReview,principal.getName());

        return ResponseEntity.status(HttpStatus.CREATED).location(URI.create("/reviews")).body(mapper.reviewToReviewResponseDto(createdReview));
    }

    @PatchMapping("/{review-id}")
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive Long reviewId,
                                      @RequestBody ReviewDto.Patch patchDto, Principal principal) {
        patchDto.setReviewId(reviewId);

        Review updatingReview = mapper.reviewPatchDtoToReview(patchDto);
        Review updatedReview = compositeService.updateReview(updatingReview, principal.getName());
        ReviewDto.Response response = mapper.reviewToReviewResponseDto(updatedReview);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{review-id}")
    public ResponseEntity getReview(@PathVariable("review-id") @Positive Long reviewId) {
        Review review = compositeService.getReview(reviewId);
        ReviewDto.Response response = mapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getHairShopReviews(@Positive @RequestParam Long hairShopId,
                                             @Positive @RequestParam int page,
                                             @Positive @RequestParam int size) {
        Page<Review> pageReviews = compositeService.getHairShopReviews(hairShopId, page, size);
        List<Review> reviews = pageReviews.getContent();

        MultiResponseDto response = new MultiResponseDto(mapper.reviewsToReviewResponseDto(reviews), pageReviews);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive Long reviewId, Principal principal) {
        compositeService.deleteReview(reviewId, principal.getName());

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
