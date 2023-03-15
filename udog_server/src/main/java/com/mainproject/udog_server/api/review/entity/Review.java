package com.mainproject.udog_server.api.review.entity;

import com.mainproject.udog_server.api.member.Member;
import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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
    private List<ReviewLike> reviewLikes;

//    @ManyToOne
//    @JoinColumn(name = "HAIR_SHOP_ID")
//    private HairShop hairShop;
}
