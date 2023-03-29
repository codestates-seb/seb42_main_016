package com.mainproject.udog_server.dog;

import com.mainproject.udog_server.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface DogRepository extends JpaRepository<Dog, Long> {
    List<Dog> findAllByMember(Member member);
    Optional<Dog> findByDogIdAndMember(long dogId, Member member);
}
