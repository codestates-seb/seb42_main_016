package com.mainproject.udog_server.api.member;

import com.mainproject.udog_server.api.member.MemberDto.NicknamePatch;
import com.mainproject.udog_server.api.member.MemberDto.PasswordPatch;
import com.mainproject.udog_server.api.member.MemberDto.Post;
import com.mainproject.udog_server.api.member.MemberDto.Response;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-09T09:59:38+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member MemberPostToMember(Post memberPost) {
        if ( memberPost == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( memberPost.getEmail() );
        member.setPassword( memberPost.getPassword() );
        member.setNickname( memberPost.getNickname() );

        return member;
    }

    @Override
    public Member MemberNicknamePatchDtoToMember(NicknamePatch nicknamePatch) {
        if ( nicknamePatch == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( nicknamePatch.getMemberId() );
        member.setNickname( nicknamePatch.getNickname() );

        return member;
    }

    @Override
    public Member MemberPasswordPatchDtoToMember(PasswordPatch passwordPatch) {
        if ( passwordPatch == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( passwordPatch.getMemberId() );
        member.setPassword( passwordPatch.getPassword() );

        return member;
    }

    @Override
    public Response MemberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        Response response = new Response();

        response.setMemberId( member.getMemberId() );
        response.setEmail( member.getEmail() );
        response.setNickname( member.getNickname() );
        response.setCreatedAt( member.getCreatedAt() );
        response.setModifiedAt( member.getModifiedAt() );

        return response;
    }
}
