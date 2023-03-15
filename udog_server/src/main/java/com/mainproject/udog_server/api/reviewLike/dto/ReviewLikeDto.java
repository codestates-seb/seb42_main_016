package com.mainproject.udog_server.api.reviewLike.dto;

import com.mainproject.udog_server.api.member.Member;
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
    private Member member;
    @NotBlank
    private Long reviewId;
}