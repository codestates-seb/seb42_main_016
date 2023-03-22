package com.mainproject.udog_server.dog;

import com.mainproject.udog_server.member.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.*;

import java.util.List;
import java.util.Optional;

@Transactional
@RequiredArgsConstructor
@Service
@Slf4j
public class DogService {
    private final DogRepository dogRepository;


    public Dog createDog(Dog dog) {
        return dogRepository.save(dog);
    }

    @Transactional(propagation= Propagation.REQUIRES_NEW)
    public Dog updateDog(Dog dog, Member member) {
        Dog findDog = findVerifiedDogAndMember(dog.getDogId(), member);

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

    @Transactional(readOnly = true)
    public Dog findDog(long dogId, Member member) {
        Dog foundDog = findVerifiedDogAndMember(dogId, member);
        return foundDog;
    }


    public List<Dog> findDogs() {
        return (List<Dog>) dogRepository.findAll();
    }

    public void deleteDog(long dogId, Member member) {
        Dog findDog = findVerifiedDogAndMember(dogId, member);


        dogRepository.delete(findDog);
    }

    @Transactional(readOnly = true)
    public Dog findVerifiedDog(long dogId) {
        Optional<Dog> optionalDog = dogRepository.findById(dogId);
        Dog findDog = optionalDog.orElseThrow(() -> null);

        return findDog;
    }
    @Transactional(readOnly = true)
    public Dog findVerifiedDogAndMember(long dogId, Member member) {
        Optional<Dog> optionalDog = dogRepository.findByDogIdAndMember(dogId, member);
        Dog findDogAndMember = optionalDog.orElseThrow(() -> null);

        return findDogAndMember;
    }
}
