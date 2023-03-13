package com.mainproject.udog_server.api.hairShopLike.mapper;

import com.mainproject.udog_server.api.hairShopLike.dto.HairShopLikeDto.Post;
import com.mainproject.udog_server.api.hairShopLike.entity.HairShopLike;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-13T03:16:20+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class HairShopLikeMapperImpl implements HairShopLikeMapper {

    @Override
    public HairShopLike hairShopLikePostDtoToHairShopLike(Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        HairShopLike hairShopLike = new HairShopLike();

        return hairShopLike;
    }
}
