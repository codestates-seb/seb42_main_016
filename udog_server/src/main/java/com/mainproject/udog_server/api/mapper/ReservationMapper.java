package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.*;
import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.reservation.Reservation;
import com.mainproject.udog_server.review.*;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReservationMapper {
//    Reservation reservationPostDtoToReservation(ReservationDto.Post postDto);
    default Reservation reservationPostDtoToReservation(ReservationDto.Post postDto) {
        HairShop hairShop = new HairShop();
        Dog dog = new Dog();
        Reservation reservation = new Reservation();
        hairShop.setHairShopId(postDto.getHairShopId());
        reservation.setHairShop(hairShop);
        reservation.setDog(dog);
        reservation.setHairOption(postDto.getHairOption());
        reservation.setReserveDate(postDto.getReserveDate());
        reservation.setReserveTime(postDto.getReserveTime());
        return reservation;
    }

    @Mapping(source = "reservation.dog.dogId", target = "dogName")
    @Mapping(source = "reservation.hairShop.hairShopId", target = "hairShopName")
    ReservationDto.Response reservationToReservationResponseDto(Reservation reservation);

    List<ReservationDto.Response> reservationsToReservationResponseDto(List<Reservation> reservations);
}
