package com.mainproject.udog_server.api.hairShop.controller;

import com.mainproject.udog_server.api.hairShop.entity.HairShop;
import com.mainproject.udog_server.api.hairShop.mapper.HairShopMapper;
import com.mainproject.udog_server.api.hairShop.service.HairShopService;
import com.mainproject.udog_server.dto.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hair-shops")
@Validated
@Slf4j
public class HairShopController {
    private final static String HAIR_SHOP_DEFAULT_URL = "/hair-shop";

    private final HairShopMapper hairShopMapper;

    private final HairShopService hairShopService;

    //미용실 상세페이지
    @GetMapping("/{hair-shops-id}")
    public ResponseEntity getHairShop(@PathVariable("hair-shop-id") @Positive long hairShopId) {
        HairShop response = hairShopService.findHairShop(hairShopId);

        return new ResponseEntity<>(hairShopMapper.hairShopToHairShopResponse(response), HttpStatus.OK);
    }

    //내 주변 미용실
    @GetMapping
    public ResponseEntity getHairShops(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<HairShop> pageHairShops = hairShopService.findHairShops(page - 1, size);
        List<HairShop> hairShops = pageHairShops.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(hairShopMapper.hairShopsToHairShopResponses(hairShops),
                pageHairShops), HttpStatus.OK);
    }
}

//TODO 거리순으로 출력
//TODO 운영시간 테이블 따로 빼기
//TODO 좋아요 갯수 응답 보내기
//TODO 일주일간 좋아요 많이 받은 미용실 메인 페이지로 응답