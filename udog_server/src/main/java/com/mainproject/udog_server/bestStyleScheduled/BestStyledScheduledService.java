package com.mainproject.udog_server.bestStyleScheduled;

import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleBook.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.data.domain.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.stereotype.*;

import javax.persistence.*;
import java.time.*;
import java.util.*;
@Slf4j
@Service
@RequiredArgsConstructor
public class BestStyledScheduledService {
    private StyleLikeRepository styleLikeRepository;
    private StyleBookService styleBookService;

    @Scheduled(cron = "0 0 0/1 * * *")
    public void run() {
        //현재 시간 구하기
//        LocalDateTime now = LocalDateTime.now();

        //현재로부터 24시간 전의 시간 구하기
        LocalDateTime beforeOneDay = LocalDateTime.now().minusDays(1);

        //24시간 이내 가장 좋아요를 많이 받은 스타일 3개 가져오기
        List<Review> topStyles = styleLikeRepository.findTopOfBeforeOneDay(PageRequest.of(0, 3));

        //best 스타일 3개를 styleBookService로 보내기..?
        Page<Review> bestTopStyles = styleBookService.findTopStyles(topStyles);

        log.info(bestTopStyles + "업데이트 되었습니다.");
    }
}
