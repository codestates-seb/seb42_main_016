package com.mainproject.udog_server.reservation;

import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    Page<Reservation> findAllByMember(Member memberId, PageRequest pageRequest);
    Optional<Reservation> findByMemberAndHairShopAndDog(Member member, HairShop hairShop, Dog dog);
}
