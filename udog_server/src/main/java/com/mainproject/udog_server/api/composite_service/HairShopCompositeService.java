package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.hairshopLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

import java.net.*;
import java.util.*;

@RequiredArgsConstructor
@Service
public class HairShopCompositeService {
    private final HairShopService hairShopService;

    public HairShop createHairShop(HairShop postHairShop) {
        return hairShopService.createHairShop(postHairShop);
    }

    public HairShop getHairShop(long hairShopId){
        return hairShopService.findHairShop(hairShopId);
    }

    public Page<HairShop> getHairShops(int page, int size){
        return hairShopService.findHairShops(page, size);
    }

}
