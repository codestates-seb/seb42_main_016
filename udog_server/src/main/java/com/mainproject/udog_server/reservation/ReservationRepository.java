package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.*;
import java.util.*;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Page<Reservation> findAllByMember(Member memberId, PageRequest pageRequest);
//    List<Reservation> findByReserveDateAndHairShop(LocalDate reserveDate, LocalTime reserveTime, HairShop hairShopId);
//    Optional<Reservation> findByMemberAndHairShopAndDog(Member member, HairShop hairShop, Dog dog);
}
