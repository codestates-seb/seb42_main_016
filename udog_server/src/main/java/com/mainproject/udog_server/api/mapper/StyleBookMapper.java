package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.*;

import com.mainproject.udog_server.review.*;
import org.mapstruct.*;

import java.util.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface StyleBookMapper {
    @Mapping(source = "hairShop.hairShopId", target = "hairShopId")
    @Mapping(source = "myStyleLikeId", target = "styleLikeId")
    StyleBookResponseDto reviewToStyleBookResponse(Review review);
    List<StyleBookResponseDto> reviewsToStyleBookResponses(List<Review> reviews);
}
