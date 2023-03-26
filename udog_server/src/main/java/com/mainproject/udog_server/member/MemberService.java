package com.mainproject.udog_server.member;

import com.mainproject.udog_server.auth.utils.CustomAuthorityUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    private final PasswordEncoder passwordEncoder;

    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository,
                         PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils){
        this.authorityUtils = authorityUtils;
        this.passwordEncoder = passwordEncoder;
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member){
        verifyExistsEmail(member);

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member createdMember = memberRepository.save(member);
        return createdMember;
    }

    public Member updateMemberNickname(Member patchMember, String email){
        Member foundMember = findLoginMemberByEmail(email);

        Optional.ofNullable(patchMember.getNickname())
                .ifPresent(nickname -> foundMember.setNickname(nickname));
        Member updateMember = memberRepository.save(foundMember);
        return updateMember;
    }

    public Member updateMemberPassword(String changingPassword, String prevPassword, String email){
        Member foundMember = findLoginMemberByEmail(email);
        verifyPasswordMatch(foundMember.getPassword(), prevPassword);
        foundMember.setPassword(passwordEncoder.encode(changingPassword));

        Member updateMember = memberRepository.save(foundMember);
        return updateMember;
    }



    public void deleteMember(Member foundMember){
        foundMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);
        memberRepository.save(foundMember);
//        memberRepository.deleteById(memberId);
    }
    public Member findLoginMemberByEmail(String email){
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        //Todo : exeption
        Member member = optionalMember.orElseThrow(() -> null);
        verifyActiveMember(member);
        return member;
    }

    private void verifyExistsEmail(Member member) {
        Optional<Member> optionalMember = memberRepository.findByEmail(member.getEmail());
        //Todo : exeption
        optionalMember.ifPresent(foundMember -> {
            if(foundMember.getMemberStatus().equals(Member.MemberStatus.MEMBER_ACTIVE))
                throw null;
            else if (foundMember.getMemberStatus().equals(Member.MemberStatus.MEMBER_QUIT)) {
                member.setMemberId(foundMember.getMemberId());
            }
        });
    }

    public void verifyPasswordMatch(String userPassword, String prevPassword){
        //Todo : exeption
        if(!passwordEncoder.matches(prevPassword, userPassword))
            throw null;
    }

    private void verifyActiveMember(Member member){
        //Todo : exeption
        if(member.getMemberStatus().equals(Member.MemberStatus.MEMBER_QUIT))
            throw null;
    }

//    @Transactional(readOnly = true)
//    public Member findMember(long memberId){
//        return findVerifiedMember(memberId);
//    }
//
//    public Member findVerifiedMember(long memberId){
//        Optional<Member> optionalMember = memberRepository.findById(memberId);
//        //Todo : exception
//        Member foundMember = optionalMember.orElseThrow(() -> null);
//        verifyActiveMember(foundMember);
//        return foundMember;
//    }
}
