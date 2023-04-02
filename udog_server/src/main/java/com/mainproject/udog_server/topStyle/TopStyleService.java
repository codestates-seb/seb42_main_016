package com.mainproject.udog_server.topStyle;

import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleBook.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.data.domain.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.stereotype.*;

import java.time.*;
import java.util.*;
@Component
@RequiredArgsConstructor
public class TopStyleService {
    private final StyleLikeService styleLikeService;

    private final TopStyleRepository topStyleRepository;
    @Scheduled(cron = "0/10 * * * * *")
    private void getTopStyle() {
        topStyleRepository.deleteAll();
        //24시간 이내 가장 좋아요를 많이 받은 스타일 3개 가져오기
        List<Review> topStyles = styleLikeService.findTopStyleLikeByDay();
        TopStyle topstyle = new TopStyle(topStyles);
        topStyleRepository.save(topstyle);

        System.out.println("@".repeat(80));
        System.out.println(topstyle.getTopStyles());
        topStyles.forEach(t -> System.out.println(t.getReviewText()));

    }

    public Page<Review> findTopStyle() {
        List<TopStyle> result = topStyleRepository.findAll();
        Page<Review> topStyles = new PageImpl<>(result.get(0).getTopStyles());
        System.out.println(LocalDateTime.now());
        topStyles.forEach(t -> System.out.println(t.getReviewText()));
        return null;
    }
}
