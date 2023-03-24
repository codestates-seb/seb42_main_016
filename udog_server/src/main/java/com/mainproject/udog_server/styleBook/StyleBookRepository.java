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
    @Query("SELECT r FROM Review r WHERE r IN (:topList) ORDER BY r.styleLikes.size DESC")
    Page<Review> findTop(@Param("topList")List<Review> topList, Pageable pageable);
}
