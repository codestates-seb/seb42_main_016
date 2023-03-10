package com.mainproject.udog_server.review.service;

import com.mainproject.udog_server.review.entity.Review;
import com.mainproject.udog_server.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
//    public Review createReview(Review review, Long memberId) {
    public Review createReview(Review review) {
//        // 존재하는 멤버인지 확인
//        Member member = verifyMember(memberId);

//        review.setMember(member);
        review.setCreated_at(LocalDateTime.now());

        return reviewRepository.save(review);
    }

//    public Review updateReview(Review review, Long memberId) {
    public Review updateReview(Review review) {
        // 존재하는 리뷰인지 확인
        Review findReview = findVerifiedReview(review.getId());
        // TODO : 멤버id와 로그인 멤버id를 비교하는 로직 필요
//        memberService.compareIdAndLoginId(memberId);

        Optional.ofNullable(review.getReview_pic())
                .ifPresent(review_pic -> findReview.setReview_pic(review_pic));
        Optional.ofNullable(review.getReview_text())
                .ifPresent(review_text -> findReview.setReview_text(review_text));

        findReview.setModified_at(LocalDateTime.now());

        return reviewRepository.save(findReview);
    }

    public Review findReview(Long reviewId) {
        Review review = findVerifiedReview(reviewId);

        return review;
    }

    public List<Review> findReviews() {
        // TODO : 무한스크롤? 페이지네이션?
        return reviewRepository.findAll(Sort.by("id").descending());
    }

    public void deleteReview(Long reviewId) {
        Review findReview = findVerifiedReview(reviewId);

        reviewRepository.delete(findReview);
    }

//    //     존재하는 멤버인지 확인
//    private Member verifyMember(Long memberId) {
//        Member member = memberService.checkMemberExistById(memberId);
//
//        return member;
//    }

    //     존재하는 리뷰인지 확인
    private Review findVerifiedReview(Long reviewId) {
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);

        Review findReview =
                optionalReview.orElseThrow(() -> null);
//                        new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));

        return findReview;
    }
}
