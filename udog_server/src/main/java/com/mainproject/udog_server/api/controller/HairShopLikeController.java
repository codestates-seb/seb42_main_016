package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.*;
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

    private final HairShopLikeCompositeService compositeService;
    private final HairShopLikeMapper mapper;


    @PostMapping("/{hair-shops-id}")
    public ResponseEntity<?> postHairShopLike(@Positive @PathVariable("hair-shops-id") long hairShopId, Principal principal) {
        HairShopLike response = compositeService.doHairShopLike(hairShopId, principal.getName());

        return new ResponseEntity<>(mapper.HairShopLikeToHairShopLikeResponse(response), HttpStatus.CREATED);
    }

    @DeleteMapping("/{hair-shop-like-id}")
    public ResponseEntity<?> deleteHairShopLike(@Positive @PathVariable("hair-shop-like-id") long hairShopLikeId, Principal principal) {
        compositeService.deleteHairShopLike(hairShopLikeId, principal.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}