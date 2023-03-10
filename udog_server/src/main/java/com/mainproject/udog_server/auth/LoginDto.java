package com.mainproject.udog_server.auth;

import lombok.Getter;

@Getter
public class LoginDto {
    private String email;
    private String password;
}