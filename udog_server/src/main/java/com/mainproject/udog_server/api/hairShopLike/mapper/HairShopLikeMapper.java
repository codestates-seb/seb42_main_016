package com.mainproject.udog_server.api.hairShopLike.mapper;

import com.mainproject.udog_server.api.hairShop.mapper.HairShopMapper;
import com.mainproject.udog_server.api.hairShopLike.dto.HairShopLikeDto;
import com.mainproject.udog_server.api.hairShopLike.entity.HairShopLike;
import com.mainproject.udog_server.api.member.MemberMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {MemberMapper.class, HairShopMapper.class})
public interface HairShopLikeMapper {
    HairShopLike hairShopLikePostDtoToHairShopLike(HairShopLikeDto.Post postDto);
//    @Mapping(source = "member.memberId", target = "memberId");
//    @Mapping(source = "hairShop.hairShopId", target = "hairShopId");
}
