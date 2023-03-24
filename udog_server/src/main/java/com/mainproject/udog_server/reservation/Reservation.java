package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import lombok.*;

import javax.persistence.*;
import java.time.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "HAIR_SHOP_ID", nullable = false)
    private HairShop hairShop;

    public void setHairShop(HairShop hairShop){
        this.hairShop = hairShop;
        if(hairShop.getReservations().contains(this)) {
            hairShop.getReservations().add(this);
        }
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dog_id")
    private Dog dog;

    public void setDog(Dog dog) {
        this.dog = dog;
        if(dog.getReservations().contains(this)) {
            dog.getReservations().add(this);
        }
    }

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_id")
    private Review review;

    @Column(nullable = false)
    private LocalDate reserveDate;


    @Column(nullable = false)
    private LocalTime reserveTime;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private HairOption hairOption = HairOption.위생미용;

    public enum HairOption {
        위생미용,
        클리핑,
        스포팅,
        가위컷;
    }
}