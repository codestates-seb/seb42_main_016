package com.mainproject.udog_server.review;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public Review createReview(Review review) {
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }

    public Review updateReview(Review review, Long memberId) {
        // 존재하는 리뷰인지 확인
        Review findReview = findVerifiedReview(review.getReviewId());
        // 멤버id와 로그인 멤버id를 비교하는 로직
        compareIdAndLoginId(findReview.getMember().getMemberId(), memberId);

        Optional.ofNullable(review.getReviewText())
                .ifPresent(review_text -> findReview.setReviewText(review_text));

        findReview.setModifiedAt(LocalDateTime.now());

        return reviewRepository.save(findReview);
    }

    public Review findReview(Long reviewId) {
        Review review = findVerifiedReview(reviewId);

        return review;
    }

    public Page<Review> findMemberReviews(long memberId, int page, int size) {
        return reviewRepository.findAllByMemberMemberId(memberId, PageRequest.of(page, size, Sort.by("reviewId").descending()));
    }

    public Page<Review> findHairShopReviews(long hairShopId, int page, int size) {
        return reviewRepository.findAllByHairShopHairShopId(hairShopId, PageRequest.of(page, size, Sort.by("reviewId").descending()));
    }

    public void deleteReview(Long reviewId, Long memberId) {
        Review findReview = findVerifiedReview(reviewId);
        compareIdAndLoginId(findReview.getMember().getMemberId(), memberId);

        reviewRepository.delete(findReview);
    }

    // 존재하는 리뷰인지 확인
    public Review findVerifiedReview(Long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);

        Review findReview =
                optionalReview.orElseThrow(() -> null);

        return findReview;
    }
    // principal로 받아온 memberId랑 DB에 저장된 Review의 memberId 같은지 검증하는 로직
    // 틀리면 -> 요청 오류
    private void compareIdAndLoginId(Long id, Long memberId) {
        if(!id.equals(memberId))
            throw null;
    }
}
