package com.mainproject.udog_server.api.hairShop.service;

import com.mainproject.udog_server.api.hairShop.entity.HairShop;
import com.mainproject.udog_server.api.hairShop.repository.HairShopRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class HairShopService {
    private final HairShopRepository hairShopRepository;

    public HairShopService(HairShopRepository hairShopRepository) {
        this.hairShopRepository = hairShopRepository;
    }
    @Transactional(readOnly = true)
    public HairShop findHairShop(long hairShopId) {
        return findVerifiedHairShop(hairShopId);
    }

    public Page<HairShop> findHairShops(int page, int size) {
        return hairShopRepository.findAll(PageRequest.of(page, size, Sort.by("hairShopId)").descending()));
    }

    @Transactional(readOnly = true)
    public HairShop findVerifiedHairShop(long hairShopId) {
        Optional<HairShop> optionalHairShop = hairShopRepository.findById(hairShopId);

        HairShop findHairShop = optionalHairShop.orElseThrow(() -> null);

        return findHairShop;
    }
}
