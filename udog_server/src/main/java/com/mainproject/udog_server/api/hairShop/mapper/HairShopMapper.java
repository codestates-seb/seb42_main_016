package com.mainproject.udog_server.api.hairShop.mapper;

import com.mainproject.udog_server.api.hairShop.dto.HairShopDto;
import com.mainproject.udog_server.api.hairShop.entity.HairShop;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface HairShopMapper {
    HairShopDto.Response hairShopToHairShopResponse(HairShop hairShop);

    List<HairShopDto.Response> hairShopsToHairShopResponses(List<HairShop> hairShops);

}
