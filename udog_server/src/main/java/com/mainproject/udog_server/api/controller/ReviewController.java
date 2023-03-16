package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.*;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.api.dto.ReviewDto;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.api.mapper.ReviewMapper;
import com.mainproject.udog_server.review.ReviewService;
import com.mainproject.udog_server.reviewLike.ReviewLikeService;
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
public class ReviewController {

    private final ReviewCompositeService compositeService;
    private final ReviewMapper mapper;
    @PostMapping
    public ResponseEntity postReview(@RequestBody ReviewDto.Post postDto, Principal principal) {
        Review creatingReview = mapper.reviewPostDtoToReview(postDto);
        Review createdReview = compositeService.createReview(creatingReview,principal.getName());

//        Review response = reviewService.createReview(review, postDto.getMemberId());

//        return new ResponseEntity<>(mapper.reviewToReviewResponseDto(response), HttpStatus.CREATED);
        return ResponseEntity.status(HttpStatus.CREATED).location(URI.create("/reviews")).body(mapper.reviewToReviewResponseDto(createdReview));
    }

    @PatchMapping("/{review-id}")
    public ResponseEntity patchReview(@PathVariable("review-id") @Positive Long reviewId,
                                      @RequestBody ReviewDto.Patch patchDto, Principal principal) {
        Member member = memberService.findLoginMemberByEmail(principal.getName());

        patchDto.setMember(member);
        patchDto.setId(reviewId);

        Review review = mapper.reviewPatchDtoToReview(patchDto);

        Review reviewDto = reviewService.updateReview(review, member.getMemberId());
        ReviewDto.Response response = mapper.reviewToReviewResponseDto(reviewDto);
        response.setReviewLikeCount(reviewLikeService.getReviewLikeCount(reviewId));
//        Review response = reviewService.updateReview(review, patchDto.getMemberId());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{review-id}")
    public ResponseEntity getReview(@PathVariable("review-id") @Positive Long reviewId) {
        Review review = compositeService.getReview(reviewId);
        ReviewDto.Response response = mapper.reviewToReviewResponseDto(review);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity<List<ReviewDto.Response>> getReviews() {
//        List<Review> reviews = reviewService.findReviews();
//
//        List<ReviewDto.Response> response = reviews.stream()
//                .map(review -> mapper.reviewToReviewResponseDto(review))
//                .collect(Collectors.toList());
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
    @GetMapping
    public ResponseEntity getReviews(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Review> pageReviews = reviewService.findReviews(page - 1, size);
        List<Review> reviews = pageReviews.getContent();

        MultiResponseDto response = new MultiResponseDto(mapper.reviewsToReviewResponseDto(reviews), pageReviews);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @DeleteMapping("/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("review-id") @Positive Long reviewId, Principal principal) {
        Member member = memberService.findLoginMemberByEmail(principal.getName());
        reviewService.deleteReview(reviewId, member.getMemberId());

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{review-id}/likeCount")
    public ResponseEntity<Integer> getReviewLikeCount(@PathVariable("review-id") Long reviewId) {
        int likeCount = reviewLikeService.getReviewLikeCount(reviewId);

        return new ResponseEntity<>(likeCount, HttpStatus.OK);
    }
}
