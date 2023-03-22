package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.member.MemberService;
import com.mainproject.udog_server.reservation.Reservation;
import com.mainproject.udog_server.reservation.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.*;

@RequiredArgsConstructor
@Service
public class ReservationCompositeService {
    private final ReservationService reservationService;
    private final MemberService memberService;

    private final HairShopService hairShopService;

    private final DogService dogService;

    public Reservation createReservation(Reservation creatingReservation, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        creatingReservation.setMember(member);
        creatingReservation.setHairShop(hairShopService.findVerifiedHairShop(creatingReservation.getHairShop().getHairShopId()));
        creatingReservation.setDog(dogService.findVerifiedDog(creatingReservation.getDog().getDogId()));

        Reservation response = reservationService.createReservation(creatingReservation);

        return response;
    }

    public Page<Reservation> getReservations(String email, int page, int size) {
        Member member = memberService.findLoginMemberByEmail(email);

        Page<Reservation> reservations = reservationService.findReservations(member, page, size);


        return reservations;
    } //수정필요
    public void deleteReservation(Long reservationId, String email) {
        Member member = memberService.findLoginMemberByEmail(email);

        reservationService.deleteReservation(reservationId, member.getMemberId());
    }
}
