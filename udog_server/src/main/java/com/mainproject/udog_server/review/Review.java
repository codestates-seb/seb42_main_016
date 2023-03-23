package com.mainproject.udog_server.review;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.reservation.*;
import com.mainproject.udog_server.styleLike.StyleLike;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @Column(nullable = false)
    private String reviewText;

    @Column
    private String reviewImage;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL)
    private List<StyleLike> styleLikes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "HAIR_SHOP_ID")
    private HairShop hairShop;

    @OneToOne(mappedBy = "review", cascade = CascadeType.ALL)
    private Reservation reservation;

    @Transient
    private int likeCount;

    @Transient
    private long myStyleLikeId;
}
