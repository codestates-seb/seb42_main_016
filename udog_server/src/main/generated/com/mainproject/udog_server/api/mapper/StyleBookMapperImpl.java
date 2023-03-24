package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.StyleBookResponseDto;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.review.Review;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-23T19:18:15+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class StyleBookMapperImpl implements StyleBookMapper {

    @Override
    public StyleBookResponseDto reviewToStyleBookResponse(Review review) {
        if ( review == null ) {
            return null;
        }

        long hairShopId = 0L;
        long styleLikeId = 0L;
        String reviewImage = null;
        long reviewId = 0L;
        int likeCount = 0;

        hairShopId = reviewHairShopHairShopId( review );
        styleLikeId = review.getMyStyleLikeId();
        reviewImage = review.getReviewImage();
        if ( review.getReviewId() != null ) {
            reviewId = review.getReviewId();
        }
        likeCount = review.getLikeCount();

        StyleBookResponseDto styleBookResponseDto = new StyleBookResponseDto( reviewImage, reviewId, likeCount, hairShopId, styleLikeId );

        return styleBookResponseDto;
    }

    @Override
    public List<StyleBookResponseDto> reviewsToStyleBookResponses(List<Review> reviews) {
        if ( reviews == null ) {
            return null;
        }

        List<StyleBookResponseDto> list = new ArrayList<StyleBookResponseDto>( reviews.size() );
        for ( Review review : reviews ) {
            list.add( reviewToStyleBookResponse( review ) );
        }

        return list;
    }

    private long reviewHairShopHairShopId(Review review) {
        if ( review == null ) {
            return 0L;
        }
        HairShop hairShop = review.getHairShop();
        if ( hairShop == null ) {
            return 0L;
        }
        long hairShopId = hairShop.getHairShopId();
        return hairShopId;
    }
}
