package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.*;
import com.mainproject.udog_server.api.mapper.*;
import com.mainproject.udog_server.dto.*;
import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.review.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.*;
import java.security.*;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/styleBook")
@RequiredArgsConstructor
public class StyleBookController {
    private final StyleBookCompositeService compositeService;

    private final StyleBookMapper styleBookMapper;
    @GetMapping
    public ResponseEntity getStyleBooks(Principal principal,
                                        @Positive@RequestParam int page,
                                        @Positive @RequestParam int size) {
        Page<Review> pageStyleBooks = compositeService.getStyleBookList(principal, page - 1, size);

        return new ResponseEntity<>(
                new MultiResponseDto<>(
                        styleBookMapper.reviewsToStyleBookResponses(pageStyleBooks.getContent()),
                        pageStyleBooks),
                HttpStatus.OK);
    }

    @GetMapping("/top")
    public ResponseEntity getTopStyles(Principal principal){
        Page<Review> top3StyleBooks = compositeService.findTopStyles(principal);
        return new ResponseEntity<>(
                styleBookMapper.reviewsToStyleBookResponses(top3StyleBooks.getContent()),
                HttpStatus.OK);
    }
}
