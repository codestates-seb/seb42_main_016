package com.mainproject.udog_server.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import lombok.*;

import java.time.*;

public class ReservationDto {
    @Getter
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Post {
        private long hairShopId;
        private long dogId;
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDate reserveDate;
        @JsonFormat(pattern = "HH:MM")
        private LocalTime reserveTime;
        //미용 옵션 프론트 분들이 string으로 아마 넘겨주실것. (enum이나 string으로 db에서)
        private String hairOption;

        @Builder
        public Post(long hairShopId, long dogId, LocalDate reserveDate, LocalTime reserveTime, String hairOption) {
            this.hairShopId = hairShopId;
            this.dogId = dogId;
            this.reserveDate = reserveDate;
            this.reserveTime = reserveTime;
            this.hairOption = hairOption;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    public static class Response {
        private Long reservationId;
        private String hairShopName;
        private String dogName;
        private String reserveDate;
        private String reserveTime;
        private String hairOption;

        @Builder
        public Response(long reservationId, String hairShopName, String dogName, String reserveDate, String reserveTime, String hairOption) {
            this.reservationId = reservationId;
            this.hairShopName = hairShopName;
            this.dogName = dogName;
            this.reserveDate = reserveDate;
            this.reserveTime = reserveTime;
            this.hairOption = hairOption;
        }
    }
}
