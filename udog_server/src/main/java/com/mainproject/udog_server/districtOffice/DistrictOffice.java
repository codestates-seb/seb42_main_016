package com.mainproject.udog_server.districtOffice;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class DistrictOffice {
    @Id
    private int districtOfficeId;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private double latitude;

    @Column
    private double longitude;

    @Column
    private String keyword;

    @Transient
    private double distance;
}
