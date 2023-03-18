package com.mainproject.udog_server.hairshop;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class HairShopService {
    private final HairShopRepository hairShopRepository;

    public HairShopService(HairShopRepository hairShopRepository) {
        this.hairShopRepository = hairShopRepository;
    }

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

    public Page<HairShop> findHairShops(int page, int size) {
        Page<HairShop> foundHairShops = hairShopRepository.findAll(PageRequest.of(page, size, Sort.by("hairShopId").descending()));
        foundHairShops.getContent().stream().forEach(hairShop -> {
                    hairShop.setLikeCount(hairShop.getHairShopLikes().size());
                    hairShop.setReviewCount(hairShop.getReviews().size());
                }
        );
        return foundHairShops;
    }

    @Transactional(readOnly = true)
    public HairShop findVerifiedHairShop(long hairShopId) {
        Optional<HairShop> optionalHairShop = hairShopRepository.findById(hairShopId);

        HairShop findHairShop = optionalHairShop.orElseThrow(() -> null);

        return findHairShop;
    }
}
