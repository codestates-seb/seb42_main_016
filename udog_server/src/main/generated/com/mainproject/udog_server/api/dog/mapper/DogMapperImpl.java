package com.mainproject.udog_server.api.dog.mapper;

import com.mainproject.udog_server.api.dog.dto.DogDto.Patch;
import com.mainproject.udog_server.api.dog.dto.DogDto.Post;
import com.mainproject.udog_server.api.dog.dto.DogDto.Response;
import com.mainproject.udog_server.api.dog.entity.Dog;
import com.mainproject.udog_server.api.dog.entity.Dog.DogSpecies;
import com.mainproject.udog_server.api.member.Member;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-15T13:38:35+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class DogMapperImpl implements DogMapper {

    @Override
    public Dog dogPostDtoToDog(Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Dog dog = new Dog();

        dog.setDogName( postDto.getDogName() );
        dog.setDogBirthDate( postDto.getDogBirthDate() );
        dog.setDogSpecies( postDto.getDogSpecies() );
        dog.setDogWeight( postDto.getDogWeight() );
        dog.setDogDescription( postDto.getDogDescription() );
        dog.setMember( postDto.getMember() );

        return dog;
    }

    @Override
    public Dog dogPatchDtoToDog(Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Dog dog = new Dog();

        dog.setDogId( patchDto.getDogId() );
        dog.setDogName( patchDto.getDogName() );
        dog.setDogBirthDate( patchDto.getDogBirthDate() );
        dog.setDogWeight( patchDto.getDogWeight() );
        dog.setDogDescription( patchDto.getDogDescription() );
        dog.setMember( patchDto.getMember() );

        return dog;
    }

    @Override
    public Response dogToDogResponse(Dog dog) {
        if ( dog == null ) {
            return null;
        }

        String dogBirthDate = null;
        long dogId = 0L;
        String dogName = null;
        DogSpecies dogSpecies = null;
        int dogWeight = 0;
        String dogDescription = null;
        Member member = null;

        if ( dog.getDogBirthDate() != null ) {
            dogBirthDate = DateTimeFormatter.ofPattern( "yyyy-MM-dd" ).format( dog.getDogBirthDate() );
        }
        dogId = dog.getDogId();
        dogName = dog.getDogName();
        dogSpecies = dog.getDogSpecies();
        dogWeight = dog.getDogWeight();
        dogDescription = dog.getDogDescription();
        member = dog.getMember();

        Response response = new Response( dogId, dogName, dogBirthDate, dogSpecies, dogWeight, dogDescription, member );

        return response;
    }

    @Override
    public List<Response> dogsToDogResponsesDtos(List<Dog> dogs) {
        if ( dogs == null ) {
            return null;
        }

        List<Response> list = new ArrayList<Response>( dogs.size() );
        for ( Dog dog : dogs ) {
            list.add( dogToDogResponse( dog ) );
        }

        return list;
    }
}
