package com.mainproject.udog_server.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

public class ReservationDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        private Member member;
        private HairShop hairShop;
        private Dog dog;
        @JsonFormat(pattern = "yyyy-MM-dd")
        @JsonDeserialize(using = LocalDateDeserializer.class)
        private LocalDate reserveDate;
        @JsonFormat(pattern = "HH:MM")
        @JsonDeserialize(using = LocalDateDeserializer.class)
        private LocalDate reserveTime;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private Long reservationId;
        private String hairShopName;
        private String dogName;
        private String reserveDate;
        private String reserveTime;
    }
}
