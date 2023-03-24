package com.mainproject.udog_server.districtOffice;

import com.mainproject.udog_server.util.*;
import lombok.*;
import org.springframework.stereotype.*;
import org.springframework.transaction.annotation.*;

import java.util.*;
import java.util.stream.*;

@Service
@Transactional
@RequiredArgsConstructor
public class DistrictOfficeService {
    private static int EARTH_RADIUS = 6371000;

    private final DistrictOfficeRepository officeRepository;

    public List<String> getClosestThreeOfficeDistrict(double userLatitude, double userLongitude){
        List<String> topThreeOffices = new ArrayList<>();
        List<DistrictOffice> offices = officeRepository.findAll();
        offices.stream().forEach(office -> {
            office.setDistance(DistanceCalculator.getDistance(office.getLatitude(),office.getLongitude(), userLatitude,userLongitude));
        });
        return offices
                .stream()
                .sorted(Comparator.comparing(DistrictOffice::getDistance))
                .map(DistrictOffice::getKeyword)
                .limit(3)
                .collect(Collectors.toList());
    }
}
