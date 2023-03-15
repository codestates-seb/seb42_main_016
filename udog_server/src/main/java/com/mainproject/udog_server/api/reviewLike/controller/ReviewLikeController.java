package com.mainproject.udog_server.api.reviewLike.controller;

import com.mainproject.udog_server.api.member.Member;
import com.mainproject.udog_server.api.member.MemberService;
import com.mainproject.udog_server.api.reviewLike.dto.ReviewLikeDto;
import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import com.mainproject.udog_server.api.reviewLike.mapper.ReviewLikeMapper;
import com.mainproject.udog_server.api.reviewLike.service.ReviewLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.security.Principal;

@RestController
@RequestMapping("/reviewLikes")
@RequiredArgsConstructor
public class ReviewLikeController {

    private final ReviewLikeService reviewLikeService;
    private final MemberService memberService;
    private final ReviewLikeMapper mapper;

    @PostMapping
    public ResponseEntity createReviewLike(@RequestBody ReviewLikeDto reviewLikeDto, Principal principal) {
        Member member = memberService.findLoginMemberByEmail(principal.getName());
        reviewLikeDto.setMember(member);

        Long reviewId = reviewLikeDto.getReviewId();
        ReviewLike existingReviewLike = reviewLikeService.findByMemberIdAndReviewId(member.getMemberId(), reviewId);

        if(existingReviewLike != null) {
//            reviewLikeService.deleteReviewLike(existingReviewLike.getId(), member.getMemberId());
            reviewLikeService.deleteReviewLike(existingReviewLike.getId(), member.getMemberId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            ReviewLike reviewLike = mapper.reviewLikeDtoToReviewLike(reviewLikeDto);
            ReviewLike response = reviewLikeService.addReviewLike(reviewLike);
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
}