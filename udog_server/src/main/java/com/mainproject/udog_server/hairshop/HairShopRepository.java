package com.mainproject.udog_server.hairshop;

import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.geo.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.*;

import java.time.*;
import java.util.*;

public interface HairShopRepository extends JpaRepository<HairShop, Long> {
    @Query("SELECT hs FROM HairShop hs WHERE hs IN (:topList) ORDER BY hs.hairShopLikes.size DESC")
    Page<HairShop> findTop(@Param("topList")List<HairShop> topList, Pageable pageable);

//    @Query(value = "SELECT *" +
////            "ST_Distance_Sphere(Point(:x,:y),POINT(hs.longitude, hs.latitude)) AS hs.distance"+
//            "FROM hair_shop AS hs WHERE "+
//            "hs.hair_shop_address LIKE '%:keyword1%' OR"+
//            "hs.hair_shop_address LIKE '%:keyword2%' OR"+
//            "hs.hair_shop_address LIKE '%:keyword3%'", nativeQuery = true)//+
//            //"order by hs.distance")
//                "hair_shop_address like '%서초구%' or "+
//
    @Query(value = "select *, ST_Distance_Sphere(Point(?1,?2),Point(longitude,latitude)) as distance "+
            "from hair_shop as hs "+
//            "where "+
//            "hair_shop_address like '%강남구%' or "+
//            "hair_shop_address like '%광진구%' or "+
//            "hair_shop_address like '%서초구%' "+
            "order by distance",
            nativeQuery = true)
    Page<HairShop> findClosestByKeywords(
                                         @Param("userLongitude")double userLongitude,
                                         @Param("userLatitude")double userLatitude,
//                                         @Param("keywordOne") String keyword1,
//                                         @Param("keywordTwo")String keyword2,
//                                         @Param("keywordThree")String keyword3,
                                         Pageable pageable);

    HairShop findByKakaoApiId (String kakaoApiId);
}
