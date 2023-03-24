package com.mainproject.udog_server.hairshopLike;

import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class HairShopLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long hairShopLikeId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public void setMember(Member member){
        this.member = member;
        if(member.getHairShopLikes().contains(this)) {
            member.getHairShopLikes().add(this);
        }
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HAIR_SHOP_ID", nullable = false)
    private HairShop hairShop;

    public void setHairShop(HairShop hairShop){
        this.hairShop = hairShop;
        if(hairShop.getHairShopLikes().contains(this)) {
            hairShop.getHairShopLikes().add(this);
        }
    }
}
