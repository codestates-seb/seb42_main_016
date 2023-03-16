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
        private String reviewImage;
        @NotBlank
        private String reviewText;
        private Member member;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long id;
        @Nullable
        private String reviewImage;
        @Nullable
        private String reviewText;
        private Member member;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private Long id;
        private String reviewImage;
        private String reviewText;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class listResponse {
        private Long id;
        private String reviewImage;
        private String reviewText;
        private LocalDateTime createdAt;
    }
}
