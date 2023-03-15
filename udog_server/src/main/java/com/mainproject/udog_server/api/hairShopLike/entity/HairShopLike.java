package com.mainproject.udog_server.api.hairShopLike.entity;

import com.mainproject.udog_server.api.hairShop.entity.HairShop;
import com.mainproject.udog_server.api.member.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
