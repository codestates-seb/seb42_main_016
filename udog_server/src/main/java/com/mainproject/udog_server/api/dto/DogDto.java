package com.mainproject.udog_server.api.dto;

import com.fasterxml.jackson.annotation.*;
import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.member.Member;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;
import java.util.*;


public class DogDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        @Pattern(regexp = "^[a-zA-Z가-힣]{2,}$"
                , message = "강아지 이름은 영어(대, 소문자), 한글, 숫자로 이루어져야 합니다.")
        private String dogName;

        @NotNull
        @DateTimeFormat(pattern = "yyyy-MM-dd")
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
        private String dogBirthDate;

        @NotNull
        private Dog.DogSpecies dogSpecies;

        @NotNull
        private String dogWeight;

        private String dogDescription;


    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        private long dogId;
        @Pattern(regexp = "^[a-zA-Z가-힣]{2,}$"
                , message = "강아지 이름은 영어(대, 소문자), 한글, 숫자로 이루어져야 합니다.")
        private String dogName;
        @DateTimeFormat(pattern = "yyyy-MM-dd")
//        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
        private LocalDate dogBirthDate;
        private String dogWeight;
        private String dogDescription;
        private Member member;

    }

    @AllArgsConstructor
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long dogId;
        private String dogName;
        private String dogBirthDate;
        private Dog.DogSpecies dogSpecies;
        private String dogWeight;
        private String dogDescription;

    }
}
