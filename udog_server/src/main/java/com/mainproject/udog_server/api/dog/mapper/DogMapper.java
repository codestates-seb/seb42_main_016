package com.mainproject.udog_server.api.dog.mapper;

import com.mainproject.udog_server.api.dog.dto.DogDto;
import com.mainproject.udog_server.api.dog.entity.Dog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DogMapper {
    Dog dogPostDtoToDog(DogDto.Post postDto);

    Dog dogPatchDtoToDog(DogDto.Patch patchDto);
   
    @Mapping(source = "dogBirthDate", target = "dogBirthDate", dateFormat = "yyyy-MM-dd")
    DogDto.Response dogToDogResponse(Dog dog);

    List<DogDto.Response> dogsToDogResponsesDtos(List<Dog> dogs);
}
