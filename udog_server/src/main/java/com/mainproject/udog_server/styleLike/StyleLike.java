package com.mainproject.udog_server.styleLike;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class StyleLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long styleLikeId;

    @ManyToOne
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "review_id", nullable = false)
    private Review review;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public StyleLike(Member member, Review review) {
        this.member = member;
        this.review = review;
    }
}