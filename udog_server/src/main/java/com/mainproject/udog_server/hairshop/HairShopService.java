package com.mainproject.udog_server.hairshop;

import com.mainproject.udog_server.review.*;
import lombok.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.geo.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class HairShopService {
    private static final int AMOUNT_OF_TOP = 10;
    private final HairShopRepository hairShopRepository;

    public HairShop createHairShop(HairShop hairShop) {
        return hairShopRepository.save(hairShop);
    }
    @Transactional(readOnly = true)
    public HairShop findHairShop(long hairShopId) {
        HairShop foundHairShop = findVerifiedHairShop(hairShopId);
        foundHairShop.setLikeCount(foundHairShop.getHairShopLikes().size());
        foundHairShop.setReviewCount(foundHairShop.getReviews().size());
        return foundHairShop;
    }

    @Transactional(readOnly = true)
    public Page<HairShop> findHairShops(int page, int size, double latitude, double longitude, List<String> keywords) {
        System.out.println("latitude" + latitude);
        System.out.println("longitude" + longitude);
        return hairShopRepository.findClosestByKeywords(
                longitude,
                latitude,
//                keywords.get(0),
//                keywords.get(1),
//                keywords.get(2),
                PageRequest.of(page, size));
    }

    @Transactional(readOnly = true)
    public Page<HairShop> findTopHairShops(List<HairShop> topList){
        return hairShopRepository.findTop(topList, PageRequest.of(0, AMOUNT_OF_TOP));
    }

    public HairShop findVerifiedHairShop(long hairShopId) {
        Optional<HairShop> optionalHairShop = hairShopRepository.findById(hairShopId);

        HairShop findHairShop = optionalHairShop.orElseThrow(() -> null);

        return findHairShop;
    }

    public HairShop findVerifiedHairShopByApiId(String apiId){
        return hairShopRepository.findByKakaoApiId(apiId);
    }
}
