package com.mainproject.udog_server.api.hairShopLike.dto;

import com.mainproject.udog_server.api.member.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class HairShopLikeDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private long hairShopId;

        private Member member;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long hairShopLikeId;
        private long memberId;
        private long hairShopId;
    }
}
