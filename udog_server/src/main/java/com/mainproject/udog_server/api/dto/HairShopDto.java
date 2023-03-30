package com.mainproject.udog_server.api.dto;

import com.mainproject.udog_server.hairshopLike.HairShopLikeService;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class HairShopDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        private String hairShopName;
        @NotBlank
        private String hairShopAddress;
        @NotNull
        private String hairShopPhone;
        private String hairShopDescription;
        private String hairShopImage;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private long hairShopId;
        private String hairShopName;
        private String hairShopAddress;
        private String hairShopPhone;
        private String hairShopDescription;
        private String hairShopImage;
        private String link;
        private int likeCount;
        private int reviewCount;
        private long hairShopLikeId;
    }
}
