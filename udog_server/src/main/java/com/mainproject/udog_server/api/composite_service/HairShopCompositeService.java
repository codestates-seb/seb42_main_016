package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.districtOffice.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.hairshopLike.*;
import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import java.net.*;
import java.security.*;
import java.util.*;
import java.util.stream.*;

@RequiredArgsConstructor
@Transactional
@Service
public class HairShopCompositeService {
    private final HairShopService hairShopService;

    private final HairShopLikeService hairShopLikeService;

    private final MemberService memberService;

    private final DistrictOfficeService officeService;

    public HairShop createHairShop(HairShop postHairShop) {
        return hairShopService.createHairShop(postHairShop);
    }

    @Transactional(readOnly = true)
    public HairShop getHairShop(Principal principal, long hairShopId){
        HairShop foundHairShop = hairShopService.findHairShop(hairShopId);
        return setLikeCountAndHairShopLikeId(principal, new PageImpl<>(List.of(foundHairShop))).getContent().get(0);
    }

    @Transactional(readOnly = true)
    public Page<HairShop> getHairShops(Principal principal, int page, int size, double latitude, double longitude){
//        List<String> closestThreeOffices = officeService.getClosestThreeOfficeDistrict(latitude,longitude);
        Page<HairShop> pageHairShops =  hairShopService.findHairShops(page, size, latitude, longitude, null);
        System.out.println(pageHairShops.getContent().size());
        return setLikeCountAndHairShopLikeId(principal, pageHairShops);
    }

    @Transactional(readOnly = true)
    public Page<HairShop> getTopHairSHops(Principal principal){
        List<HairShop> topHairShops = hairShopLikeService.findTopHairShopsByDay();
        Page<HairShop> pageTopHairShops = hairShopService.findTopHairShops(topHairShops);
        return setLikeCountAndHairShopLikeId(principal, pageTopHairShops);
    }

    public Page<HairShop> setLikeCountAndHairShopLikeId(Principal principal, Page<HairShop> hairShops){
        //로그인 상태가 아니라 토큰값이 없다면
        if (principal == null) {
            hairShops.getContent().stream().forEach(hairShop ->
                    hairShop.setLikeCount(hairShop.getHairShopLikes().size())
            );
        } else {
            String loginEmail = principal.getName();
            long loginMemberId = memberService.findLoginMemberByEmail(loginEmail).getMemberId();
            hairShops.getContent().stream().forEach(hairShop -> {
                hairShop.setLikeCount(hairShop.getHairShopLikes().size());
                hairShop.setMyHairShopLikeId(findHairShopLikeId(hairShop.getHairShopLikes(), loginMemberId));
            });
        }
        return hairShops;
    }

    public long findHairShopLikeId(List<HairShopLike> hairShopLikes, long loginMemberId) {
        List<HairShopLike> result = hairShopLikes
                .stream()
                .filter(hairShopLike ->
                        loginMemberId == hairShopLike.getMember().getMemberId())
                .collect(Collectors.toList());
        if(result.isEmpty())
            return 0;
        else
            return result.get(0).getHairShopLikeId();
    }
}
