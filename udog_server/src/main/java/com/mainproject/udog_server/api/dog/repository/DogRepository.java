package com.mainproject.udog_server.api.dog.repository;

import com.mainproject.udog_server.api.dog.entity.Dog;
import com.mainproject.udog_server.api.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DogRepository extends JpaRepository<Dog, Long> {

    Optional<Dog> findByDogIdAndMember(long dogId, Member member);
}
