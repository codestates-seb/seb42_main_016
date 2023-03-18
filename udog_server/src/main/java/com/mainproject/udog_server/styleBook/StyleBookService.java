package com.mainproject.udog_server.styleBook;

import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

import java.util.*;
import java.util.stream.*;

@Service
@RequiredArgsConstructor
public class StyleBookService {
    private final StyleBookRepository styleBookRepository;

    private final StyleLikeRepository styleLikeRepository;

    public Page<Review> findStyles(int page, int size) {
        return styleBookRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }
}
