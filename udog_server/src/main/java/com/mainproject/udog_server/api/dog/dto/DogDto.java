package com.mainproject.udog_server.api.dog.dto;

import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;

public class DogDto {
    @Getter
    @AllArgsConstructor
//    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Post {
        @NotBlank
        @Pattern(regexp = "^[a-zA-Z1-9가-힣]{2,}$"
                , message = "강아지 이름은 영어(대, 소문자), 한글, 숫자로 이루어져야 합니다.")
        private String dogName;

        @NotNull
        @DateTimeFormat(pattern = "yyyy-MM-dd")
        private LocalDate dogBirthDate;

        @NotBlank
        private String dogSpecies;

        @NotNull
        @Pattern(regexp = "^\\d*$", message = "숫자만 입력해 주세요.")
        private int dogWeight;

        private String dogDescription;

//        @Builder
//        public Post(String dogName, LocalDate dogBirthDate, String dogSpecies, int dogWeight, String dogDescription) {
//            this.dogName = dogName;
//            this.dogBirthDate = dogBirthDate;
//            this.dogSpecies = dogSpecies;
//            this.dogWeight = dogWeight;
//            this.dogDescription = dogDescription;
//        }
    }
    @Getter
    @AllArgsConstructor
//    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Patch {
        private long dogId;
        @Pattern(regexp = "^[a-zA-Z1-9가-힣]{2,}$"
                , message = "강아지 이름은 영어(대, 소문자), 한글, 숫자로 이루어져야 합니다.")
        private String dogName;
        @DateTimeFormat(pattern = "yyyy-MM-dd")
        private LocalDate dogBirthDate;
        private String dogSpecies;
        @Pattern(regexp = "^\\d*$", message = "숫자만 입력해 주세요.")
        private int dogWeight;
        private String dogDescription;


//        @Builder
//        public Patch(String dogName, LocalDate dogBirthDate, String dogSpecies, int dogWeight, String dogDescription) {
//            this.dogName = dogName;
//            this.dogBirthDate = dogBirthDate;
//            this.dogSpecies = dogSpecies;
//            this.dogWeight = dogWeight;
//            this.dogDescription = dogDescription;
//        }
    }
    //    @Setter
//    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    @Getter
    public static class Response {
        private long dogId;
        private String dogName;
        private String dogBirthDate;
        private String dogSpecies;
        private int dogWeight;
        private String dogDescription;

//        @Builder
//        public Response(long dogId, String dogName, String dogBirthDate, String dogSpecies, int dogWeight, String dogDescription) {
//            this.dogId = dogId;
//            this.dogName = dogName;
//            this.dogBirthDate = dogBirthDate;
//            this.dogSpecies = dogSpecies;
//            this.dogWeight = dogWeight;
//            this.dogDescription = dogDescription;
//        }
    }
}