package com.mainproject.udog_server.review.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REVIEW_ID")
    private Long id;

    @Column(nullable = false)
    private String review_text;

    @Column
    private String review_pic;

    @Column(nullable = false)
    private LocalDateTime created_at;

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modified_at;

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;

//    @ManyToOne
//    @JoinColumn(name = "HAIR_SHOP_ID")
//    private HairShop hairShop;
}
