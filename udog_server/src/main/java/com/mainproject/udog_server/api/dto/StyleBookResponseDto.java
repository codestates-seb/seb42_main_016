package com.mainproject.udog_server.api.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class StyleBookResponseDto {
    String reviewImage;
    long reviewId;
    int likeCount;
    long hairShopId;
    long styleLikeId;
}
