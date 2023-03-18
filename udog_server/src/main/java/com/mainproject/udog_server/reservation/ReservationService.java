package com.mainproject.udog_server.reservation;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository reservationRepository;

    public Reservation createReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public Page<Reservation> findReservations(int page, int size) {
        return reservationRepository.findAll(
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

    // principal memberId와 DB에 저장된 ReservationMemberId가 같은지 검증
    private void compareIdAndLoginId(Long id, Long memberId) {
        if(!id.equals(memberId)) throw null;
    }
}
