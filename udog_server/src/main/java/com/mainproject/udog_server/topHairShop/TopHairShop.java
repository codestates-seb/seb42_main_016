package com.mainproject.udog_server.topHairShop;

import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.review.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class TopHairShop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long topId;

    @Column(nullable = false)
    @ElementCollection(fetch = FetchType.EAGER)
    private List<HairShop> topHairShops;

    public TopHairShop(List<HairShop> topHairShops){
        this.topHairShops = topHairShops;
    }
}