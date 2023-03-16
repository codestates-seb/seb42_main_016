package com.mainproject.udog_server.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewLikeResponseDto {
    private Long id;
    private Long memberId;
    private Long reviewId;
}
