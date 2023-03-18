package com.mainproject.udog_server.auth.config;

import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.web.configuration.*;

@Configuration
@Profile("test")
public class TestSecurityConfig {

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring()
                .antMatchers("/**");
    }
}
