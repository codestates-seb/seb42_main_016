package com.mainproject.udog_server.api.dog.entity;

import com.mainproject.udog_server.api.member.Member;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long dogId;

    @Column(nullable = false, length = 100)
    private String dogName;

    @Column(nullable = false, length = 20)
    private LocalDate dogBirthDate;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false, length = 25)
    private DogSpecies dogSpecies = DogSpecies.기타;

    @Column(nullable = false, length = 20)
    private int dogWeight;

    @Column
    private String dogDescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public enum DogSpecies {
        기타,
        골든_리트리버,
        꼬똥_드_뚤레아,
        닥스훈트,
        달마시안,
        도베르만,
        라브라도_리트리버,
        말라뮤트,
        말티즈,
        믹스견,
        보더_콜리,
        불독,
        비글,
        비숑_프리제,
        빠삐용,
        사모예드,
        셰퍼드,
        슈나우저,
        스탠다드_푸들,
        스피츠,
        시바,
        시베리안_허스키,
        시츄,
        치와와,
        코카_스파니엘,
        퍼그,
        페키니즈,
        포메라니안,
        폼피츠,
        푸들;

        @Getter
        private String dogSpecies;
        DogSpecies() {
        }
    }

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
