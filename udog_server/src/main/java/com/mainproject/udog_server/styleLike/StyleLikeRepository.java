package com.mainproject.udog_server.styleLike;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.*;

import java.time.*;
import java.util.*;

public interface StyleLikeRepository extends JpaRepository<StyleLike, Long> {
    int countByReviewReviewId(Long reviewId);
    Optional<StyleLike> findByMemberAndReview(Member member, Review review);
    @Query("SELECT sl.review, count(sl.review) FROM StyleLike sl WHERE sl.createdAt > :beginOfParam GROUP BY sl.review ORDER BY count(sl.review) DESC")
    List<Review> findTop(@Param("beginOfParam") LocalDateTime beginOfDay, Pageable pageable);

    default List<Review> findTopOfBeforeOneDay(Pageable pageable) {
        LocalDateTime beforeOneDay = LocalDateTime.now().minusDays(1);
        return findTop(beforeOneDay, pageable);
    }

    default List<Review> findTopOfToday(Pageable pageable) {
        LocalDate today = LocalDate.now();
        LocalDateTime beginOfToday = today.atStartOfDay();
        // Todo : 일단 beginOfDay도 1년치로 바꿔둠
//        return findTop(beginOfToday, pageable);
        return findTop(LocalDateTime.now().minusYears(1), pageable);
    }

    default List<Review> findTopOfTheWeek(Pageable pageable) {
        LocalDate weekBeforeToday = LocalDate.now().minusWeeks(1);
        LocalDateTime beginOfWeekBeforeToday = weekBeforeToday.atStartOfDay();
        return findTop(beginOfWeekBeforeToday, pageable);
    }
}
