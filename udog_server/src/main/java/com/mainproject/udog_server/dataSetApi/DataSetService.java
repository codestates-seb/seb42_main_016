package com.mainproject.udog_server.dataSetApi;

import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
@RequiredArgsConstructor
public class DataSetService {
    private final DataSetRepository repo;

    public List<String> getList(int size, int page){
        List<String> queryText = new ArrayList<>();
            List<ExcelList> dbData = repo.findAll(PageRequest.of(page - 1, size)).getContent();
            dbData.stream().forEach(data -> queryText.add(data.getAddr()));
        return queryText;
    }
}
