package com.mainproject.udog_server.api.hairShop.entity;

import com.mainproject.udog_server.api.hairShopLike.entity.HairShopLike;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HairShop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long hairShopId;

    @Column(nullable = false, length = 50)
    private String hairShopName;

    @Column(nullable = false, length = 100)
    private String hairShopAddress;

    @Column(nullable = false)
    private int hairShopPhone;

    @Lob
    @Column
    private String hairShopDescription;

    @Lob
    @Column
    private String hairShopImage;

    @OneToMany(mappedBy = "hairShop")
    private List<HairShopLike> hairShopLikes = new ArrayList<>();

    public void addHairShopLike(HairShopLike hairShopLike) {
        hairShopLikes.add(hairShopLike);
        if(hairShopLike.getHairShop() != this) {
            hairShopLike.setHairShop(this);
        }
    }

    @Builder
    public HairShop(long hairShopId, String hairShopName, String hairShopAddress, int hairShopPhone, String hairShopDescription, String hairShopImage) {
        this.hairShopId = hairShopId;
        this.hairShopAddress = hairShopAddress;
        this.hairShopPhone = hairShopPhone;
        this.hairShopDescription = hairShopDescription;
        this.hairShopImage = hairShopImage;
    }
}
