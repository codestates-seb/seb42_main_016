package com.mainproject.udog_server.reservation;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

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

    @ManyToOne
    @JoinColumn(name = "HAIR_SHOP_ID", nullable = false)
    private HairShop hairShop;

    @OneToOne
    private Dog dog;

    @OneToOne
    private Review review;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate reserveDate;


    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate reserveTime;
}