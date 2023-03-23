package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.ReservationCompositeService;
import com.mainproject.udog_server.api.dto.ReservationDto;
import com.mainproject.udog_server.api.mapper.ReservationMapper;
import com.mainproject.udog_server.dto.MultiResponseDto;
import com.mainproject.udog_server.reservation.*;
import com.mainproject.udog_server.review.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.security.Principal;
import java.time.*;
import java.util.List;

@RestController
@RequestMapping("/reservations")
@RequiredArgsConstructor
@CrossOrigin
public class ReservationController {
    private final ReservationCompositeService compositeService;
    private final ReservationMapper mapper;

    @PostMapping
    public ResponseEntity postReservation(@RequestBody ReservationDto.Post postDto, Principal principal) {
        Reservation creatingReservation = mapper.reservationPostDtoToReservation(postDto);
        Reservation createdReservation = compositeService.createReservation(creatingReservation, principal.getName());
        ReservationDto.Response response = mapper.reservationToReservationResponseDto(createdReservation);

        return ResponseEntity.status(HttpStatus.CREATED).location(URI.create("/reservations")).body(response);
    }


    @GetMapping
    public ResponseEntity getReservations(Principal principal,
                                          @Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {
        Page<Reservation> pageReservations = compositeService.getReservations(principal.getName(), page -1, size);
        List<Reservation> reservations = pageReservations.getContent();

        MultiResponseDto response = new MultiResponseDto<>(mapper.reservationsToReservationResponseDto(reservations), pageReservations);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/non-review")
    public ResponseEntity getNoReviewReservations(Principal principal,
                                                  @Positive @RequestParam int page,
                                                  @Positive @RequestParam int size) {
        Page<Reservation> pageReservations = compositeService.getNoReviewReservations(principal.getName(), page - 1 , size);
        List<Reservation> reservations = pageReservations.getContent();

        MultiResponseDto response = new MultiResponseDto<>(mapper.reservationsToReservationResponseDto(reservations), pageReservations);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    //todo 예약 날짜 한달 기간 제한
    //마이페이지에서 예약내역은 정인님이 개발하시는 방향에 맞춰서
    @GetMapping("/{hair-shops-id}")
    public ResponseEntity getReservationTime(
                                              @PathVariable("hair-shops-id") long hairShopId,
                                              @RequestParam("select-date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate reserveDate) {
        System.out.println("@".repeat(80));
        System.out.println(hairShopId);
        System.out.println(reserveDate);
//        List<LocalTime> reservations = compositeService.getReservedTime(principal.getName(), reserveDate, null, hairShopId);
        List<LocalTime> reservations = compositeService.getReservedTime( reserveDate, hairShopId);
        System.out.println("@".repeat(80));
        System.out.println(reservations);

        List<ReservationDto.reservedTimeResponse> response = mapper.reservationsToReservedTimeResponseDto(reservations);

        System.out.println("@".repeat(80));
        System.out.println(response);

        return new ResponseEntity<>( response, HttpStatus.OK);
    }
    @DeleteMapping("{reservation-id}")
    public ResponseEntity deleteReservation(@PathVariable("reservation-id") @Positive Long reservationId, Principal principal) {
        compositeService.deleteReservation(reservationId, principal.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
