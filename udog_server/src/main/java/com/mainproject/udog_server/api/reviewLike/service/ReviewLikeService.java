package com.mainproject.udog_server.api.reviewLike.service;

import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import com.mainproject.udog_server.api.reviewLike.repository.ReviewLikeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewLikeService {
    private final ReviewLikeRepository reviewLikeRepository;

    public ReviewLike addReviewLike(ReviewLike reviewLike) {
        return reviewLikeRepository.save(reviewLike);
    }

    public int getReviewLikeCount(Long reviewId) {
        return reviewLikeRepository.countByReviewId(reviewId);
    }

    public void deleteReviewLike(Long reviewLikeId) {
        ReviewLike findReviewLike = findVerifiedReviewLike(reviewLikeId);

        reviewLikeRepository.delete(findReviewLike);
    }

    private ReviewLike findVerifiedReviewLike(Long reviewLikeId) {
        Optional<ReviewLike> optionalReviewLike = reviewLikeRepository.findById(reviewLikeId);

        ReviewLike findReviewLike =
                optionalReviewLike.orElseThrow(() -> null);
//        new BusinessLogicException(ExceptionCode.REVIEWLIKE_NOT_FOUND));
        return findReviewLike;
    }
}