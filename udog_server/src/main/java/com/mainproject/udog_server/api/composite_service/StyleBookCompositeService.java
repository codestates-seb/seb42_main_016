package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleBook.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

@Service
@RequiredArgsConstructor
public class StyleBookCompositeService {
    private final StyleBookService styleBookService;
    public Page<Review> getStyleBookList(int page, int size){
        return styleBookService.findStyles(page, size);
    }
}
