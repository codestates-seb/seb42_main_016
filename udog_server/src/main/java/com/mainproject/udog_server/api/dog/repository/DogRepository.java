package com.mainproject.udog_server.api.dog.repository;

import com.mainproject.udog_server.api.dog.entity.Dog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogRepository extends JpaRepository<Dog, Long> {
}
