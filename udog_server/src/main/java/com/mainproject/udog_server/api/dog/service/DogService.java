package com.mainproject.udog_server.api.dog.service;

import com.mainproject.udog_server.api.dog.repository.DogRepository;
import com.mainproject.udog_server.api.dog.entity.Dog;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class DogService {
    private final DogRepository dogRepository;

    public DogService(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    public Dog createDog(Dog dog) {
        return dogRepository.save(dog);
    }

    public Dog updateDog(Dog dog) {
        Dog findDog = findVerifiedDog(dog.getDogId());

        Optional.ofNullable(dog.getDogName())
                .ifPresent(name -> findDog.setDogName(name));
        Optional.ofNullable(dog.getDogBirthDate())
                .ifPresent(birthdate -> findDog.setDogBirthDate(birthdate));
        Optional.ofNullable(dog.getDogSpecies())
                .ifPresent(species -> findDog.setDogSpecies(species));
        Optional.ofNullable(dog.getDogWeight())
                .ifPresent(weight -> findDog.setDogWeight(weight));
        Optional.ofNullable(dog.getDogDescription())
                .ifPresent(description -> findDog.setDogDescription(description));

        return dogRepository.save(findDog);
    }

    public Dog findDog(long dogId) {
        return findVerifiedDog(dogId);
    }

    public List<Dog> findDogs() {
        return (List<Dog>) dogRepository.findAll();
    }

    public void deleteDog(long dogId) {
        Dog findDog = findVerifiedDog(dogId);

        dogRepository.delete(findDog);
    }

    public Dog findVerifiedDog(long dogId) {
        Optional<Dog> optionalDog = dogRepository.findById(dogId);
        Dog findDog = optionalDog.orElseThrow(() -> null);

        return findDog;
    }
}
