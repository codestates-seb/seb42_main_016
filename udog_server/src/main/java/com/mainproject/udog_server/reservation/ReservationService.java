package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.dog.*;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.*;

import java.time.*;
import java.util.*;
import java.util.stream.*;

@Service
@RequiredArgsConstructor
@Transactional
public class ReservationService {
    private final ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) {


        return reservationRepository.save(reservation);
    }

    public Reservation updateReservation(Reservation reservation) {
        Reservation foundReservation = findVerifiedReservation(reservation.getReservationId());

        return reservationRepository.save(foundReservation);
    }


    public Page<Reservation> findReservations(Member member, int page, int size) {
        return reservationRepository.findAllByMember(member,
                PageRequest.of(page, size, Sort.by("reservationId").descending()));
    }




    public List<Reservation> findNoReviewsReservations(Member member, int page, int size) {
        System.out.println("@".repeat(90));
        System.out.println(member.getMemberId());

        Page<Reservation> reservations = reservationRepository.findAllByMember
                (member, PageRequest.of(page, size, Sort.by("reservationId").descending()));

        List<Reservation> noReviewReservations = reservations.stream().filter(reservation -> reservation.getReview() == null).collect(Collectors.toList());
        return noReviewReservations;
    }


    public void deleteReservation(Long reservationId, Long memberId) {
        Reservation findReservation = findVerifiedReservation(reservationId);
        compareIdAndLoginId(findReservation.getMember().getMemberId(), memberId);

        reservationRepository.delete(findReservation);
    }

    // 존재하는 예약인지 확인
    public Reservation findVerifiedReservation(Long reservationId) {

        Optional<Reservation> optionalReservation = reservationRepository.findById(reservationId);

        Reservation findReservation =
                optionalReservation.orElseThrow(() -> null);

        return findReservation;
    }

    public List<LocalTime> findReservedTime(LocalDate reserveDate, long hairShopId) {

        List<Reservation> reservations = reservationRepository.findByReserveDateAndHairShopHairShopId(reserveDate, hairShopId);
        List<LocalTime> reservedTime = reservations.stream().map(Reservation::getReserveTime).collect(Collectors.toList());


        return reservedTime;
    }


    // principal memberId와 DB에 저장된 ReservationMemberId가 같은지 검증
    private void compareIdAndLoginId(Long id, Long memberId) {
        if(!id.equals(memberId)) throw null;
    }
}
