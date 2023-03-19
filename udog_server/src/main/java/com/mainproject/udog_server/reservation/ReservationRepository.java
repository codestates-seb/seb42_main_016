package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Page<Reservation> findAllByMemberMemberId(long memberId, PageRequest pageRequest);
    Optional<Reservation> findByMemberAndHairShop(Member member, HairShop hairShop);
}
