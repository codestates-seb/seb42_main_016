package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshopLike.*;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.styleLike.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.*;

@RequiredArgsConstructor
@Service
public class StyleLikeCompositeService {
    private final StyleLikeService styleLikeService;
    private final MemberService memberService;

    public StyleLike doStyleLike(long reviewId, String memberEmail){

        Member foundMember = memberService.findLoginMemberByEmail(memberEmail);

        StyleLike response = styleLikeService.createLike(reviewId, foundMember);

        return response;
    }

    public void deleteStyleLike(long StyleLikeId, String memberEmail){
        memberService.findLoginMemberByEmail(memberEmail);

        styleLikeService.deleteLike(StyleLikeId);
    }
}
