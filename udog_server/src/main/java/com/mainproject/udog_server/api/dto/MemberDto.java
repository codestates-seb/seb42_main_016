package com.mainproject.udog_server.api.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;
import java.time.LocalDateTime;


public class MemberDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        @NotBlank
        @Email
        private String email;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@!%*#?&])[A-Za-z\\d$@!%*#?&]{8,}$"
                ,message = "8문자 이상이어야 하며 영어, 숫자, 특수문자(₩~!@#$%^&*()_+,.<>/?:')를 포함해야합니다")
        private String password;

        @Pattern(regexp = "^[A-Za-z0-9가-힣]{2,10}$", message = "한, 영, 숫자를 조합한 2글자 이상 10글자 이하로 작성해주세요")
        private String nickname;
    }

    @Setter
    @Getter
    public static class NicknamePatch{
        //Todo : 공백 체크, 한영숫자만 가능한지
        @Pattern(regexp = "^[A-Za-z0-9가-힣]{2,10}$", message = "한, 영, 숫자를 조합한 두글자 이상 10글자 이하로 작성해주세요")
        private String nickname;
    }

    @Setter
    @Getter
    public static class PasswordPatch{
        @NotBlank
        private String prevPassword;

        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@!%*#?&])[A-Za-z\\d$@!%*#?&]{8,}$"
                ,message = "8문자 이상이어야 하며 영어, 숫자, 특수문자(₩~!@#$%^&*()_+,.<>/?:')를 포함해야합니다")
        private String password;
    }

    @Setter
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{
        private long memberId;
        private String email;
        private String nickname;
        private LocalDateTime signUpAt;
    }
}
