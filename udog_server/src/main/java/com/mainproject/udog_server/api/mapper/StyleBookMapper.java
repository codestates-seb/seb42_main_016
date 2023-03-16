package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.review.*;
import org.mapstruct.*;

import java.util.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface StyleBookMapper {

    List<StyleBookResponseDto> reviewsToStyleBookResponses(List<Review> reviews);
}
