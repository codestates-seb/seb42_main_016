package com.mainproject.udog_server.dog.controller;

import com.mainproject.udog_server.dog.dto.DogDto;
import com.mainproject.udog_server.dog.entity.Dog;
import com.mainproject.udog_server.dog.mapper.DogMapper;
import com.mainproject.udog_server.dog.service.DogService;
import com.mainproject.udog_server.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/myDogs")
@Validated
public class DogController {
    private final static String DOG_DEFAULT_URL = "/myDogs";
    private final DogMapper dogMapper;

    private final DogService dogService;

    @PostMapping
    public ResponseEntity postDog (@Valid @RequestBody DogDto.Post post,
                                   @RequestParam("birthdate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthdate) {
        Dog postDog = dogMapper.dogPostDtoToDog(post);
        postDog.setDogBirthDate(birthdate);
        Dog createdDogs = dogService.createDog(postDog);
        URI location = UriCreator.createUri(DOG_DEFAULT_URL, createdDogs.getDogId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{dog-id}")
    public ResponseEntity patchDog (@Positive @PathVariable("dog-id") long dogId,
                                     @Valid @RequestBody DogDto.Patch patch,
                                    @RequestParam("birthdate") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthdate) {
        Dog patchDog = dogMapper.dogPatchDtoToDog(patch);
        patchDog.setDogId(dogId);
        patchDog.setDogBirthDate(birthdate);
        Dog updateDog = dogService.updateDog(patchDog);
        DogDto.Response response = dogMapper.dogToDogResponse(updateDog);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{dog-id}")
    public ResponseEntity getDog (@Positive @PathVariable("dog-id") long dogId) {
        Dog response = dogService.findDog(dogId);

        return new ResponseEntity<>(dogMapper.dogToDogResponse(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getDogs () {
        List<Dog> dogs = dogService.findDogs();
        List<DogDto.Response> response = dogMapper.dogsToDogResponsesDtos(dogs);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{dog-id}")
    public ResponseEntity deleteDog (@Positive @PathVariable("dog-id") long dogId) {
        dogService.deleteDog(dogId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
