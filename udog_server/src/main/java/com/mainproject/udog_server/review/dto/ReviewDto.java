package com.mainproject.udog_server.review.dto;

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
        private String review_pic;
        @NotBlank
        private String review_text;
//        private Long memberId;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long id;
        @Nullable
        private String review_pic;
        @Nullable
        private String review_text;
        private Long memberId;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private Long id;
        private String review_pic;
        private String review_text;
        private LocalDateTime created_at;
        private LocalDateTime modified_at;
    }
}
