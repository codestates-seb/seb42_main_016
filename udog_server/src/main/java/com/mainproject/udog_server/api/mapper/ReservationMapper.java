package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.ReservationDto;
import com.mainproject.udog_server.reservation.Reservation;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReservationMapper {
    Reservation reservationPostDtoToReservation(ReservationDto.Post postDto);

    ReservationDto.Response reservationToReservationResponseDto(Reservation reservation);

    List<ReservationDto.Response> reservationsToReservationResponseDto(List<Reservation> reservations);
}
