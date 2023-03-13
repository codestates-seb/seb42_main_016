package com.mainproject.udog_server.api.reviewLike.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReviewLikeDto {
    @NotBlank
    private Long memberId;
    @NotBlank
    private Long reviewId;
}