package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.*;
import java.util.stream.*;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private final HairShopService hairShopService;
    private final DogService dogService;
    public Reservation createReservation(Reservation reservation) {


        return reservationRepository.save(reservation);
    }


    public Page<Reservation> findReservations(Member member, int page, int size) {
        return reservationRepository.findAllByMember(member,
                PageRequest.of(page, size, Sort.by("reservationId").descending()));
    }

    public Page<Reservation> findNoReviewsReservations(Member member, int page, int size) {
        return reservationRepository.findAllByMemberAndReviewReviewIdIsNull
                (member, PageRequest.of(page, size, Sort.by("reservationId").descending()));
    }


    public void deleteReservation(Long reservationId, Long memberId) {
        Reservation findReservation = findVerifiedReservation(reservationId);
        compareIdAndLoginId(findReservation.getMember().getMemberId(), memberId);

        reservationRepository.delete(findReservation);
    }

    // 존재하는 예약인지 확인
    private Reservation findVerifiedReservation(Long reservationId) {
        Optional<Reservation> optionalReservation = reservationRepository.findById(reservationId);

        Reservation findReservation =
                optionalReservation.orElseThrow(() -> null);

        return findReservation;
    }

    public List<LocalTime> findReservedTime(LocalDate reserveDate, long hairShopId) {

        List<Reservation> reservations = reservationRepository.findByReserveDateAndHairShopHairShopId(reserveDate, hairShopId);
        List<LocalTime> reservedTime = reservations.stream().map(Reservation::getReserveTime).collect(Collectors.toList());
        
        System.out.println("#".repeat(80));
        System.out.println(reservedTime);

        return reservedTime;
    }


    // principal memberId와 DB에 저장된 ReservationMemberId가 같은지 검증
    private void compareIdAndLoginId(Long id, Long memberId) {
        if(!id.equals(memberId)) throw null;
    }
}
