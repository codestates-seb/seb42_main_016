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

    public Member updateMemberNickname(Member member, String email){
        Member foundMember = memberService.findLoginMemberByEmail(email);
        member.setMemberId(foundMember.getMemberId());
        return memberService.updateMemberNickname(member);
    }

    public Member updateMemberPassword(Member member, String prevPassword, String email){
        Member foundMember = memberService.findLoginMemberByEmail(email);
        memberService.verifyPasswordMatch(foundMember, prevPassword);
        member.setMemberId(foundMember.getMemberId());
        return memberService.updateMemberPassword(member);
    }

    public Member findMember(String email){
        return memberService.findLoginMemberByEmail(email);
    }

    public void deleteMember(String email){
        Member foundMember = memberService.findLoginMemberByEmail(email);
        memberService.deleteMember(foundMember);
    }
}
