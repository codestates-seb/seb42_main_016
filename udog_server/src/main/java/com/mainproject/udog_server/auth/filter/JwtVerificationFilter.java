package com.mainproject.udog_server.auth.filter;

import com.mainproject.udog_server.auth.utils.CustomAuthorityUtils;
import com.mainproject.udog_server.auth.utils.JwtTokenizer;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils customAuthorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils customAuthorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.customAuthorityUtils = customAuthorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println(request);

        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                // Access Token 검증 및 인증
                Map<String, Object> claims = verifyJws(request);
                setAuthenticationToContext(claims);
            } catch (ExpiredJwtException e) {
                // Access Token이 만료되었다면 Refresh Token을 이용하여 새로운 Access Token 발급
                String refreshToken = request.getHeader("Refresh");
                if (refreshToken != null) {
                    try {

                        // Refresh Token 검증 및 새로운 Access Token 발급
                        Map<String, Object> refreshClaims = verifyJws(refreshToken);
                        String subject = (String) refreshClaims.get("sub");
                        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
                        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
                        Map<String, Object> newClaims = new HashMap<>();
                        newClaims.put("email", subject);
                        newClaims.put("roles", refreshClaims.get("roles"));
                        String newAccessToken = jwtTokenizer.generateAccessToken(newClaims, subject, expiration, base64EncodedSecretKey);

                        // 새로운 Access Token을 Authorization 헤더에 추가
                        response.setHeader("Authorization", "Bearer " + newAccessToken);

                        // 새로운 Access Token으로 인증 설정
//                        setAuthenticationToContext(newClaims);
                    } catch (Exception ex) {
                        // Refresh Token이 만료되었거나 검증에 실패한 경우
                        logger.error("Could not refresh token", ex);
                    }
                } else {
                    // Refresh Token이 없는 경우
                    logger.error("Could not refresh token: Refresh token not found.");
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Could not refresh token: Refresh token not found.");
                }
            } catch (Exception e) {
                // JWT 검증 실패
                logger.error("JWT verification failed", e);
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Could not refresh token: Access token not found.");
            }
        }
            // Access Token이 만료되지 않은 경우
            filterChain.doFilter(request, response);
        }

/* verifyJws 사용 안한 코드: 에러 뜨는 중..
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String accessToken = authorizationHeader.substring(7);
            String refreshToken = request.getHeader("Refresh");

            try {
                // Access Token 검증
                Jws<Claims> claims = jwtTokenizer.getClaims(accessToken, jwtTokenizer.getSecretKey());
                String subject = claims.getBody().getSubject();
                List<String> authorities = (List<String>) claims.getBody().get("roles");
                List<GrantedAuthority> grantedAuthorities = customAuthorityUtils.createAuthorities(authorities);

                if (subject != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                            new UsernamePasswordAuthenticationToken(subject, null, grantedAuthorities);
                    SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
                }

            } catch (ExpiredJwtException e) {
                // Access Token이 만료되었다면 Refresh Token을 이용하여 새로운 Access Token 발급
                if (refreshToken != null) {
                    try {
                        Jws<Claims> refreshClaims = jwtTokenizer.getClaims(refreshToken, jwtTokenizer.getSecretKey());
                        String subject = refreshClaims.getBody().getSubject();

                        if (subject != null) {
                            // 새로운 Access Token 발급
                            Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
                            String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
                            Map<String, Object> newClaims = new HashMap<>();
                            newClaims.put("email", subject);
                            newClaims.put("roles", refreshClaims.getBody().get("roles"));

                            String newAccessToken = jwtTokenizer.generateAccessToken(newClaims, subject, expiration, base64EncodedSecretKey);

                            // 새로운 Access Token을 Authorization 헤더에 추가
                            response.setHeader("Authorization", "Bearer " + newAccessToken);
                        }
                    } catch (Exception ex) {
                        // Refresh Token이 만료되었거나 검증에 실패한 경우
                        logger.error("Could not refresh token", ex);
                    }
                } else {
                    // Refresh Token이 없는 경우
                    logger.error("Could not refresh token: Refresh token not found.");
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Could not refresh token: Refresh token not found.");
                }
            } catch (Exception e) {
                // JWT 검증 실패
                logger.error("JWT verification failed", e);
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Could not refresh token: Access token not found");
            }
            // Access Token이 만료되지 않은 경우
            filterChain.doFilter(request, response);
        }
        else {
            // Access Token이 없는 경우
            logger.error("Could not refresh token: Access token not found.");
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Could not refresh token: Access token not found.");
        }
    }
 */

/* 기존 코드
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }

        filterChain.doFilter(request, response);
    }
*/

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");

        return authorization == null || !authorization.startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    private Map<String, Object> verifyJws(String refreshToken) {
        String jws = refreshToken.replace("Bearer ", "");
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        String email = (String) claims.get("email");

        List<GrantedAuthority> authorities = customAuthorityUtils.createAuthorities((List)claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(email, null, authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
