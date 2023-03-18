package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.HairShopLikeDto;
import com.mainproject.udog_server.hairshopLike.HairShopLike;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring",uses = {MemberMapper.class, HairShopMapper.class})
public interface HairShopLikeMapper {
    HairShopLike hairShopLikePostDtoToHairShopLike(HairShopLikeDto.Post postDto);
    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "hairShop.hairShopId", target = "hairShopId")
    HairShopLikeDto.Response HairShopLikeToHairShopLikeResponse(HairShopLike hairShopLike);
}
