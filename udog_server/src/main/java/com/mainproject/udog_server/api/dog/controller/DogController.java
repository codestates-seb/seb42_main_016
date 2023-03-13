package com.mainproject.udog_server.api.dog.controller;

import com.mainproject.udog_server.api.dog.dto.DogDto;
import com.mainproject.udog_server.api.dog.entity.Dog;
import com.mainproject.udog_server.api.dog.mapper.DogMapper;
import com.mainproject.udog_server.api.dog.service.DogService;
import com.mainproject.udog_server.api.member.MemberService;
import com.mainproject.udog_server.util.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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
@RequestMapping("/my-dogs")
@Validated
@Slf4j
public class DogController {
    private final static String DOG_DEFAULT_URL = "/my-dogs";
    private final DogMapper dogMapper;

    private final DogService dogService;
//    private final MemberService memberService;

    @PostMapping
    public ResponseEntity postDog (@Valid @RequestBody DogDto.Post post,
                                   @RequestBody @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthdate) {

        Dog postDog = dogMapper.dogPostDtoToDog(post);
        postDog.setDogBirthDate(birthdate);
        Dog createdDogs = dogService.createDog(postDog);
        URI location = UriCreator.createUri(DOG_DEFAULT_URL, createdDogs.getDogId());

        return ResponseEntity.created(location).build();
    }


    @PatchMapping("/{dog-id}")
    public ResponseEntity patchDog (@Positive @PathVariable("dog-id") long dogId,
                                     @Valid @RequestBody DogDto.Patch patch,
                                    @RequestBody @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate birthdate) {
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

//todo 강아지 품종을 enum 으로 수정?
//todo 인증된 member가 강아지를 등록하는 걸로 수정
