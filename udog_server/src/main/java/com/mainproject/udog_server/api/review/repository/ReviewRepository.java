package com.mainproject.udog_server.api.review.repository;

import com.mainproject.udog_server.api.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
