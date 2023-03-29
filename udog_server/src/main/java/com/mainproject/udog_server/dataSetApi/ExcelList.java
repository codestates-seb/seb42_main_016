package com.mainproject.udog_server.dataSetApi;

import lombok.*;

import javax.persistence.*;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class ExcelList {
    @Id
    private Integer id;

    @Column
    private String addr;
}