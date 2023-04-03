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
    @Scheduled(cron = "0 0 * * * *")
    private void getTopStyle() {
        topStyleRepository.deleteAll();
        //24시간 이내 가장 좋아요를 많이 받은 스타일 3개 가져오기
        List<Review> topStyles = styleLikeService.findTopStyleLikeByDay();
        TopStyle topstyle = new TopStyle(topStyles);
        topStyleRepository.save(topstyle);
    }

    public Page<Review> findTopStyle() {
        List<Review> result = topStyleRepository.findAll().get(0).getTopStyles();

        Page<Review> topStyles = new PageImpl<>(result);
        return topStyles;
    }
}
