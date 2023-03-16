package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshopLike.*;
import com.mainproject.udog_server.member.*;
import lombok.*;

@RequiredArgsConstructor
public class HairShopLikeCompositeService {
    private final MemberService memberService;
    private final HairShopLikeService hairShopLikeService;

    public HairShopLike doHairShopLike(long hairShopId, String memberEmail){

        Member foundMember = memberService.findLoginMemberByEmail(memberEmail);

        HairShopLike response = hairShopLikeService.createLike(hairShopId, foundMember);

        return response;
    }

    public void deleteHairShopLike(long hairShopLikeId, String memberEmail){
        memberService.findLoginMemberByEmail(memberEmail);

        hairShopLikeService.deleteLike(hairShopLikeId);
    }

}
