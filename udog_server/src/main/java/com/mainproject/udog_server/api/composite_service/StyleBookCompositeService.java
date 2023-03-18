package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.hairshop.*;
import com.mainproject.udog_server.member.*;
import com.mainproject.udog_server.review.*;
import com.mainproject.udog_server.styleBook.*;
import com.mainproject.udog_server.styleLike.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

import java.security.*;
import java.util.*;
import java.util.stream.*;

@Service
@RequiredArgsConstructor
public class StyleBookCompositeService {
    private final StyleBookService styleBookService;

    private final StyleLikeService styleLikeService;

    private final MemberService memberService;

    public Page<Review> getStyleBookList(Principal principal, int page, int size) {
        Page<Review> pageReviews = styleBookService.findStyles(page, size);
        //로그인 상태의 request가 아니라 토큰에서 가져온 값이 없다면
        if (principal == null) {
            pageReviews.getContent().stream().forEach(review -> review.setLikeCount(styleLikeService.getReviewLikeCount(review.getReviewId())));
        } else {
            String loginEmail = principal.getName();
            long loginMemberId = memberService.findLoginMemberByEmail(loginEmail).getMemberId();
            pageReviews.getContent().stream().forEach(review -> {
                review.setLikeCount(review.getStyleLikes().size());
                review.setMyStyleLikeId(findStyleLikeId(review.getStyleLikes(), loginMemberId));
            });
        }
        return pageReviews;
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
