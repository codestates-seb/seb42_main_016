package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.ReviewLikeCompositeService;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.api.dto.ReviewLikeDto;
import com.mainproject.udog_server.reviewLike.ReviewLike;
import com.mainproject.udog_server.api.mapper.ReviewLikeMapper;
import com.mainproject.udog_server.reviewLike.ReviewLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/reviewLikes")
@RequiredArgsConstructor
public class ReviewLikeController {

    private final ReviewLikeCompositeService compositeService;
    private final ReviewLikeMapper mapper;

    @PostMapping
    public ResponseEntity doReviewLike(@RequestBody ReviewLikeDto reviewLikeDto, Principal principal) {
        ReviewLike reviewLike = mapper.reviewLikeDtoToReviewLike(reviewLikeDto);
        ReviewLike response = compositeService.doReviewLike(reviewLike, principal.getName());
        if(response.equals(null)) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else
//        Long reviewId = reviewLikeDto.getReviewId();
//        ReviewLike existingReviewLike = reviewLikeService.findByMemberIdAndReviewId(member.getMemberId(), reviewId);
//
//        if(existingReviewLike != null) {
////            reviewLikeService.deleteReviewLike(existingReviewLike.getId(), member.getMemberId());
//            reviewLikeService.deleteReviewLike(existingReviewLike.getId(), member.getMemberId());
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } else {
//            ReviewLike reviewLike = mapper.reviewLikeDtoToReviewLike(reviewLikeDto);
//            ReviewLike response = reviewLikeService.addReviewLike(reviewLike);
            return new ResponseEntity<>(mapper.ReviewLikeToReviewLikeResponseDto(response), HttpStatus.CREATED);
        }

//        ReviewLike reviewLike = mapper.reviewLikeDtoToReviewLike(reviewLikeDto);
//
//        ReviewLike response = reviewLikeService.addReviewLike(reviewLike);
//        return new ResponseEntity<>(mapper.ReviewLikeToReviewLikeResponseDto(response), HttpStatus.CREATED);
    }

//    @DeleteMapping("/{reviewLike-id}")
//    public ResponseEntity<Void> deleteReviewLike(@PathVariable("reviewLike-id") @Positive Long reviewLikeId,
//                                                 Principal principal) {
//        Member member = memberService.findLoginMemberByEmail(principal.getName());
//
//        reviewLikeService.deleteReviewLike(reviewLikeId, member.getMemberId());
//
//        return new ResponseEntity(HttpStatus.NO_CONTENT);
//    }
//}