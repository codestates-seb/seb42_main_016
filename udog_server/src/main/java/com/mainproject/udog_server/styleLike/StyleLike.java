package com.mainproject.udog_server.styleLike;

import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.review.Review;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class StyleLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "review_id")
    private Review review;

    public StyleLike(Member member, Review review) {
        this.member = member;
        this.review = review;
    }
}