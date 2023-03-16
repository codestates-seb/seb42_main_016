package com.mainproject.udog_server.styleLike;

import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface StyleLikeRepository extends JpaRepository<StyleLike, Long> {
    int countByReviewId(Long reviewId);
    Optional<StyleLike> findByMemberAndReview(Member member, Review review);
}
