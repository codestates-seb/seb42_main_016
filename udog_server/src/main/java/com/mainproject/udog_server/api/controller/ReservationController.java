package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.ReservationCompositeService;
import com.mainproject.udog_server.api.mapper.ReservationMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.security.Principal;

@RestController
@RequestMapping("/reservations")
@RequiredArgsConstructor
@CrossOrigin
public class ReservationController {
    private final ReservationCompositeService compositeService;
    private final ReservationMapper mapper;

    @PostMapping
    public ResponseEntity postReservation() {
        return null;
    }

    // TODO: 특정 예약 정보 가져오기 필요한지?

    @GetMapping
    public ResponseEntity getReservations() {
        return null;
    }

    @DeleteMapping("{reservation-id}")
    public ResponseEntity deleteReservation(@PathVariable("reservation-id") @Positive Long reservationId, Principal principal) {
        return null;
    }
}
