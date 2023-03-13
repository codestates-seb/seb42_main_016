package com.mainproject.udog_server.api.dog.entity;

import com.mainproject.udog_server.api.member.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long dogId;

    @Column(nullable = false, length = 100)
    private String dogName;

    @Column(nullable = false, length = 20)
    private LocalDate dogBirthDate;

    @Column(nullable = false, length = 25)
    private String dogSpecies;

    @Column(nullable = false, length = 20)
    private int dogWeight;

    @Column
    private String dogDescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

//    @Builder
//    public Dog (long dogId, String dogName, LocalDate dogBirthDate, String dogSpecies, int dogWeight, String dogDescription) {
//        this.dogId = dogId;
//        this.dogName = dogName;
//        this.dogBirthDate = dogBirthDate;
//        this.dogSpecies = dogSpecies;
//        this.dogWeight = dogWeight;
//        this.dogDescription = dogDescription;
//    }
}
