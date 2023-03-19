package com.mainproject.udog_server.styleBook;

import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import javax.persistence.*;
import java.util.*;
import java.util.stream.*;

@Service
@RequiredArgsConstructor
@Transactional
public class StyleBookService {
    private static final int AMOUNT_OF_TOP = 3;
    private final StyleBookRepository styleBookRepository;
    @Transactional(readOnly = true)
    public Page<Review> findStyles(int page, int size) {
        return styleBookRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
    }

    @Transactional(readOnly = true)
    public Page<Review> findTopStylesByDay(){
        return styleBookRepository.findTopOfToday(PageRequest.of(0,AMOUNT_OF_TOP));
    }

    public Page<Review> findTopStylesByWeek(){
        return styleBookRepository.findTopOfTheWeek(PageRequest.of(0,AMOUNT_OF_TOP));
    }
}
