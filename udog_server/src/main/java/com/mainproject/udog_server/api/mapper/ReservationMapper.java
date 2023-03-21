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
    default Reservation reservationPostDtoToReservation(ReservationDto.Post postDto) {
        HairShop hairShop = new HairShop();
        Dog dog = new Dog();
        Reservation reservation = new Reservation();
        hairShop.setHairShopId(postDto.getHairShopId());
        dog.setDogId(postDto.getDogId());
        reservation.setHairShop(hairShop);
        reservation.setDog(dog);
        reservation.setHairOption(postDto.getHairOption());
        reservation.setReserveDate(postDto.getReserveDate());
        reservation.setReserveTime(postDto.getReserveTime());
        return reservation;
    }

    default ReservationDto.Response reservationToReservationResponseDto(Reservation reservation) {
        ReservationDto.Response responseDto = new ReservationDto.Response();
        responseDto.setReservationId(reservation.getReservationId());
        responseDto.setHairShopName(reservation.getHairShop().getHairShopName());
        responseDto.setDogName(reservation.getDog().getDogName());
        responseDto.setReserveDate(reservation.getReserveDate().toString());
        responseDto.setReserveTime(reservation.getReserveTime().toString());
        responseDto.setHairOption(reservation.getHairOption());
        return responseDto;
    }
    List<ReservationDto.Response> reservationsToReservationResponseDto(List<Reservation> reservations);
}
