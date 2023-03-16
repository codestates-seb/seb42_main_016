package com.mainproject.udog_server.reviewLike;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
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

//    public ReviewLike addReviewLike(ReviewLike reviewLike, Long memberId, Long reviewId) {
//        ReviewLike existingReviewLike = reviewLikeRepository.findByMemberIdAndReviewId(memberId, reviewId);
//
//        if(existingReviewLike != null) {
//            deleteReviewLike(memberId, reviewId);
//        }
//        else
//    }


    public int getReviewLikeCount(Long reviewId) {
        return reviewLikeRepository.countByReviewId(reviewId);
    }

    public void deleteReviewLike(Long reviewLikeId, Long memberId) {
        ReviewLike findReviewLike = findVerifiedReviewLike(reviewLikeId);
        compareIdAndLoginId(findReviewLike.getMember().getMemberId(), memberId);

        reviewLikeRepository.delete(findReviewLike);
    }

    private ReviewLike findVerifiedReviewLike(Long reviewLikeId) {
        Optional<ReviewLike> optionalReviewLike = reviewLikeRepository.findById(reviewLikeId);

        ReviewLike findReviewLike =
                optionalReviewLike.orElseThrow(() -> null);
//        new BusinessLogicException(ExceptionCode.REVIEWLIKE_NOT_FOUND));
        return findReviewLike;
    }

    private void compareIdAndLoginId(Long id, Long memberId) {
        if(!id.equals(memberId))
            throw null;
    }

//    public ReviewLike findByMemberIdAndReviewId(Long memberId, Long reviewId) {
//        return reviewLikeRepository.findByMember_memberIdAndReviewId(memberId, reviewId);
//    }
public ReviewLike findByMemberIdAndReviewId(Long memberId, Long reviewId) {
    ReviewLike findReviewLike = reviewLikeRepository.findByMember_memberIdAndReviewId(memberId, reviewId);
    if(findReviewLike == null) {
        Review review = new Review();
        review.setId(reviewId);
        Member member = new Member();
        member.setMemberId(memberId);
        ReviewLike reviewLike = new ReviewLike(member, review);
        return reviewLikeRepository.save(reviewLike);
    } else {
        reviewLikeRepository.delete(findReviewLike);
        return null;
    }
}
}