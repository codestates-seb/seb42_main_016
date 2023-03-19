package com.mainproject.udog_server.hairshop;

import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.*;

import java.time.*;

public interface HairShopRepository extends JpaRepository<HairShop, Long> {
    //Todo : hs.created는 데이터 생성날짜고 hs.hairShopLikes.createdAt이 되어야함
    //       먼저 hairShopLike 엔티티에 createdAt 만들어둠
    //Todo : StyleBook도 비슷하게 적용시켜야함

//    @Query("SELECT hs FROM HairShop hs WHERE hs.hairShopLikes.createdAt > :beginOfParam ORDER BY hs.hairShopLikes.size DESC")
    @Query("SELECT hs FROM HairShop hs ORDER BY hs.hairShopLikes.size DESC")
    Page<HairShop> findTop(@Param("beginOfParam") LocalDateTime beginOfDay, Pageable pageable);

    default Page<HairShop> findTopOfToday(Pageable pageable) {
        LocalDate today = LocalDate.now();
        LocalDateTime beginOfToday = today.atStartOfDay();
        // Todo : 일단 beginOfDay도 1년치로 바꿔둠
//        return findTop(beginOfToday, pageable);
        return findTop(LocalDateTime.now().minusYears(1), pageable);
    }

    default Page<HairShop> findTopOfTheWeek(Pageable pageable) {
        LocalDate weekBeforeToday = LocalDate.now().minusWeeks(1);
        LocalDateTime beginOfWeekBeforeToday = weekBeforeToday.atStartOfDay();
        return findTop(beginOfWeekBeforeToday, pageable);
    }
}
