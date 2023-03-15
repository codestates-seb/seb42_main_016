package com.mainproject.udog_server.api.hairShopLike.mapper;

import com.mainproject.udog_server.api.hairShop.entity.HairShop;
import com.mainproject.udog_server.api.hairShopLike.dto.HairShopLikeDto.Post;
import com.mainproject.udog_server.api.hairShopLike.dto.HairShopLikeDto.Response;
import com.mainproject.udog_server.api.hairShopLike.entity.HairShopLike;
import com.mainproject.udog_server.api.member.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-15T13:38:35+0900",
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

        hairShopLike.setMember( postDto.getMember() );

        return hairShopLike;
    }

    @Override
    public Response HairShopLikeToHairShopLikeResponse(HairShopLike hairShopLike) {
        if ( hairShopLike == null ) {
            return null;
        }

        long memberId = 0L;
        long hairShopId = 0L;
        long hairShopLikeId = 0L;

        memberId = hairShopLikeMemberMemberId( hairShopLike );
        hairShopId = hairShopLikeHairShopHairShopId( hairShopLike );
        hairShopLikeId = hairShopLike.getHairShopLikeId();

        Response response = new Response( hairShopLikeId, memberId, hairShopId );

        return response;
    }

    private long hairShopLikeMemberMemberId(HairShopLike hairShopLike) {
        if ( hairShopLike == null ) {
            return 0L;
        }
        Member member = hairShopLike.getMember();
        if ( member == null ) {
            return 0L;
        }
        long memberId = member.getMemberId();
        return memberId;
    }

    private long hairShopLikeHairShopHairShopId(HairShopLike hairShopLike) {
        if ( hairShopLike == null ) {
            return 0L;
        }
        HairShop hairShop = hairShopLike.getHairShop();
        if ( hairShop == null ) {
            return 0L;
        }
        long hairShopId = hairShop.getHairShopId();
        return hairShopId;
    }
}
