package com.mainproject.udog_server.styleBook;

import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import java.util.*;

public interface StyleBookRepository extends JpaRepository<Review, Long> {
    @Query("Select r from Review r order by r.styleLikes.size desc")
    List<Review> findTop(Pageable pageable);
}
