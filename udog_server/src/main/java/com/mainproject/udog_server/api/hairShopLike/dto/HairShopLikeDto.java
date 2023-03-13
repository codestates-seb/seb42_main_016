package com.mainproject.udog_server.api.hairShopLike.dto;

import com.mainproject.udog_server.api.member.Member;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class HairShopLikeDto {
    @Getter
    @Setter
    public static class Post {
        @NotBlank
        private long hairShopId;

        private Member member;
    }
}
