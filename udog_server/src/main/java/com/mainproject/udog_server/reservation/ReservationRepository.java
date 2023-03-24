package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.*;
import java.util.*;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Page<Reservation> findAllByMember(Member memberId, PageRequest pageRequest);
    Page<Reservation> findAllByMemberAndReviewReviewIdIsNull(Member memberId, PageRequest pageRequest);
//    List<Reservation> findByHairShopHairShopId( long hairShopId);
    List<Reservation> findByReserveDateAndHairShopHairShopId(LocalDate reserveDate, long hairShopId);

}
