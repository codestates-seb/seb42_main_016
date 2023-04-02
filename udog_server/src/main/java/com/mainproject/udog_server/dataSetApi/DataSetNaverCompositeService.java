package com.mainproject.udog_server.dataSetApi;

import com.google.gson.Gson;
import com.mainproject.udog_server.hairshop.HairShop;
import com.mainproject.udog_server.hairshop.HairShopRepository;
import lombok.RequiredArgsConstructor;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Transactional
public class DataSetNaverCompositeService {

    private WebDriver driver;

    Gson gson = new Gson();

    private final HairShopRepository hairShopRepository;
    private String clientId = "knIGE9_3xKvphd9PfdP2";
    private String secret = "EU2f77_204";

    public void callNaverApiKakao(String content, Map<String, String> stringStringMap){
        Map<String, String> naverResultMap = callNaverApi(content);
        HairShop hairShop = null;
        if(stringStringMap != null)
            hairShop = hairShopRepository.findByKakaoApiId(stringStringMap.get("id"));
        if(naverResultMap == null){
            return;
        } else if (naverResultMap != null && hairShop != null) {
            String name = naverResultMap.get("title").replace("</b>","").replace("<b>","");
            System.out.println("-------hairshop naver--------");
//            System.out.println(gson.toJson(hairShop.getHairShopName()));
//            System.out.println(name);
//            System.out.println(naverResultMap.get("address"));
//            System.out.println(naverResultMap.get("link"));
            hairShop.setHairShopName(name);
            hairShop.setHairShopAddress(naverResultMap.get("address"));
            hairShop.setLink(naverResultMap.get("link"));
            hairShopRepository.save(hairShop);
        }
    }

    public Map<String, String> callNaverApi(String content){
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("X-Naver-Client-Id", clientId);
        httpHeaders.set("X-Naver-Client-Secret", secret);
        HttpEntity<String> httpEntity = new HttpEntity<>(httpHeaders);

        URI targetUrl = UriComponentsBuilder
                .fromUriString("https://openapi.naver.com/v1/search/local.json")
                .queryParam("query", content)
                .queryParam("diaplay", 1)
                .queryParam("display", 1)
                .queryParam("sort", "comment")
                .build()
                .encode(StandardCharsets.UTF_8)
                .toUri();
        ResponseEntity<Map> result = restTemplate.exchange(targetUrl, HttpMethod.GET, httpEntity, Map.class);
        System.out.println(result.getBody().get("items"));
        List<Map<String, String>> resultList = (List<Map<String, String>>) result.getBody().get("items");
        if(resultList.isEmpty())
            return null;
        else
            return resultList.get(0);
    }

    private void getImage(String url){
        Path path = Paths.get("/Users/sangyoonlee/Downloads/chromedriver_mac_arm64/chromedriver");
        System.setProperty("webdriver.chrome.driver", path.toString());

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        options.addArguments("--disable-popup-blocking");   // 팝업 안띄움
        options.addArguments("headless");   // 브라우저 안띄움
        options.addArguments("--disable-gpu");  // gpu 비활성화
        options.addArguments("--blink-settings=imagesEnabled=false");   // 이미지 다운 안받음

        driver = new ChromeDriver(options);
        WebDriverWait webDriverWait = new WebDriverWait(driver, Duration.ofSeconds(10));
        String apiImageUrl = null;
        Gson gson = new Gson();

        try{
            driver.get(url);
            webDriverWait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("body")));

            List<WebElement> contents = driver.findElements(By.cssSelector("body"));
            System.out.println(gson.toJson(contents));

        }catch (Exception e){
            System.out.println("no Image");
        }
        driver.quit();
    }
}
