package com.mainproject.udog_server.restdocs.reviewLike;

import com.google.gson.Gson;
import com.mainproject.udog_server.api.member.Member;
import com.mainproject.udog_server.api.reviewLike.dto.ReviewLikeDto;
import com.mainproject.udog_server.api.reviewLike.entity.ReviewLike;
import com.mainproject.udog_server.api.reviewLike.mapper.ReviewLikeMapper;
import com.mainproject.udog_server.api.reviewLike.service.ReviewLikeService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.Arrays;
import java.util.List;

import static com.mainproject.udog_server.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.mainproject.udog_server.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs
public class ReviewLikeControllerRestDocsTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;
    @MockBean
    private ReviewLikeService reviewLikeService;
    @MockBean
    private ReviewLikeMapper mapper;

    @Test
    void createReviewLikeTest() throws Exception {
        // given
        ReviewLikeDto dto = new ReviewLikeDto(new Member(), 1L);
        String content = gson.toJson(dto);

        given(mapper.reviewLikeDtoToReviewLike(Mockito.any(ReviewLikeDto.class))).willReturn(new ReviewLike());

        ReviewLike mockResultReviewLike = new ReviewLike();
        mockResultReviewLike.setId(1L);
        given(reviewLikeService.addReviewLike(Mockito.any(ReviewLike.class))).willReturn(new ReviewLike());

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/reviewLikes")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        // then
        actions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/reviewLikes/"))))
                .andDo(document(
                        "post-reviewLike",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                        fieldWithPath("reviewId").type(JsonFieldType.NUMBER).description("리뷰 식별자")
                        ),
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        ),
                        responseFields(
                                List.of(fieldWithPath("id").type(JsonFieldType.NUMBER).description("리뷰 좋아요 식별자"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("reviewId").type(JsonFieldType.NUMBER).description("리뷰 식별자")
                                )
                        )
                ));
    }

    @Test
    void deleteReviewLikeTest() throws Exception {
        // given
        Long reviewLikeId = 1L;

        doNothing().when(reviewLikeService).deleteReviewLike(reviewLikeId, 1L);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .delete("/reviewLikes/{reviewLike-id}", reviewLikeId)
                );

        // then
        actions
                .andExpect(status().isNoContent())
                .andDo(document(
                        "delete-reviewLike",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                Arrays.asList(parameterWithName("reviewLike-id").description("리뷰 좋아요 식별자 ID"))
                        ))
                );
    }
}
