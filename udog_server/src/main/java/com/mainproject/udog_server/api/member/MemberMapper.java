package com.mainproject.udog_server.api.member;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member MemberPostToMember(MemberDto.Post memberPost);

    Member MemberNicknamePatchDtoToMember(MemberDto.NicknamePatch nicknamePatch);

    Member MemberPasswordPatchDtoToMember(MemberDto.PasswordPatch passwordPatch);

    MemberDto.Response MemberToMemberResponseDto(Member member);
}
