package com.mainproject.udog_server.topStyle;

import com.mainproject.udog_server.review.*;
import lombok.*;

import javax.persistence.*;
import java.util.*;




@Getter
@Setter
@NoArgsConstructor
@Entity
public class TopStyle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long topId;

    @Column(nullable = false)
    @ElementCollection(fetch = FetchType.EAGER)
    private List<Review> topStyles;

    public TopStyle(List<Review> topStyles) {
        this.topStyles = topStyles;
    }

//    @Column(nullable = false)
//    private Review topOne;
//
//    @Column(nullable = false)
//    private Review topTwo;
//
//    @Column(nullable = false)
//    private Review topThree;

//탑3 객체를 담는게 엔티티
    //레포지토리는 스케줄러가 계산해서 넣기 위한 메소드들이 있어야 됨
    //스케줄 메서드가 서비스에 있어야된다
}
//등록된 리뷰가 있다 -> 스타일북에 리뷰의 사진이 업로도 됨 -> 스타일북에서 스타일좋아요 ->
// 스타일좋아요에서 지난 24시간동안 좋아요 많은 스타일갯수가  집계되고 있다?
// 스타일북에서 로직을 받아서 그중 3개만 페이지네이션 해서 응답