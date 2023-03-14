package com.mainproject.udog_server.api.hairShop.dto;

import com.mainproject.udog_server.api.hairShopLike.service.HairShopLikeService;
import lombok.*;

public class HairShopDto {
    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Response{
        private long hairShopId;
        private String hairShopName;
        private String hairShopAddress;
        private int hairShopPhone;
        private String hairShopDescription;
        private String hairShopImage;
        private int likeCount;
        private int reviewCount;

        public int getLikeCount(HairShopLikeService hairShopLikeService) {
            int likeCount = hairShopLikeService.likeCount(hairShopId);
            return likeCount;
        }

        @Builder
        public Response(long hairShopId, String hairShopName, String hairShopAddress, int hairShopPhone, String hairShopDescription, String hairShopImage, int likeCount, int reviewCount) {
            this.hairShopId = hairShopId;
            this.hairShopName = hairShopName;
            this.hairShopAddress = hairShopAddress;
            this.hairShopPhone = hairShopPhone;
            this.hairShopDescription = hairShopDescription;
            this.hairShopImage = hairShopImage;
            this.likeCount = likeCount;
            this.reviewCount = reviewCount;
        }
    }
}
