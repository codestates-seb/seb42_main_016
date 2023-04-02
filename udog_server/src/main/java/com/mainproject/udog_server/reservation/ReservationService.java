package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.exception.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
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
        LocalDate invalidDate = reservation.getReserveDate();
        LocalTime invalidTime = reservation.getReserveTime();

        if(invalidDate.isAfter(LocalDate.now().plusMonths(1)) || invalidDate.isBefore(LocalDate.now())) {
            throw new BusinessLogicException(ExceptionCode.INVALID_RESERVATION_DATE);
        }

        List<Reservation> reservations = reservationRepository.findByReserveDateAndHairShopHairShopId(reservation.getReserveDate(), reservation.getHairShop().getHairShopId());
        List<LocalTime> reservedTime = reservations.stream().map(Reservation::getReserveTime).collect(Collectors.toList());

        List<LocalTime> availableTime = new ArrayList<>();
        for(int i = 10; i <= 20; i++) {
            availableTime.add(LocalTime.of(i,0));
        }

       if(!availableTime.contains(invalidTime)) {
           throw new BusinessLogicException(ExceptionCode.INVALID_RESERVATION_TIME);
       }

       if(reservedTime.contains(invalidTime)) {
           throw new BusinessLogicException(ExceptionCode.ALREADY_EXISTING_TIME);
       }
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


    public Page<Reservation> findNoReviewsReservations(Member member, int page, int size) {
        return reservationRepository.findAllByMemberAndReviewIsNull(member, PageRequest.of(page, size, Sort.by("reservationId").descending()));
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
                optionalReservation.orElseThrow(() -> new BusinessLogicException(ExceptionCode.RESERVATION_NOT_FOUND));

        return findReservation;
    }

    public List<LocalTime> findReservedTime(LocalDate reserveDate, long hairShopId) {

        List<Reservation> reservations = reservationRepository.findByReserveDateAndHairShopHairShopId(reserveDate, hairShopId);
        List<LocalTime> reservedTime = reservations.stream().map(Reservation::getReserveTime).collect(Collectors.toList());

        List<LocalTime> availableTime = new ArrayList<>();
        for(int i = 10; i <= 20; i++) {
            availableTime.add(LocalTime.of(i,0));
        }

        List<LocalTime> invalidTime = reservedTime.stream()
                .filter(time -> !availableTime.contains(time))
                .collect(Collectors.toList());

        if(!invalidTime.isEmpty()) {
            throw new BusinessLogicException(ExceptionCode.INVALID_RESERVATION_TIME);
        }

        return reservedTime;
    }


    // principal memberId와 DB에 저장된 ReservationMemberId가 같은지 검증
    private void compareIdAndLoginId(Long id, Long memberId) {
        if(!id.equals(memberId)) throw new BusinessLogicException(ExceptionCode.INVALID_MEMBER_ID);
    }
}
