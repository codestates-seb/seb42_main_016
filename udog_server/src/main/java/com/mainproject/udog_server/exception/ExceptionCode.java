package com.mainproject.udog_server.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "존재하지 않는 회원입니다."),
    MEMBER_EXISTS(409, "존재하는 이메일입니다."),
    CANNOT_CHANGE_(403, "can not change"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_MEMBER_STATUS(400, "Invalid member status"),
    INVALID_MEMBER_PASSWORD(400, "비밀번호가 일치하지 않습니다."),
    INVALID_MEMBER_ID(400, "유효한 회원 아이디가 아닙니다."),
    INVALID_HAIR_SHOP_ID(400, "유효한 hairShopId가 아닙니다."),
    ALREADY_EXISTING_REVIEW(409, "이미 존재하는 리뷰입니다."),
    REVIEW_NOT_FOUND(404, "존재하지 않는 리뷰입니다."),
    REVIEW_DATE_IS_BEFORE(400, "해당 날짜가 지나지 않았습니다."),
    REVIEW_TIME_IS_BEFORE(400, "해당 시간이 지나지 않았습니다."),
    INVALID_ACCESS_TOKEN(400, "Invalid access token"),
    ACCESS_TOKEN_TIME_OUT(401, "Access Token Time out"),
    INVALID_REFRESH_TOKEN(400, "Invalid refresh token"),
    REFRASH_TOKEN_TIME_OUT(401, "Refresh Token Time out"),
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

