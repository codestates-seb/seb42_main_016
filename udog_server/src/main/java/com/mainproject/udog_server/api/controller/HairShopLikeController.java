package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.dto.HairShopLikeDto;
import com.mainproject.udog_server.hairshopLike.HairShopLike;
import com.mainproject.udog_server.api.mapper.HairShopLikeMapper;
import com.mainproject.udog_server.hairshopLike.HairShopLikeService;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hair-shop-likes")
@Validated
@Slf4j
public class HairShopLikeController {

    private final MemberService memberService;
    private final HairShopLikeService hairShopLikeService;
    private final HairShopLikeMapper mapper;


    @PostMapping("/{hair-shops-id}/likes")
    public ResponseEntity<?> addLike(@Positive @PathVariable("hair-shops-id") long hairShopId, Principal principal,
                                        @RequestBody HairShopLikeDto.Post post) {

        Member member = memberService.findLoginMemberByEmail(principal.getName());

        post.setMember(member);

        HairShopLike hairShopLike = mapper.hairShopLikePostDtoToHairShopLike(post);

        HairShopLike response = hairShopLikeService.addLike(hairShopId, hairShopLike);

        return new ResponseEntity<>(mapper.HairShopLikeToHairShopLikeResponse(response), HttpStatus.CREATED);
    }

    @DeleteMapping("/{hair-shops-id}/{hair-shop-likes-id}/dislikes")
    public ResponseEntity<?> deleteLike(@Positive @PathVariable("hair-shops-id") long hairShopId,
                                        @Positive @PathVariable("hair-shop-likes-id") long hairShopLikeId,
                                        Principal principal){

        Member member = memberService.findLoginMemberByEmail(principal.getName());

        hairShopLikeService.deleteLike(hairShopLikeId, hairShopLikeId, member);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

//Todo 코드 점검 해보기
//todo 좋아요 갯수 카운트
//todo 일주일간 좋아요 많이 받은 미용실 메인페이지로 응답