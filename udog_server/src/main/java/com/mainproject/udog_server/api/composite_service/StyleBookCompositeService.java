package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleBook.*;
import com.mainproject.udog_server.styleLike.*;
import com.mainproject.udog_server.topStyle.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import java.security.*;
import java.util.*;
import java.util.stream.*;

@Service
@RequiredArgsConstructor
@Transactional
public class StyleBookCompositeService {
    private final StyleBookService styleBookService;

    private final TopStyleService topStyleService;

    private final MemberService memberService;
    @Transactional(readOnly = true)
    public Page<Review> getStyleBookList(Principal principal, int page, int size) {
        Page<Review> pageReviews = styleBookService.findStyles(page, size);
        return setLikeCountAndStyleLikeId(principal, pageReviews);
    }

    @Transactional(readOnly = true)
    public Page<Review> findTopStyles(Principal principal){
//        List<Review> topStyle = styleLikeService.findTopStyleLikeByDay();
        Page<Review> pageTopStyles = topStyleService.findTopStyle();
        return setLikeCountAndStyleLikeId(principal, pageTopStyles);
    }

    public Page<Review> setLikeCountAndStyleLikeId(Principal principal, Page<Review> reviews){
        //로그인 상태가 아니라 토큰값이 없다면
        if (principal == null) {
            reviews.getContent().stream().forEach(review ->
                    review.setLikeCount(review.getStyleLikes().size())
            );
        } else {
            String loginEmail = principal.getName();
            long loginMemberId = memberService.findLoginMemberByEmail(loginEmail).getMemberId();
            reviews.getContent().stream().forEach(review -> {
                review.setLikeCount(review.getStyleLikes().size());
                review.setMyStyleLikeId(findStyleLikeId(review.getStyleLikes(), loginMemberId));
            });
        }
        return reviews;
    }

    public long findStyleLikeId(List<StyleLike> styleLikes, long loginMemberId) {
        List<StyleLike> result = styleLikes
                .stream()
                .filter(styleLike ->
                        loginMemberId == styleLike.getMember().getMemberId())
                .collect(Collectors.toList());
        if(result.isEmpty())
            return 0;
        else
            return result.get(0).getStyleLikeId();
    }
}
