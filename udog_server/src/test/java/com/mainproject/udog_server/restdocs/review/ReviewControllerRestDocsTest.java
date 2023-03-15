package com.mainproject.udog_server.restdocs.review;

import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import com.mainproject.udog_server.api.member.Member;
import com.mainproject.udog_server.api.member.MemberService;
import com.mainproject.udog_server.api.review.dto.ReviewDto;
import com.mainproject.udog_server.api.review.entity.Review;
import com.mainproject.udog_server.api.review.mapper.ReviewMapper;
import com.mainproject.udog_server.api.review.service.ReviewService;
import com.mainproject.udog_server.api.reviewLike.service.ReviewLikeService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.mainproject.udog_server.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.mainproject.udog_server.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
public class ReviewControllerRestDocsTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;
    @MockBean
    private ReviewService reviewService;
    @MockBean
    private ReviewLikeService reviewLikeService;
    @MockBean
    private MemberService memberService;
    @MockBean
    private ReviewMapper mapper;

//    @WithMockUser(authorities = "ROLE_USER")
    @Test
    void postReviewTest() throws Exception {
        // given
        ReviewDto.Post post = new ReviewDto.Post("이미지", "텍스트", null);
        String content = gson.toJson(post);

        Member mockMember = new Member();
        mockMember.setMemberId(1L);
        Principal principal = () -> "test@test.com";
        given(memberService.findLoginMemberByEmail(Mockito.anyString())).willReturn(mockMember);

        given(mapper.reviewPostDtoToReview(Mockito.any(ReviewDto.Post.class))).willReturn(new Review());

        given(reviewService.createReview(Mockito.any(Review.class))).willReturn(new Review());

        ReviewDto.Response responseDto = new ReviewDto.Response(1L, "이미지", "텍스트",
                0, LocalDateTime.now(), LocalDateTime.now());
        given(mapper.reviewToReviewResponseDto(Mockito.any(Review.class))).willReturn(responseDto);

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/reviews")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                                .with(user("test@test.com"))
                                .principal(principal)
                );

        // then
        actions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/reviews"))))
                .andDo(document(
                        "post-review",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("reviewImage").type(JsonFieldType.STRING).description("리뷰 이미지"),
                                        fieldWithPath("reviewText").type(JsonFieldType.STRING).description("리뷰 텍스트")
                                )
                        ),
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("리뷰 식별자"),
                                        fieldWithPath("reviewImage").type(JsonFieldType.STRING).description("리뷰 이미지"),
                                        fieldWithPath("reviewText").type(JsonFieldType.STRING).description("리뷰 텍스트"),
                                        fieldWithPath("reviewLikeCount").type(JsonFieldType.NUMBER).description("리뷰 좋아요 개수"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("리뷰 생성 시간"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("리뷰 수정 시간")
                                )
                        )
                ));
    }

    @Test
    void patchReviewTest() throws Exception {
        // given
        Long reviewId = 1L;
        Member mockMember = new Member();
        mockMember.setMemberId(1L);
        Principal principal = () -> "test@test.com";

        ReviewDto.Patch patch = new ReviewDto.Patch(1L, "이미지", "텍스트", mockMember);
        String content = gson.toJson(patch);

        ReviewDto.Response responseDto = new ReviewDto.Response(1L, "이미지", "텍스트",
                0, LocalDateTime.now(), LocalDateTime.now());

        given(memberService.findLoginMemberByEmail(Mockito.anyString())).willReturn(mockMember);

        given(mapper.reviewPatchDtoToReview(Mockito.any(ReviewDto.Patch.class))).willReturn(new Review());

        given(reviewService.updateReview(Mockito.any(Review.class), Mockito.anyLong())).willReturn(new Review());

        given(mapper.reviewToReviewResponseDto(Mockito.any(Review.class))).willReturn(responseDto);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .patch("/reviews/{review-id}", reviewId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                                .with(user("test@test.com"))
                                .principal(principal)
                );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "patch-review",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("review-id").description("리뷰 식별자 ID")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("reviewImage").type(JsonFieldType.STRING).description("리뷰 이미지").optional(),
                                        fieldWithPath("reviewText").type(JsonFieldType.STRING).description("리뷰 텍스트").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("리뷰 식별자"),
                                        fieldWithPath("reviewImage").type(JsonFieldType.STRING).description("리뷰 이미지"),
                                        fieldWithPath("reviewText").type(JsonFieldType.STRING).description("리뷰 텍스트"),
                                        fieldWithPath("reviewLikeCount").type(JsonFieldType.NUMBER).description("리뷰 좋아요 개수"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("리뷰 생성 시간"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("리뷰 수정 시간")
                                )
                        )
                ));
    }

    @Test
    void getReviewTest() throws Exception {
        // given
        Long reviewId = 1L;

        ReviewDto.Response response = new ReviewDto.Response(1L, "이미지", "텍스트",
                0, LocalDateTime.now(), LocalDateTime.now());

        given(reviewService.findReview(Mockito.anyLong())).willReturn(new Review());
        given(mapper.reviewToReviewResponseDto(Mockito.any(Review.class))).willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .get("/reviews/{review-id}", reviewId)
                                .accept(MediaType.APPLICATION_JSON)
                );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "get-review",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("review-id").description("리뷰 식별자 ID")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("리뷰 식별자"),
                                        fieldWithPath("reviewImage").type(JsonFieldType.STRING).description("리뷰 이미지"),
                                        fieldWithPath("reviewText").type(JsonFieldType.STRING).description("리뷰 텍스트"),
                                        fieldWithPath("reviewLikeCount").type(JsonFieldType.NUMBER).description("리뷰 좋아요 개수"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("리뷰 생성 시간"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("리뷰 수정 시간")
                                )
                        )
                ));
    }

    @Test
    void getReviewsTest() throws Exception {
        // given
        String page = "1";
        String size = "10";
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);

        Review review1 = new Review();
        Review review2 = new Review();

        Page<Review> pageReviews =
                new PageImpl<>(List.of(review1, review2),
                        PageRequest.of(0, 10, Sort.by("id").descending()), 2);

        List<ReviewDto.listResponse> responses = List.of(
                new ReviewDto.listResponse(1L, "이미지 1", "텍스트 1", LocalDateTime.now()),
                new ReviewDto.listResponse(2L, "이미지 2", "텍스트 2", LocalDateTime.now())
        );

        given(reviewService.findReviews(Mockito.anyInt(), Mockito.anyInt())).willReturn(pageReviews);
        given(mapper.reviewsToReviewResponseDto(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions =
                mockMvc.perform(
                        get("/reviews")
                                .params(queryParams)
                                .accept(MediaType.APPLICATION_JSON)
                );

        // then
        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data").isArray())
                .andDo(
                        document(
                                "get-reviews",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                requestParameters(
                                        List.of(
                                                parameterWithName("page").description("Page 번호"),
                                                parameterWithName("size").description("Page 사이즈")
                                        )
                                ),
                                responseFields(
                                        List.of(
                                                fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과 데이터").optional(),
                                                fieldWithPath("data[].id").type(JsonFieldType.NUMBER).description("리뷰 식별자"),
                                                fieldWithPath("data[].reviewImage").type(JsonFieldType.STRING).description("리뷰 이미지"),
                                                fieldWithPath("data[].reviewText").type(JsonFieldType.STRING).description("리뷰 텍스트"),
                                                fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("리뷰 생성 시간"),
                                                fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                                fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호"),
                                                fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 사이즈"),
                                                fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 건 수"),
                                                fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지 수")
                                        )
                                )
                        )
                ).andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");

        assertThat(list.size(), is(2));
    }

    @Test
    void deleteReviewTest() throws Exception {
        // given
        Long reviewId = 1L;

        doNothing().when(reviewService).deleteReview(Mockito.anyLong(), Mockito.anyLong());

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .delete("/reviews/{review-id}", reviewId)
                );

        // then
        actions
                .andExpect(status().isNoContent())
                .andDo(
                        document(
                                "delete-review",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                pathParameters(
                                        Arrays.asList(parameterWithName("review-id").description("리뷰 식별자 ID"))
                                )
                        )
                );
    }

    @Test
    void getReviewLikeCount() throws Exception {
        // given
        Long reviewId = 1L;

        reviewLikeService.getReviewLikeCount(reviewId);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .get("/reviews/{reviews-id}/likeCount", reviewId)
                );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(
                        document(
                                "get-likeCount",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                pathParameters(
                                        parameterWithName("review-id").description("리뷰 식별자 ID")
                                ),
                                responseFields(
                                        fieldWithPath("").type(JsonFieldType.NUMBER).description("리뷰 좋아요 개수").optional()
                                )
                        )
                );
    }
}
