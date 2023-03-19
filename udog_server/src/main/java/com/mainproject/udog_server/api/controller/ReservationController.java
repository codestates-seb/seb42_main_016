package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.ReservationCompositeService;
import com.mainproject.udog_server.api.dto.ReservationDto;
import com.mainproject.udog_server.api.mapper.ReservationMapper;
import com.mainproject.udog_server.dto.MultiResponseDto;
import com.mainproject.udog_server.reservation.Reservation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.security.Principal;
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

    // TODO: 특정 예약 정보 가져오기 필요한지?

    @GetMapping
    public ResponseEntity getReservations(@Positive @RequestParam Long memberId,
                                          @Positive @RequestParam int page,
                                          @Positive @RequestParam int size) {
        Page<Reservation> pageReservations = compositeService.getReservations(memberId, page, size);
        List<Reservation> reservations = pageReservations.getContent();

        MultiResponseDto response = new MultiResponseDto<>(mapper.reservationsToReservationResponseDto(reservations), pageReservations);

        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
    //달력에서 날짜를 눌렀을때 localdate로 getmapping 들어오면 (파라미터나 바디로) db까지 가서 해당 미용실의 해0당 날짜에 해당하는 시간들 LocalTime이 response로 리스트로
    //달력 날짜 눌렀을때 예약 찬 시간들을 response로 받아주기

    //마이페이지의 예약 내역들 불러오는거 따로 분기?
    @DeleteMapping("{reservation-id}")
    public ResponseEntity deleteReservation(@PathVariable("reservation-id") @Positive Long reservationId, Principal principal) {
        compositeService.deleteReservation(reservationId, principal.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
