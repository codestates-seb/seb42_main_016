package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.DogDto;
import com.mainproject.udog_server.dog.Dog;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import javax.persistence.*;
import java.util.List;

@Mapper(componentModel = "spring")
public interface DogMapper {
    @Mapping(source = "dogBirthDate", target = "dogBirthDate", dateFormat = "yyyy-MM-dd")
    Dog dogPostDtoToDog(DogDto.Post postDto);

    Dog dogPatchDtoToDog(DogDto.Patch patchDto);
   
    @Mapping(source = "dogBirthDate", target = "dogBirthDate", dateFormat = "yyyy-MM-dd")

    DogDto.Response dogToDogResponse(Dog dog);

    List<DogDto.Response> dogsToDogResponsesDtos(List<Dog> dogs);


}
