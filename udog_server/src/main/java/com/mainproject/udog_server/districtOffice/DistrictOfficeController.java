package com.mainproject.udog_server.districtOffice;

import lombok.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.util.*;

@RestController
@RequestMapping("/dist")
@RequiredArgsConstructor
public class DistrictOfficeController {
    private final DistrictOfficeService service;

    @GetMapping
    public ResponseEntity getTop3(@RequestParam double latitude,
                                  @RequestParam double longitude){
        System.out.println(latitude+" "+longitude);
        List<String> result = service.getClosestThreeOfficeDistrict(latitude, longitude);
        for (String s : result) {
            System.out.println(s);
        }
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
