package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.dog.*;
import com.mainproject.udog_server.member.*;
import lombok.*;
import org.springframework.stereotype.*;

import java.util.*;

@RequiredArgsConstructor
@Service
public class DogCompositeService {
    private final MemberService memberService;

    private final DogService dogService;

    public Dog createDog(Dog creatingDog, String email){
        Member member = memberService.findLoginMemberByEmail(email);

        creatingDog.setMember(member);

        Dog createdDogs = dogService.createDog(creatingDog);

        return createdDogs;
    }

    public Dog updateDog(Dog updatingDog, String email){
        Member member = memberService.findLoginMemberByEmail(email);

        updatingDog.setMember(member);
        Dog updatedDog = dogService.updateDog(updatingDog, member);
        return updatedDog;
    }

    public Dog findDog(Long dogId, String email) {
        Member member = memberService.findLoginMemberByEmail(email);
        Dog response = dogService.findDog(dogId, member);
        return response;
    }

    public List<Dog> findDogs() {
        List<Dog> dogs = dogService.findDogs();
        return dogs;
    }

    public void deleteDog(Long dogId, String email) {
        Member member = memberService.findLoginMemberByEmail(email);


       dogService.deleteDog(dogId, member);
    }
}
