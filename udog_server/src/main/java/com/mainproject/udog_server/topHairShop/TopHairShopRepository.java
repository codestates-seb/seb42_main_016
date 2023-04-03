package com.mainproject.udog_server.topHairShop;

import com.mainproject.udog_server.hairshop.HairShop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopHairShopRepository extends JpaRepository<TopHairShop, Long> {
}
