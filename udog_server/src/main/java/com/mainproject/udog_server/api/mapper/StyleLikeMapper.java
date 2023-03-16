package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.StyleLikeDto;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import com.mainproject.udog_server.styleLike.*;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface StyleLikeMapper {
    @Mapping(source = "styleLike.member.memberId", target = "memberId")
    @Mapping(source = "styleLike.review.id", target = "reviewId")
    StyleLikeDto.Response StyleLikeToStyleLikeResponseDto(StyleLike styleLike);
}
