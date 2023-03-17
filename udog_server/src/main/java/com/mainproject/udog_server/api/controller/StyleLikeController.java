package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.StyleLikeCompositeService;
import com.mainproject.udog_server.api.dto.StyleLikeDto;
import com.mainproject.udog_server.hairshopLike.*;
import com.mainproject.udog_server.styleLike.*;
import com.mainproject.udog_server.api.mapper.StyleLikeMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.*;
import java.security.Principal;

@RestController
@RequestMapping("/styleLikes")
@RequiredArgsConstructor
public class StyleLikeController {

    private final StyleLikeCompositeService compositeService;
    private final StyleLikeMapper mapper;

    @PostMapping("/{review-id}")
    public ResponseEntity<?> postStyleLikeLike(@Positive @PathVariable("review-id") long reviewId, Principal principal) {
        StyleLike response = compositeService.doStyleLike(reviewId, principal.getName());

        return new ResponseEntity<>(mapper.StyleLikeToStyleLikeResponseDto(response), HttpStatus.CREATED);
    }

    @DeleteMapping("/{style-like-id}")
    public ResponseEntity<?> deleteStyleLikeLike(@Positive @PathVariable("style-like-id") long styleLikeId, Principal principal) {
        compositeService.deleteStyleLike(styleLikeId, principal.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}