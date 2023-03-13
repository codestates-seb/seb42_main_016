package com.mainproject.udog_server.api.member;

import com.mainproject.udog_server.auth.filter.JwtVerificationFilter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.security.Principal;

@CrossOrigin
@RestController
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberMapper mapper, MemberService memberService){
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post memberPost){
        Member member = mapper.MemberPostToMember(memberPost);

        Member createdMember = memberService.createMember(member);

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(createdMember), HttpStatus.CREATED);
    }

    @PatchMapping("nickname/{member-id}")
    public ResponseEntity patchMemberNickname(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.NicknamePatch memberPatch){
        memberPatch.setMemberId(memberId);

        Member member = mapper.MemberNicknamePatchDtoToMember(memberPatch);
        Member updateMember = memberService.updateMemberNickname(member);

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(updateMember), HttpStatus.OK);
    }

    @PatchMapping("password/{member-id}")
    public ResponseEntity patchMemberPassword(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.PasswordPatch memberPatch){
        memberPatch.setMemberId(memberId);
        memberService.verifyPasswordMatch(memberId, memberPatch.getPrevPassword());

        Member member = mapper.MemberPasswordPatchDtoToMember(memberPatch);
        Member updateMember = memberService.updateMemberPassword(member);

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(updateMember), HttpStatus.OK);
    }

    @GetMapping("{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member response = memberService.findMember(memberId);
        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
