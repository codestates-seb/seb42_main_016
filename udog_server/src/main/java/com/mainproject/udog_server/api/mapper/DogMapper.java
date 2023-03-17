package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.DogDto;
import com.mainproject.udog_server.dog.Dog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DogMapper {
    Dog dogPostDtoToDog(DogDto.Post postDto);

    Dog dogPatchDtoToDog(DogDto.Patch patchDto);
   
    @Mapping(source = "dog.dogBirthDate", target = "dogBirthDate", dateFormat = "yyyy-MM-dd")
//    @Mapping(source = "member.memberId", target =  "memberId")
    DogDto.Response dogToDogResponse(Dog dog);

    List<DogDto.Response> dogsToDogResponsesDtos(List<Dog> dogs);


}
