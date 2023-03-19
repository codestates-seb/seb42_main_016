package com.mainproject.udog_server.styleBook;

import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

import javax.persistence.*;
import java.util.*;
import java.util.stream.*;

@Service
@RequiredArgsConstructor
public class StyleBookService {
    private static final int AMOUNT_OF_TOP = 3;
    private final StyleBookRepository styleBookRepository;

    public Page<Review> findStyles(int page, int size) {
        return styleBookRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    public void test(){
        List<Review> topThree = styleBookRepository.findTopOfTheWeek(PageRequest.of(0,AMOUNT_OF_TOP));
        System.out.println("@".repeat(90));
        topThree.forEach(e -> System.out.println(e.getReviewId()+ "  " + e.getCreatedAt()));

    }
}
