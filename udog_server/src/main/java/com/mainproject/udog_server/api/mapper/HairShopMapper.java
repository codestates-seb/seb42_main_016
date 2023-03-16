package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.HairShopDto;
import com.mainproject.udog_server.hairshop.HairShop;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface HairShopMapper {
    HairShop hairShopPostDtoToHairShop(HairShopDto.Post postDto);
    HairShopDto.Response hairShopToHairShopResponse(HairShop hairShop);

    List<HairShopDto.Response> hairShopsToHairShopResponses(List<HairShop> hairShops);

}
