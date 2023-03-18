package com.mainproject.udog_server.api.mapper;

import com.mainproject.udog_server.api.dto.*;
import com.mainproject.udog_server.member.*;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member MemberPostToMember(MemberDto.Post memberPost);

    Member MemberNicknamePatchDtoToMember(MemberDto.NicknamePatch nicknamePatch);

    Member MemberPasswordPatchDtoToMember(MemberDto.PasswordPatch passwordPatch);

    MemberDto.Response MemberToMemberResponseDto(Member member);
}
