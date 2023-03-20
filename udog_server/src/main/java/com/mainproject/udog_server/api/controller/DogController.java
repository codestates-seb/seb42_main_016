package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.*;
import com.mainproject.udog_server.api.dto.DogDto;
import com.mainproject.udog_server.dog.Dog;
import com.mainproject.udog_server.api.mapper.DogMapper;
import com.mainproject.udog_server.member.Member;
import com.mainproject.udog_server.util.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.security.Principal;
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
    private final DogCompositeService compositeService;

    @PostMapping
    public ResponseEntity postDog (@Valid @RequestBody DogDto.Post post, Principal principal){
        Dog creatingDog = dogMapper.dogPostDtoToDog(post);

        Dog createdDog = compositeService.createDog(creatingDog, principal.getName());
        DogDto.Response response = dogMapper.dogToDogResponse(createdDog);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @PatchMapping("/{dog-id}")
    public ResponseEntity patchDog (@Positive @PathVariable("dog-id") long dogId,
                                     @Valid @RequestBody DogDto.Patch patch, Principal principal)
                                    {
        patch.setDogId(dogId);
        Dog updatingDog = dogMapper.dogPatchDtoToDog(patch);

        Dog updatedDog = compositeService.updateDog(updatingDog, principal.getName());

        DogDto.Response response = dogMapper.dogToDogResponse(updatedDog);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping("/{dog-id}")
    public ResponseEntity getDog (@Positive @PathVariable("dog-id") long dogId, Principal principal) {

        Dog response = compositeService.findDog(dogId, principal.getName());

        return new ResponseEntity<>(dogMapper.dogToDogResponse(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getDogs () {
        List<Dog> dogs = compositeService.findDogs();
        List<DogDto.Response> response = dogMapper.dogsToDogResponsesDtos(dogs);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{dog-id}")
    public ResponseEntity deleteDog (@Positive @PathVariable("dog-id") long dogId, Principal principal) {
        compositeService.deleteDog(dogId, principal.getName());


        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

//todo 포스트맨으로 post 요청은 되는데 get,patch 요청이 안됨
