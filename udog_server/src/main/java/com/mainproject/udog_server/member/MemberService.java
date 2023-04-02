package com.mainproject.udog_server.member;

import com.mainproject.udog_server.auth.utils.CustomAuthorityUtils;
import com.mainproject.udog_server.exception.BusinessLogicException;
import com.mainproject.udog_server.exception.ExceptionCode;
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
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        verifyActiveMember(member);
        return member;
    }

    private void verifyExistsEmail(Member member) {
        Optional<Member> optionalMember = memberRepository.findByEmail(member.getEmail());
        //Todo : exeption
        optionalMember.ifPresent(foundMember -> {
            if(foundMember.getMemberStatus().equals(Member.MemberStatus.MEMBER_ACTIVE))
                throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
            else if (foundMember.getMemberStatus().equals(Member.MemberStatus.MEMBER_QUIT)) {
                member.setMemberId(foundMember.getMemberId());
            }
        });
    }

    public void verifyPasswordMatch(String userPassword, String prevPassword){
        //Todo : exeption
        if(!passwordEncoder.matches(prevPassword, userPassword))
            throw new BusinessLogicException(ExceptionCode.INVALID_MEMBER_PASSWORD);
    }

    private void verifyActiveMember(Member member){
        //Todo : exeption
        if(member.getMemberStatus().equals(Member.MemberStatus.MEMBER_QUIT))
            throw new BusinessLogicException(ExceptionCode.INVALID_MEMBER_STATUS);
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
