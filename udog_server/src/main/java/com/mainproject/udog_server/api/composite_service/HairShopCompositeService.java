package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.hairshopLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import java.net.*;
import java.security.*;
import java.util.*;

@RequiredArgsConstructor
@Transactional
@Service
public class HairShopCompositeService {
    private final HairShopService hairShopService;

    public HairShop createHairShop(HairShop postHairShop) {
        return hairShopService.createHairShop(postHairShop);
    }

    @Transactional(readOnly = true)
    public HairShop getHairShop(long hairShopId){
        return hairShopService.findHairShop(hairShopId);
    }

    @Transactional(readOnly = true)
    public Page<HairShop> getHairShops(Principal principal, int page, int size){
        return hairShopService.findHairShops(page, size);
    }

}
