package com.mainproject.udog_server.auth.handler;

import com.google.gson.Gson;
import com.mainproject.udog_server.errerResponse.ErrorResponse;
import com.mainproject.udog_server.exception.ExceptionCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {
        log.error("# Authentication failed: {}", exception.getMessage());

        String errorMessage = exception.getMessage();
        if(exception.getMessage().equals("자격 증명에 실패하였습니다."))
            errorMessage = "비밀번호가 일치하지 않습니다.";
        else if (exception.getMessage().equals(ExceptionCode.MEMBER_NOT_FOUND.getMessage())) {
            errorMessage = "이메일 혹은 비밀번호를 확인해주세요";
        }

        sendErrorResponse(response, errorMessage);
    }

    private void sendErrorResponse(HttpServletResponse response, String errorMessage) throws IOException {
        Gson gson = new Gson();
        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED, errorMessage);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }
}