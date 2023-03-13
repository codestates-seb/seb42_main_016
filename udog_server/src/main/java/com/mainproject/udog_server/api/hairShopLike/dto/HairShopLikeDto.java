package com.mainproject.udog_server.api.hairShopLike.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class HairShopLikeDto {
    @Getter
    @Setter
    public static class Post {
        private long hairShopId;
    }
}
