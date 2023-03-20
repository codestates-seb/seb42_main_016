package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.*;
import com.mainproject.udog_server.api.dto.HairShopDto;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.api.mapper.HairShopMapper;
import com.mainproject.udog_server.hairshop.HairShopService;
import com.mainproject.udog_server.hairshopLike.HairShopLikeService;
import com.mainproject.udog_server.dto.MultiResponseDto;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.util.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.security.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hair-shops")
@Validated
@Slf4j
public class HairShopController {
    private final static String HAIR_SHOP_DEFAULT_URL = "/hair-shop";

    private final HairShopMapper hairShopMapper;

    private final HairShopCompositeService compositeService;

    @PostMapping
    public ResponseEntity addHairShop(@RequestBody HairShopDto.Post post) {
        HairShop postHairShop = hairShopMapper.hairShopPostDtoToHairShop(post);
        HairShop createdHairShop = compositeService.createHairShop(postHairShop);

        URI location = UriCreator.createUri(HAIR_SHOP_DEFAULT_URL, createdHairShop.getHairShopId());

        return ResponseEntity.created(location).build();
    }

    //미용실 상세페이지
    @GetMapping("/{hair-shops-id}")
    public ResponseEntity getHairShop(@PathVariable("hair-shops-id") @Positive long hairShopId) {
        HairShop response = compositeService.getHairShop(hairShopId);

        return new ResponseEntity<>(hairShopMapper.hairShopToHairShopResponse(response), HttpStatus.OK);
    }

    //내 주변 미용실
    @GetMapping
    public ResponseEntity getHairShops(Principal principal,
                                       @Positive@RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<HairShop> pageHairShops = compositeService.getHairShops(principal,page - 1, size);

        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        hairShopMapper.hairShopsToHairShopResponses(pageHairShops.getContent()),
                        pageHairShops),
                HttpStatus.OK);
    }

    @GetMapping("/top")
    public ResponseEntity getTopHairShops(Principal principal){
        Page<HairShop> top10HairShops = compositeService.getTopHairSHops(principal);
        return new ResponseEntity<>(
                hairShopMapper.hairShopsToHairShopResponses(top10HairShops.getContent()),
                HttpStatus.OK);
    }
}

//TODO 거리순으로 출력
//TODO 운영시간 테이블 따로 빼기
//TODO 좋아요 갯수 응답 보내기
//TODO 일주일간 좋아요 많이 받은 미용실 메인 페이지로 응답