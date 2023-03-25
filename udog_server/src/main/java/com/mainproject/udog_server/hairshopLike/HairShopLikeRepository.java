package com.mainproject.udog_server.hairshopLike;

import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.*;

import java.time.*;
import java.util.*;

public interface HairShopLikeRepository extends JpaRepository<HairShopLike, Long> {
    Optional<HairShopLike> findByHairShopLikeId(Long hairShopId);
    int countByHairShopHairShopId(Long hairShopId);

    Optional<HairShopLike> findByMemberAndHairShop(Member memberId, HairShop hairShopId);

    @Query("SELECT hsl.hairShop, count(hsl.hairShop) FROM HairShopLike hsl WHERE hsl.createdAt > :beginOfParam GROUP BY hsl.hairShop ORDER BY count(hsl.hairShop) DESC")
    List<HairShop> findTop(@Param("beginOfParam") LocalDateTime beginOfDay, Pageable pageable);

    default List<HairShop> findTopOfBeforeOneDay(Pageable pageable) {
        LocalDateTime beforeOneDay = LocalDateTime.now().minusDays(1);
        return findTop(beforeOneDay, pageable);
    }

    default List<HairShop> findTopOfToday(Pageable pageable) {
        LocalDate today = LocalDate.now();
        LocalDateTime beginOfToday = today.atStartOfDay();
        // Todo : 일단 beginOfDay도 1년치로 바꿔둠
//        return findTop(beginOfToday, pageable);
        return findTop(LocalDateTime.now().minusYears(1), pageable);
    }

    default List<HairShop> findTopOfTheWeek(Pageable pageable) {
        LocalDate weekBeforeToday = LocalDate.now().minusWeeks(1);
        LocalDateTime beginOfWeekBeforeToday = weekBeforeToday.atStartOfDay();
        return findTop(beginOfWeekBeforeToday, pageable);
    }
}
