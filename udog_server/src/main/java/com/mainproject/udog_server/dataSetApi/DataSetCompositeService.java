package com.mainproject.udog_server.dataSetApi;

import com.mainproject.udog_server.hairshop.*;
import lombok.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;
import org.openqa.selenium.support.ui.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;
import org.springframework.web.client.*;
import org.springframework.web.util.*;
import org.springframework.beans.factory.annotation.Value;

import java.io.*;
import java.net.*;
import java.nio.charset.*;
import java.nio.file.*;
import java.time.*;
import java.util.*;
import java.util.concurrent.atomic.*;

@Service
@RequiredArgsConstructor
@Transactional
public class DataSetCompositeService {
    private final DataSetNaverCompositeService naverCompositeService;
    private WebDriver driver;
    private final DataSetService dataSetService;

    private final HairShopService hairShopService;

    @Value("${api.kakao.key}")
    private String key;
    private static final String localUrl = "https://dapi.kakao.com/v2/local/search/keyword.json";

    public List<Map<String,String>> setData(int page, int size) {
        List<String> querys = dataSetService.getList(size, page);
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "KakaoAK "+key);
        HttpEntity<String> httpEntity = new HttpEntity<>(httpHeaders);

        AtomicReference<List<Map<String, String>>> resultBody =
                new AtomicReference<>(new ArrayList<Map<String, String>>());

        querys.forEach(content -> {
            findHairShopInApi(restTemplate, httpEntity, resultBody, content);
        });
        return resultBody.get();
    }

    private void findHairShopInApi(RestTemplate restTemplate, HttpEntity<String> httpEntity, AtomicReference<List<Map<String, String>>> resultBody, String content) {
        URI targetUrl = UriComponentsBuilder
                .fromUriString(localUrl)
                .queryParam("query", content)
                .build()
                .encode(StandardCharsets.UTF_8)
                .toUri();
        ResponseEntity<Map> result = restTemplate.exchange(targetUrl, HttpMethod.GET, httpEntity, Map.class);
        resultBody.set((List<Map<String, String>>) result.getBody().get("documents"));
        System.out.println("@".repeat(80));
        System.out.println(content);
        System.out.println(resultBody);
        if(!resultBody.get().isEmpty()){
        naverCompositeService.callNaverApiKakao(content, resultBody.get().get(0));
//            updateApiImageDataHairShop(resultBody);
//            createApiDataHairShop(resultBody);
        }else {
            naverCompositeService.callNaverApiKakao(content, null);
        }
    }

    private void createApiDataHairShop(AtomicReference<List<Map<String, String>>> resultBody) {
        HairShop hairShop = new HairShop();
        hairShop.setHairShopAddress(resultBody.get().get(0).get("address_name"));
        hairShop.setHairShopPhone(resultBody.get().get(0).get("phone"));
        hairShop.setHairShopName(resultBody.get().get(0).get("place_name"));
        hairShop.setKakaoApiId(resultBody.get().get(0).get("id"));
        hairShop.setLongitude(Double.parseDouble(resultBody.get().get(0).get("x")));
        hairShop.setLatitude(Double.parseDouble(resultBody.get().get(0).get("y")));
        hairShopService.createHairShop(hairShop);
    }

    private void updateApiImageDataHairShop(AtomicReference<List<Map<String, String>>> resultBody){
        String kakaoMapUrl = resultBody.get().get(0).get("place_url");
        String imageSrc = getImage(kakaoMapUrl);
        if(imageSrc == null)
            return;
        HairShop foundImageHairShop = hairShopService.findVerifiedHairShopByApiId(resultBody.get().get(0).get("id"));
        foundImageHairShop.setHairShopImage(imageSrc);
        hairShopService.createHairShop(foundImageHairShop);
    }

    private String getImage(String url){
        Path path = Paths.get("/Users/sangyoonlee/Downloads/chromedriver_mac_arm64/chromedriver");
        System.setProperty("webdriver.chrome.driver", path.toString());

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        options.addArguments("--disable-popup-blocking");   // 팝업 안띄움
        options.addArguments("headless");   // 브라우저 안띄움
        options.addArguments("--disable-gpu");  // gpu 비활성화
        options.addArguments("--blink-settings=imagesEnabled=false");   // 이미지 다운 안받음

        driver = new ChromeDriver(options);
        WebDriverWait webDriverWait = new WebDriverWait(driver, Duration.ofSeconds(5));
        String apiImageUrl = null;

        try{
            driver.get(url);
            webDriverWait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("#mArticle > div.cont_photo.no_category > div.photo_area")));

            List<WebElement> contents = driver.findElements(By.cssSelector("#mArticle > div.cont_photo.no_category > div.photo_area"));
            if(contents.size() > 0) {
                System.out.println(contents.get(0));
                for (WebElement content : contents) {
                     apiImageUrl = content.findElement(By.cssSelector("ul > li.size_l > a")).getAttribute("style");
                }
                apiImageUrl = apiImageUrl.replace("background-image: url(\"","http:");
                apiImageUrl = apiImageUrl.replace("\");", "");
                System.out.println(apiImageUrl);
            }
        }catch (Exception e){
            System.out.println("no Image");
        }
        return apiImageUrl;
    }
}
