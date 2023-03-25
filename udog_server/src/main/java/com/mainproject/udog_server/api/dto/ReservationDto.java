package com.mainproject.udog_server.api.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.reservation.*;
import lombok.*;

import java.time.*;

public class ReservationDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        private long hairShopId;
        private long dogId;
        @JsonFormat(pattern = "yyyy-MM-dd")
        private LocalDate reserveDate;
        @JsonFormat(pattern = "HH:MM")
        private LocalTime reserveTime;
        private Reservation.HairOption hairOption;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long reservationId;
        private Long hairShopId;
        private String hairShopName;
        private String dogName;
        private String reserveDate;
        private String reserveTime;
        private Reservation.HairOption hairOption;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class reservedTimeResponse {
        private String reserveTime;
    }
}
