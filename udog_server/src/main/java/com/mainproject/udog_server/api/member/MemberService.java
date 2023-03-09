package com.mainproject.udog_server.api.member;

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

    public Member updateMemberNickname(Member patchMember){
        Member foundMember = findVerifiedMember(patchMember.getMemberId());
        Optional.ofNullable(patchMember.getNickname())
                .ifPresent(nickname -> foundMember.setNickname(nickname));
        Member updateMember = memberRepository.save(foundMember);
        return updateMember;
    }

    public Member updateMemberPassword(Member patchMember){
        Member foundMember = findVerifiedMember(patchMember.getMemberId());

        Optional.ofNullable(patchMember.getPassword())
                .ifPresent(password -> foundMember.setPassword(password));

        Member updateMember = memberRepository.save(foundMember);
        return updateMember;
    }


    @Transactional(readOnly = true)
    public Member findMember(long memberId){
        return findVerifiedMember(memberId);
    }

    public void deleteMember(long memberId){
        Member foundMember = findVerifiedMember(memberId);
        foundMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);
        memberRepository.save(foundMember);
//        memberRepository.deleteById(memberId);
    }

    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        //Todo : exception
        Member foundMember = optionalMember.orElseThrow(() -> null);
        verifyActiveMember(foundMember);
        return foundMember;
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

    public void verifyPasswordMatch(long memberId, String prevPassword){
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        //Todo : exeption
        Member foundMember = optionalMember.orElseThrow(() -> null);
        String encryptedPassword = passwordEncoder.encode(prevPassword);
        //Todo : exeption
        if(!foundMember.getPassword().equals(encryptedPassword))
            throw null;
    }

    private void verifyActiveMember(Member member){
        //Todo : exeption
        if(member.getMemberStatus().equals(Member.MemberStatus.MEMBER_QUIT))
            throw null;
    }
}