package com.mainproject.udog_server.dog;

import com.mainproject.udog_server.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DogRepository extends JpaRepository<Dog, Long> {

    Optional<Dog> findByDogIdAndMember(long dogId, Member member);
}
