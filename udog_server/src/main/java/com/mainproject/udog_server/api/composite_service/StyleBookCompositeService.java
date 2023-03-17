package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleBook.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

@Service
@RequiredArgsConstructor
public class StyleBookCompositeService {
    private final StyleBookService styleBookService;

    private final StyleLikeService styleLikeService;

    public Page<Review> getStyleBookList(int page, int size){
        Page<Review> pageReviews = styleBookService.findStyles(page, size);
        pageReviews.getContent().stream().forEach(review ->
                review.setLikeCount(styleLikeService.getReviewLikeCount(review.getReviewId())));
        return pageReviews;
    }
}
