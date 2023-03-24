package com.mainproject.udog_server.styleLike;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.hairshopLike.*;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.*;

import java.util.*;

@Service
@RequiredArgsConstructor
public class StyleLikeService {
    private static final int AMOUNT_OF_TOP = 3;
    private final StyleLikeRepository styleLikeRepository;
    private final ReviewService reviewService;

    public StyleLike createLike(long reviewId, Member member) {
        Review foundReview = reviewService.findReview(reviewId);
        findExistStyleLike(member, foundReview);

        StyleLike styleLike = new StyleLike();
        styleLike.setMember(member);
        styleLike.setReview(foundReview);

        return  styleLikeRepository.save(styleLike);
    }

    @Transactional(readOnly = true)
    public List<Review> findTopStyleLikeByDay(){
        return styleLikeRepository.findTopOfBeforeOneDay(PageRequest.of(0,AMOUNT_OF_TOP));
    }

    public void deleteLike(long styleLikeId) {
        StyleLike styleLike = findVerifiedStyleLike(styleLikeId);

        styleLikeRepository.delete(styleLike);
    }

    public int getReviewLikeCount(long reviewId) {
        return styleLikeRepository.countByReviewReviewId(reviewId);
    }

    public StyleLike findVerifiedStyleLike(long styleLikeId) {
        Optional<StyleLike> optionalStyleLike = styleLikeRepository.findById(styleLikeId);

        StyleLike findStyleLike= optionalStyleLike.orElseThrow(() -> null);

        return findStyleLike;
    }

    private void findExistStyleLike (Member member, Review review){
        Optional<StyleLike> styleLike = styleLikeRepository.findByMemberAndReview(member, review);
        styleLike.ifPresent(foundStyleLike -> {
            //todo:exception 처리
            throw null;
        });
    }
}
