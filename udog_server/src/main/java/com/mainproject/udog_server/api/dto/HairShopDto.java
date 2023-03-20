package com.mainproject.udog_server.api.dto;

import com.mainproject.udog_server.hairshopLike.HairShopLikeService;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class HairShopDto {
    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Post {
        @NotBlank
        private String hairShopName;
        @NotBlank
        private String hairShopAddress;
        @NotNull
        private String hairShopPhone;
        private String hairShopDescription;
        private String hairShopImage;

        @Builder
        public Post(String hairShopName, String hairShopAddress, String hairShopPhone, String hairShopDescription, String hairShopImage) {
            this.hairShopName = hairShopName;
            this.hairShopAddress = hairShopAddress;
            this.hairShopPhone = hairShopPhone;
            this.hairShopDescription = hairShopDescription;
            this.hairShopImage = hairShopImage;
        }
    }
    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response{
        private long hairShopId;
        private String hairShopName;
        private String hairShopAddress;
        private String hairShopPhone;
        private String hairShopDescription;
        private String hairShopImage;
        private int likeCount;
        private int reviewCount;
        private long hairShopLikeId;

        @Builder
        public Response(long hairShopId, String hairShopName, String hairShopAddress, String hairShopPhone, String hairShopDescription, String hairShopImage, int likeCount, int reviewCount, long hairShopLikeId) {
            this.hairShopId = hairShopId;
            this.hairShopName = hairShopName;
            this.hairShopAddress = hairShopAddress;
            this.hairShopPhone = hairShopPhone;
            this.hairShopDescription = hairShopDescription;
            this.hairShopImage = hairShopImage;
            this.likeCount = likeCount;
            this.reviewCount = reviewCount;
            this.hairShopLikeId = hairShopLikeId;
        }
    }
}
