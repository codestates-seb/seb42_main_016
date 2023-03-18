package com.mainproject.udog_server.config;

import com.google.gson.*;
import org.springframework.context.annotation.*;

import java.time.*;

@Configuration
public class GsonConfig {
    @Bean
    public Gson gson() {
        return new GsonBuilder()
                .registerTypeAdapter(LocalDate.class, new LocalDateAdaptor())
                .create();
    }
}
