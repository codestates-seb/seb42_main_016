package com.mainproject.udog_server.api.hairShop.mapper;

import com.mainproject.udog_server.api.dto.HairShopDto.Post;
import com.mainproject.udog_server.api.dto.HairShopDto.Response;
import com.mainproject.udog_server.api.dto.HairShopDto.Response.ResponseBuilder;
import com.mainproject.udog_server.api.mapper.*;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.hairshop.HairShop.HairShopBuilder;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-16T11:11:28+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class HairShopMapperImpl implements HairShopMapper {

    @Override
    public HairShop hairShopPostDtoToHairShop(Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        HairShopBuilder hairShop = HairShop.builder();

        hairShop.hairShopName( postDto.getHairShopName() );
        hairShop.hairShopAddress( postDto.getHairShopAddress() );
        hairShop.hairShopPhone( postDto.getHairShopPhone() );
        hairShop.hairShopDescription( postDto.getHairShopDescription() );
        hairShop.hairShopImage( postDto.getHairShopImage() );

        return hairShop.build();
    }

    @Override
    public Response hairShopToHairShopResponse(HairShop hairShop) {
        if ( hairShop == null ) {
            return null;
        }

        ResponseBuilder response = Response.builder();

        response.hairShopId( hairShop.getHairShopId() );
        response.hairShopName( hairShop.getHairShopName() );
        response.hairShopAddress( hairShop.getHairShopAddress() );
        response.hairShopPhone( hairShop.getHairShopPhone() );
        response.hairShopDescription( hairShop.getHairShopDescription() );
        response.hairShopImage( hairShop.getHairShopImage() );

        return response.build();
    }

    @Override
    public List<Response> hairShopsToHairShopResponses(List<HairShop> hairShops) {
        if ( hairShops == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( hairShops.size() );
        for ( HairShop hairShop : hairShops ) {
            list.add( hairShopToHairShopResponse( hairShop ) );
        }

        return list;
    }
}
