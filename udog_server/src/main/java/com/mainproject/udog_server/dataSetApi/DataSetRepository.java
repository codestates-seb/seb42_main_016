package com.mainproject.udog_server.dataSetApi;

import com.mainproject.udog_server.review.*;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.repository.*;

public interface DataSetRepository extends JpaRepository<ExcelList,Integer> {
    Page<ExcelList> findAll(Pageable pageable);
}
