package com.mainproject.udog_server.districtOffice;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class DistrictOffice {
    @Id
    private int districtOfficeId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;

    @Column(nullable = false)
    private String keyword;

    @Transient
    private double distance;
}
