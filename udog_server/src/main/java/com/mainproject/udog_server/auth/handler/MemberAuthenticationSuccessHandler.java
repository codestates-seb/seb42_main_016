package com.mainproject.udog_server.auth.handler;

import com.google.gson.Gson;
import com.mainproject.udog_server.api.member.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    // (2)
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
//        Gson gson = new Gson();
//        response.setContentType("application/json");
//        response.setCharacterEncoding("utf-8");
//        MemberId memberId = new MemberId((Member) authentication.getPrincipal());
//
//        response.getWriter().write(gson.toJson(memberId));
        log.info("# Authenticated successfully!");
    }

    private class MemberId{
        long memberId;
        public MemberId(Member member){
            this.memberId = member.getMemberId();
        }
    }
}
