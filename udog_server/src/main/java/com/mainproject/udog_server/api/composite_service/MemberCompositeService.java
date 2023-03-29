package com.mainproject.udog_server.api.composite_service;

import com.mainproject.udog_server.member.*;
import lombok.*;
import org.springframework.stereotype.*;

@RequiredArgsConstructor
@Service
public class MemberCompositeService {
    private final MemberService memberService;

    public Member createMember(Member member){
        return memberService.createMember(member);
    }

    public Member updateMemberNickname(Member patchMember, String email){
        return memberService.updateMemberNickname(patchMember, email);
    }

    public Member updateMemberPassword(String changingPassword, String prevPassword, String email){
        return memberService.updateMemberPassword(changingPassword, prevPassword, email);
    }

    public Member findMember(String email){
        return memberService.findLoginMemberByEmail(email);
    }

    public void deleteMember(String email){
        Member foundMember = memberService.findLoginMemberByEmail(email);
        memberService.deleteMember(foundMember);
    }
}
