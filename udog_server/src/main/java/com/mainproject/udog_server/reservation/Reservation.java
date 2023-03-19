package com.mainproject.udog_server.reservation;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import lombok.*;
import net.bytebuddy.asm.*;

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

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "HAIR_SHOP_ID", nullable = false)
    private HairShop hairShop;

    @OneToOne
    private Dog dog;

    @OneToOne
    private Review review;

    @Column(nullable = false)
    private LocalDate reserveDate;


    @Column(nullable = false)
    private LocalTime reserveTime;

//    @Enumerated(value = EnumType.STRING)
//    @Column
//    private HairOption hairOption = HairOption.4kg이상 6kg미만;
//
//    public enum HairOption{
//        프론트 분들한테 옵션 받기
//    }

    public Reservation(Member member, HairShop hairShop, Dog dog, Review review, LocalDate reserveDate, LocalTime reserveTime) {
        this.member = member;
        this.hairShop = hairShop;
        this.dog = dog;
        this.review = review;
        this.reserveDate = reserveDate;
        this.reserveTime = reserveTime;
    }
}