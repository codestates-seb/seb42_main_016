package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.dto.*;
import com.mainproject.udog_server.api.mapper.*;
import com.mainproject.udog_server.member.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

    @PatchMapping("nickname")
    public ResponseEntity patchMemberNickname(Principal principal,
                                      @Valid @RequestBody MemberDto.NicknamePatch memberPatch){
        long loginMemberId = memberService.findLoginMemberByEmail(principal.getName()).getMemberId();
        memberPatch.setMemberId(loginMemberId);

        Member member = mapper.MemberNicknamePatchDtoToMember(memberPatch);
        Member updateMember = memberService.updateMemberNickname(member);

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(updateMember), HttpStatus.OK);
    }

    @PatchMapping("password")
    public ResponseEntity patchMemberPassword(Principal principal,
                                      @Valid @RequestBody MemberDto.PasswordPatch memberPatch){
        long loginMemberId = memberService.findLoginMemberByEmail(principal.getName()).getMemberId();
        memberPatch.setMemberId(loginMemberId);
        memberService.verifyPasswordMatch(loginMemberId, memberPatch.getPrevPassword());

        Member member = mapper.MemberPasswordPatchDtoToMember(memberPatch);
        Member updateMember = memberService.updateMemberPassword(member);

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(updateMember), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMember(Principal principal){
        long loginMemberId = memberService.findLoginMemberByEmail(principal.getName()).getMemberId();

        Member response = memberService.findMember(loginMemberId);
        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMember(Principal principal) {
        long loginMemberId = memberService.findLoginMemberByEmail(principal.getName()).getMemberId();

        memberService.deleteMember(loginMemberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
