package com.mainproject.udog_server.api.dto;

import com.mainproject.udog_server.member.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class ReviewDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        private long hairShopId;
        @NotBlank
        private long reservationId;
        @NotBlank
        private String reviewText;
        private Member member;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long reviewId;
        @Nullable
        private String reviewText;
        private Member member;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private Long reviewId;
        private String reviewImage;
        private String reviewText;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class hairShopReviewsResponse {
        private Long reviewId;
        private Long memberId;
        private String reviewImage;
        private String reviewText;
        private LocalDateTime createdAt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class memberReviewsResponse {
        private Long reviewId;
        private Long hairShopId;
        private String hairShopName;
        private String reviewImage;
        private String reviewText;
        private LocalDateTime createdAt;
    }
}
