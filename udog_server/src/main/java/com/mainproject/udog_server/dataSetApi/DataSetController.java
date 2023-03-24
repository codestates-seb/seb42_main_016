package com.mainproject.udog_server.dataSetApi;


import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.*;
import org.springframework.web.util.*;

import java.io.*;
import java.net.*;
import java.nio.charset.*;
import java.util.*;

@RestController
@RequestMapping("/test")
@RequiredArgsConstructor
public class DataSetController {

    private final DataSetCompositeService compositeService;

    @GetMapping
    public ResponseEntity test(@RequestParam int page,
                               @RequestParam int size) throws UnsupportedEncodingException, InterruptedException {
        List<Map<String,String>> result = compositeService.setData(page,size);
        System.out.println(result);


        return ResponseEntity.status(HttpStatus.OK).body(result);





//        CRSFactory crsFactory = new CRSFactory();
//        CoordinateReferenceSystem epsg5174 = crsFactory.createFromParameters("epsg:5174",
//                "+proj=tmerc +lat_0=38 +lon_0=127.0028902777778 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43");
//        CoordinateReferenceSystem epsg4326 = crsFactory.createFromParameters("epsg:4326",
//                "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ");
//
//        CoordinateTransformFactory factory = new CoordinateTransformFactory();
//        CoordinateTransform from5174 = factory.createTransform(epsg5174,epsg4326);
//
//        ProjCoordinate result = new ProjCoordinate();
//        from5174.transform(new ProjCoordinate(184087.009000773,452152.978439315), result);
//
//        System.out.println(result);

//
//        String[] proj42097 = new String[]{
//                "+proj=tmerc",
//                "+lat_0=38",
//                "+lon_0=127",
//                "+k=1",
//                "+x_0=200000",
//                "+y_0=500000",
//                "+ellps=bessel",
//                "+units=m",
//                "+no_defs",
//                "+towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43"
//        };
//
//
//        //5174
//        String[] proj45174 = new String[]{
//                "+proj=tmerc",
//                "+lat_0=38",
//                "+lon_0=127.0028902777778",
//                "+k=1",
//                "+x_0=200000",
//                "+y_0=500000",
//                "+ellps=bessel",
//                "+units=m",
//                "+no_defs",
//                "+towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43"
//        };
//        Projection proj5174 = ProjectionFactory.fromPROJ4Specification(proj45174);
//        Projection proj2097 = ProjectionFactory.fromPROJ4Specification(proj42097);
//        Point2D.Double srcGeo = new Point2D.Double(184087.009000773,452152.978439315);
//
//        Point2D.Double result5174 = proj5174.inverseTransform(srcGeo, new Point2D.Double());
//        System.out.println(5174);
//        System.out.println(result5174);
//
//        Point2D.Double result2097 = proj2097.inverseTransform(srcGeo, new Point2D.Double());
//        System.out.println(2097);
//        System.out.println(result2097);

//        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
