//package com.mainproject.udog_server.restdocs.dog;
//
//import com.google.gson.Gson;
//import com.mainproject.udog_server.api.dog.controller.DogController;
//import com.mainproject.udog_server.api.dto.DogDto;
//import com.mainproject.udog_server.api.dog.entity.Dog;
//import com.mainproject.udog_server.api.mapper.DogMapper;
//import com.mainproject.udog_server.api.dog.service.DogService;
//import com.mainproject.udog_server.util.ApiDocumentUtils;
//import org.hibernate.annotations.ResultCheckStyle;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.boot.web.servlet.server.Jsp;
//import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
//import org.springframework.restdocs.payload.JsonFieldType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.ResultActions;
//
//import java.util.ArrayList;
//import java.util.List;
//
//
//import static com.mainproject.udog_server.util.ApiDocumentUtils.getRequestPreProcessor;
//import static com.mainproject.udog_server.util.ApiDocumentUtils.getResponsePreProcessor;
//import static org.hamcrest.Matchers.is;
//import static org.hamcrest.Matchers.startsWith;
//import static org.mockito.BDDMockito.given;
//import static org.mockito.Mockito.doNothing;
//import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
//import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
//import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.patch;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
//import static org.springframework.restdocs.payload.PayloadDocumentation.*;
//import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
//import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
//
//import javax.print.attribute.standard.Media;
//import javax.xml.transform.Result;
//import java.time.LocalDate;
//
//import static org.mockito.BDDMockito.given;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@WebMvcTest(DogController.class)
//@MockBean(JpaMetamodelMappingContext.class)
//@AutoConfigureRestDocs
//public class DogControllerRestDocsTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private DogService dogService;
//
//    @MockBean
//    private DogMapper mapper;
//
//    @Autowired
//    private Gson gson;
//
//    @Test
//    public void postDogTest() throws Exception {
//        //given
//        LocalDate dogBirthdate = LocalDate.parse("2000-01-01");
//        DogDto.Post post = new DogDto.Post("럭키", dogBirthdate, "진돗개", 10, "없음");
//        String content = gson.toJson(post);
//
//        given(mapper.dogPostDtoToDog(Mockito.any(DogDto.Post.class))).willReturn(new Dog());
//
//        Dog mockResultDog = new Dog();
//        mockResultDog.setDogId(1L);
//        given(dogService.createDog(Mockito.any(Dog.class))).willReturn(mockResultDog);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        post("/my-dogs")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//
//        //then
//        actions
//                .andExpect(status().isCreated())
//                .andExpect(header().string("Location", is(startsWith("/my-dogs"))))
//                .andDo(document(
//                        "post-dog",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("dogName").type(JsonFieldType.STRING).description("강아지 이름"),
//                                        fieldWithPath("dogBirthDate").type(JsonFieldType.STRING).description("강아지 생일"),
//                                        fieldWithPath("dogSpecies").type(JsonFieldType.STRING).description("강아지 품종"),
//                                        fieldWithPath("dogWeight").type(JsonFieldType.NUMBER).description("강아지 몸무게"),
//                                        fieldWithPath("dogDescription").type(JsonFieldType.STRING).description("특이사항")
//                                )
//                        ),
//                        responseHeaders(
//                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의  URI")
//                        )
//
//                ));
//    }
//
//    @Test
//    public void patchDogTest() throws Exception {
//        //given
//        long dogId = 1L;
//        LocalDate dogBirthdate = LocalDate.parse("2000-01-01");
//        DogDto.Patch patch = new DogDto.Patch(dogId, "럭키", dogBirthdate, "진돗개", 10, "없음");
//        String content = gson.toJson(patch);
//
//        DogDto.Response responseDto =
//                new DogDto.Response(1L, "럭키", "2000-01-01", "진돗개", 10, "없음");
//
//        given(mapper.dogPatchDtoToDog(Mockito.any(DogDto.Patch.class))).willReturn(new Dog());
//
//        given(dogService.updateDog(Mockito.any(Dog.class))).willReturn(new Dog());
//
//        given(mapper.dogToDogResponse(Mockito.any(Dog.class))).willReturn(responseDto);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        patch("/my-dogs/{dog-id}", dogId)
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//
//        //then
//        actions
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.dogId").value(patch.getDogId()))
//                .andExpect(jsonPath("$.data.dogName").value(patch.getDogName()))
//                .andExpect(jsonPath("$.data.dogBirthDate").value(patch.getDogBirthDate()))
//                .andExpect(jsonPath("$.data.dogSpecies").value(patch.getDogSpecies()))
//                .andExpect(jsonPath("$.data.dogWeight").value(patch.getDogWeight()))
//                .andExpect(jsonPath("$.data.dogDescription").value(patch.getDogDescription()))
//                .andDo(document("patch-dog",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("dog-id").description("강아지 식별자")
//                        ),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("dogId").type(JsonFieldType.NUMBER).description("강아지 식별자").ignored(),
//                                        fieldWithPath("dogName").type(JsonFieldType.STRING).description("강아지 이름").optional(),
//                                        fieldWithPath("dogBirthDate").type(JsonFieldType.STRING).description("강아지 생일").optional(),
//                                        fieldWithPath("dogSpecies").type(JsonFieldType.STRING).description("강아지 품종").optional(),
//                                        fieldWithPath("dogWeight").type(JsonFieldType.NUMBER).description("강아지 몸무게").optional(),
//                                        fieldWithPath("dogDescription").type(JsonFieldType.STRING).description("특이사항").optional()
//                                )
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
//                                        fieldWithPath("data.dogId").type(JsonFieldType.NUMBER).description("강아지 식별자"),
//                                        fieldWithPath("data.dogName").type(JsonFieldType.STRING).description("강아지 이름"),
//                                        fieldWithPath("data.dogBirthDate").type(JsonFieldType.STRING).description("강아지 생일"),
//                                        fieldWithPath("data.dogSpecies").type(JsonFieldType.STRING).description("강아지 품종"),
//                                        fieldWithPath("data.dogWeight").type(JsonFieldType.NUMBER).description("강아지 몸무게"),
//                                        fieldWithPath("data.dogDescription").type(JsonFieldType.STRING).description("특이사항")
//                                )
//                        )
//                ));
//    }
//
//    @Test
//    public void getDogTest() throws Exception {
//        //given
//        long dogId = 1L;
//
//        DogDto.Response response = new DogDto.Response
//                (1L, "럭키", "2000-01-01", "진돗개", 10, "없음");
//
//        given(mapper.dogToDogResponse(Mockito.any(Dog.class))).willReturn(response);
//        given(dogService.findDog(Mockito.anyLong())).willReturn(new Dog());
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        RestDocumentationRequestBuilders
//                                .get("/my-dogs/{dogId}", dogId)
//                                .accept(MediaType.APPLICATION_JSON)
//                );
//
//        //then
//        actions
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.dogId").value(response.getDogId()))
//                .andExpect(jsonPath("$.data.dogName").value(response.getDogName()))
//                .andExpect(jsonPath("$.data.dogBirthDate").value(response.getDogBirthDate()))
//                .andExpect(jsonPath("$.data.dogSpecies").value(response.getDogSpecies()))
//                .andExpect(jsonPath("$.data.dogWeight").value(response.getDogWeight()))
//                .andExpect(jsonPath("$.data.dogDescription").value(response.getDogDescription()))
//                .andDo(document("get-dog",
//                        getResponsePreProcessor(),
//                        pathParameters(parameterWithName("dog-id").description("강아지 식별자")
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("data").type(JsonFieldType.OBJECT).description("결과 데이터"),
//                                        fieldWithPath("data.dogId").type(JsonFieldType.NUMBER).description("강아지 식별자"),
//                                        fieldWithPath("data.dogName").type(JsonFieldType.STRING).description("강아지 이름"),
//                                        fieldWithPath("data.dogBirthDate").type(JsonFieldType.STRING).description("강아지 생일"),
//                                        fieldWithPath("data.dogSpecies").type(JsonFieldType.STRING).description("강아지 품종"),
//                                        fieldWithPath("data.dogWeight").type(JsonFieldType.NUMBER).description("강아지 몸무게"),
//                                        fieldWithPath("data.dogDescription").type(JsonFieldType.STRING).description("특이사항")
//                                )
//                        )
//                        ));
//    }
//
//    @Test
//    public void getDogsTest() throws Exception {
//        //given
//        List<DogDto.Response> dogs = List.of(new DogDto.Response(
//                        1L,"럭키", "2000-01-01", "진돗개", 10, "없음"));
//                new DogDto.Response(
//                        2L, "해피", "2001-01-01", "시바견", 11, "없음"
//                );
//
//                given(dogService.findDogs()).willReturn(new ArrayList<>());
//                given(mapper.dogsToDogResponsesDtos(Mockito.anyList())).willReturn(dogs);
//
//        //when
//        ResultActions getDogsActions = mockMvc.perform(
//                RestDocumentationRequestBuilders
//                        .get("/my-dogs")
//                        .accept(MediaType.APPLICATION_JSON)
//        );
//
//        //then
//        MvcResult result = getDogsActions
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data").isArray())
//                .andDo(document(
//                        "get-dogs",
//                        ApiDocumentUtils.getResponsePreProcessor(),
//                        responseFields(
//                                List.of(fieldWithPath("data").type(JsonFieldType.ARRAY).description("결과 데이터").optional(),
//                                        fieldWithPath("data[].dogId").type(JsonFieldType.NUMBER).description("강아지 식별자"),
//                                        fieldWithPath("data[].dogName").type(JsonFieldType.STRING).description("강아지 이름"),
//                                        fieldWithPath("data[].dogBirthDate").type(JsonFieldType.STRING).description("강아지 생일"),
//                                        fieldWithPath("data[].dogSpecies").type(JsonFieldType.STRING).description("강아지 품종"),
//                                        fieldWithPath("data[].dogWeight").type(JsonFieldType.NUMBER).description("강아지 몸무게"),
//                                        fieldWithPath("data[].dogDescription").type(JsonFieldType.STRING).description("특이사항")
//                                )
//                        )
//                )).andReturn();
//    }
//
//    @Test
//    public void deleteDogTest() throws Exception {
//        //given
//        long dogId = 1L;
//        doNothing().when(dogService).deleteDog(Mockito.anyLong());
//
//        //when
//        ResultActions deleteActions =
//                mockMvc.perform(
//                        RestDocumentationRequestBuilders
//                                .delete("/my-dogs/{dog-id}", dogId)
//                                .accept(MediaType.APPLICATION_JSON)
//                );
//
//        //then
//        deleteActions.andExpect(status().isNoContent())
//                .andDo(document(
//                        "delete-dog",
//                        pathParameters(
//                                parameterWithName("dog-id").description("강아지 식별자")
//                        )
//                ));
//    }
//}
