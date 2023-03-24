package com.mainproject.udog_server.hairshop;

import com.mainproject.udog_server.hairshopLike.HairShopLike;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class HairShop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long hairShopId;

    @Column(nullable = false, length = 50)
    private String hairShopName;

    @Column(nullable = false, length = 100)
    private String hairShopAddress;

    @Column(nullable = false)
    private String hairShopPhone;

    @Lob
    @Column
    private String hairShopDescription;

    @Lob
    @Column
    private String hairShopImage;

    @Column(nullable = false)
    private Double latitude;

    @Column(nullable = false)
    private Double longitude;

    @Column(nullable = false)
    private String kakaoApiId;

    @OneToMany(mappedBy = "hairShop")
    private List<HairShopLike> hairShopLikes;

    @OneToMany(mappedBy = "hairShop", cascade = CascadeType.ALL)
    private List<Review> reviews;

    @Transient
    private int likeCount;

    @Transient
    private int reviewCount;

    @Transient
    private long myHairShopLikeId;

    @Transient
    private double distance;

    public void addHairShopLike(HairShopLike hairShopLike) {
        hairShopLikes.add(hairShopLike);
        if(hairShopLike.getHairShop() != this) {
            hairShopLike.setHairShop(this);
        }
    }

    @Builder
    public HairShop(long hairShopId, String hairShopName, String hairShopAddress, String hairShopPhone, String hairShopDescription, String hairShopImage) {
        this.hairShopId = hairShopId;
        this.hairShopName = hairShopName;
        this.hairShopAddress = hairShopAddress;
        this.hairShopPhone = hairShopPhone;
        this.hairShopDescription = hairShopDescription;
        this.hairShopImage = hairShopImage;
    }


}
