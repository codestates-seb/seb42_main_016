package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.*;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private final HairShopService hairShopService;
    private final DogService dogService;
    public Reservation createReservation(Reservation reservation) {


        return reservationRepository.save(reservation);
    }

    //해당하는 멤버의 예약을 조회하는걸로 (쿼리)
    public Page<Reservation> findReservations(Member member, int page, int size) {
        return reservationRepository.findAllByMember(member,
                PageRequest.of(page, size, Sort.by("reservationId").descending()));
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

//    public List<LocalTime> findReservedTime(LocalDate reserveDate, long hairShopId) {
//        List<Reservation> reservations = reservationRepository.findByReserveDateAndHairShop(reserveDate, hairShopId);
//        List<LocalTime> reservedTime = new ArrayList<>();
//
//        for(Reservation reservation : reservations) {
//            reservedTime.add(reservation.getReserveTime());
//        }
//
//        return reservedTime;
//    }
//    private Reservation findExistHairShop(Member member, HairShop hairShop, Dog dog) {
//        Optional<Reservation> reservation = reservationRepository.findByMemberAndHairShopAndDog(member, hairShop, dog);
//
//        Reservation findHairShop = reservation.orElseThrow(() -> null);
//        return findHairShop;
//    }

    // principal memberId와 DB에 저장된 ReservationMemberId가 같은지 검증
    private void compareIdAndLoginId(Long id, Long memberId) {
        if(!id.equals(memberId)) throw null;
    }
}
