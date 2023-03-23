package com.mainproject.udog_server.dataSetApi;

import com.mainproject.udog_server.hairshop.*;
import lombok.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;
import org.springframework.web.client.*;
import org.springframework.web.util.*;

import java.io.*;
import java.net.*;
import java.nio.charset.*;
import java.util.*;
import java.util.concurrent.atomic.*;

@Service
@RequiredArgsConstructor
@Transactional
public class DataSetCompositeService {

    private WebDriver driver;
    private final DataSetService dataSetService;

    private final HairShopService hairShopService;

    private static final String key = "81e93c6683e50ccf23d58edd5eb88d63";
    private static final String localUrl = "https://dapi.kakao.com/v2/local/search/keyword.json";

    public List<Map<String,String>> setData(int page, int size) throws InterruptedException {
        List<String> querys = dataSetService.getList(size, page);
        System.out.println("@".repeat(80));
        System.out.println(querys.get(0));
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "KakaoAK "+key);
        HttpEntity<String> httpEntity = new HttpEntity<>(httpHeaders);

        AtomicReference<List<Map<String, String>>> resultBody =
                new AtomicReference<>(new ArrayList<Map<String, String>>());

        querys.forEach(content -> {
        URI targetUrl = UriComponentsBuilder
                .fromUriString(localUrl)
                .queryParam("query", content)
                .build()
                .encode(StandardCharsets.UTF_8)
                .toUri();
            ResponseEntity<Map> result = restTemplate.exchange(targetUrl, HttpMethod.GET, httpEntity, Map.class);
            resultBody.set((List<Map<String, String>>) result.getBody().get("documents"));
            System.out.println("@".repeat(80));
        System.out.println(resultBody);
        if(!resultBody.get().isEmpty()){
            HairShop hairShop = new HairShop();
            hairShop.setHairShopAddress(resultBody.get().get(0).get("address_name"));
            hairShop.setHairShopPhone(resultBody.get().get(0).get("phone"));
            hairShop.setHairShopName(resultBody.get().get(0).get("place_name"));
            hairShop.setKakaoApiId(resultBody.get().get(0).get("id"));
            hairShop.setLongitude(resultBody.get().get(0).get("x"));
            hairShop.setLatitude(resultBody.get().get(0).get("y"));
            hairShopService.createHairShop(hairShop);
        }
        });
        return resultBody.get();
    }

    private void getImage(String url){
        System.setProperty("webdriver.chrome.driver", "/Users/sangyoonlee/Downloads/chromedriver_mac_arm64/chromedriver.exe");
        driver = new ChromeDriver();
        List<String> list = new ArrayList<>();
        try {
            driver.get(url);
            Thread.sleep(1000);

            List<WebElement> elements = driver.findElements(By.className("details_placeinfo"));
            for(WebElement element : elements)
                System.out.println(element);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
