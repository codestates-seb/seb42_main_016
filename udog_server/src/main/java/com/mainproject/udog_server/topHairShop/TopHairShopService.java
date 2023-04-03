package com.mainproject.udog_server.topHairShop;

import com.google.gson.Gson;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.hairshopLike.HairShopLikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@Component
@RequiredArgsConstructor
public class TopHairShopService {
    private final HairShopLikeService hairShopLikeService;

    private final TopHairShopRepository topHairShopRepository;

    @Scheduled(cron = "0 0 * * * *")
    private void saveTopHairShop(){
        topHairShopRepository.deleteAll();
        List<HairShop> topHairShops = hairShopLikeService.findTopHairShopsByDay();
        TopHairShop topHairShop = new TopHairShop(topHairShops);
        topHairShopRepository.save(topHairShop);
    }

    public Page<HairShop> findTopHairShop(){
        List<HairShop> result = topHairShopRepository.findAll().get(0).getTopHairShops();
        Page<HairShop> topHairShops = new PageImpl<>(result);
        return topHairShops;
    }
}
