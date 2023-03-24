package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.ReservationDto.Post;
import com.mainproject.udog_server.api.dto.ReservationDto.Response;
import com.mainproject.udog_server.reservation.Reservation;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-23T19:18:15+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class ReservationMapperImpl implements ReservationMapper {

    @Override
    public Reservation reservationPostDtoToReservation(Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Reservation reservation = new Reservation();

        reservation.setMember( postDto.getMember() );
        reservation.setHairShop( postDto.getHairShop() );
        reservation.setDog( postDto.getDog() );
        reservation.setReserveDate( postDto.getReserveDate() );
        reservation.setReserveTime( postDto.getReserveTime() );

        return reservation;
    }

    @Override
    public Response reservationToReservationResponseDto(Reservation reservation) {
        if ( reservation == null ) {
            return null;
        }

        Long reservationId = null;
        String reserveDate = null;
        String reserveTime = null;

        reservationId = reservation.getReservationId();
        if ( reservation.getReserveDate() != null ) {
            reserveDate = DateTimeFormatter.ISO_LOCAL_DATE.format( reservation.getReserveDate() );
        }
        if ( reservation.getReserveTime() != null ) {
            reserveTime = DateTimeFormatter.ISO_LOCAL_DATE.format( reservation.getReserveTime() );
        }

        String hairShopName = null;
        String dogName = null;

        Response response = new Response( reservationId, hairShopName, dogName, reserveDate, reserveTime );

        return response;
    }

    @Override
    public List<Response> reservationsToReservationResponseDto(List<Reservation> reservations) {
        if ( reservations == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( reservations.size() );
        for ( Reservation reservation : reservations ) {
            list.add( reservationToReservationResponseDto( reservation ) );
        }

        return list;
    }
}
