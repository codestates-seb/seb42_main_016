package com.mainproject.udog_server.styleBook;

import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.*;

import javax.persistence.*;
import java.time.*;
import java.util.*;

public interface StyleBookRepository extends JpaRepository<Review, Long> {
    @Query("SELECT r FROM Review r WHERE r.createdAt > :beginOfParam ORDER BY r.styleLikes.size DESC")
    List<Review> findTop(@Param("beginOfParam")LocalDateTime beginOfWeekBeforeToday, Pageable pageable);

    default List<Review> findTopOfTheWeek(Pageable pageable) {
        LocalDate weekBeforeToday = LocalDate.now().minusWeeks(1);
        LocalDateTime beginOfWeekBeforeToday = weekBeforeToday.atStartOfDay();
        return findTop(beginOfWeekBeforeToday, pageable);
    }
}
