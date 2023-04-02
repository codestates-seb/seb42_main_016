package com.mainproject.udog_server.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "존재하지 않는 회원입니다."),
    MEMBER_EXISTS(409, "존재하는 이메일입니다."),
    CANNOT_CHANGE_(403, "can not change"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_MEMBER_STATUS(400, "Invalid member status"),
    INVALID_MEMBER_PASSWORD(400, "비밀번호가 일치하지 않습니다."),
    INVALID_ACCESS_TOKEN(400, "Invalid access token"),
    INVALID_REFRESH_TOKEN(400, "Invalid refresh token"),
    COULD_NOT_REFRESH_TOKEN(401, "Refresh Token not found.");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

