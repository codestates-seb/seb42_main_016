package com.mainproject.udog_server.hairshop;

import com.mainproject.udog_server.review.*;
import lombok.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

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
    public Page<HairShop> findTopHairShopsByDay(){
        return hairShopRepository.findTopOfToday(PageRequest.of(0,AMOUNT_OF_TOP));
    }

    @Transactional(readOnly = true)
    public Page<HairShop> findTopHairShopsByWeek(){
        return hairShopRepository.findTopOfTheWeek(PageRequest.of(0,AMOUNT_OF_TOP));
    }

    public HairShop findVerifiedHairShop(long hairShopId) {
        Optional<HairShop> optionalHairShop = hairShopRepository.findById(hairShopId);

        HairShop findHairShop = optionalHairShop.orElseThrow(() -> null);

        return findHairShop;
    }
}
