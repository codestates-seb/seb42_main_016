package com.mainproject.udog_server.review.repository;

import com.mainproject.udog_server.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
