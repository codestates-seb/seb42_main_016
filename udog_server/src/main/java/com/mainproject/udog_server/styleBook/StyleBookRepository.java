package com.mainproject.udog_server.styleBook;

import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;

public interface StyleBookRepository extends JpaRepository<Review, Long> {
}
