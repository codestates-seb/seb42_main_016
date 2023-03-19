package com.mainproject.udog_server.hairshop;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.*;

import java.time.*;

public interface HairShopRepository extends JpaRepository<HairShop, Long> {
    @Query("SELECT hs FROM HairShop hs WHERE hs.hairShopLikes.createdAt > :beginOfParam ORDER BY hs.hairShopLikes.size DESC")
    Page<HairShop> findTop(@Param("beginOfParam") LocalDateTime beginOfDay, Pageable pageable);

    default Page<HairShop> findTopOfToday(Pageable pageable) {
        LocalDate today = LocalDate.now();
        LocalDateTime beginOfToday = today.atStartOfDay();
        return findTop(beginOfToday, pageable);
    }

    default Page<HairShop> findTopOfTheWeek(Pageable pageable) {
        LocalDate weekBeforeToday = LocalDate.now().minusWeeks(1);
        LocalDateTime beginOfWeekBeforeToday = weekBeforeToday.atStartOfDay();
        return findTop(beginOfWeekBeforeToday, pageable);
    }
}
