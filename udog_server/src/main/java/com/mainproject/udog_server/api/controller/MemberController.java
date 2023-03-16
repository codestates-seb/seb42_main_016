package com.mainproject.udog_server.api.controller;

import com.mainproject.udog_server.api.composite_service.*;
import com.mainproject.udog_server.api.dto.*;
import com.mainproject.udog_server.api.mapper.*;
import com.mainproject.udog_server.member.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.*;
import java.security.Principal;

@CrossOrigin
@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@Validated
@Slf4j
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/members";
    private final MemberCompositeService compositeService;
    private final MemberMapper mapper;

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post memberPost){
        Member member = mapper.MemberPostToMember(memberPost);

        Member createdMember = compositeService.createMember(member);
        return ResponseEntity.status(HttpStatus.CREATED).location(URI.create(MEMBER_DEFAULT_URL)).build();
    }

    @PatchMapping("nickname")
    public ResponseEntity patchMemberNickname(Principal principal,
                                      @Valid @RequestBody MemberDto.NicknamePatch memberPatch){
        Member member = mapper.MemberNicknamePatchDtoToMember(memberPatch);
        Member updateMember = compositeService.updateMemberNickname(member, principal.getName());

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(updateMember), HttpStatus.OK);
    }

    @PatchMapping("password")
    public ResponseEntity patchMemberPassword(Principal principal,
                                      @Valid @RequestBody MemberDto.PasswordPatch memberPatch){
        Member member = mapper.MemberPasswordPatchDtoToMember(memberPatch);
        Member updateMember = compositeService.updateMemberPassword(member, memberPatch.getPrevPassword(), principal.getName());

        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(updateMember), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMember(Principal principal){
        Member response = compositeService.findMember(principal.getName());
        return new ResponseEntity<>(mapper.MemberToMemberResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMember(Principal principal) {
        compositeService.deleteMember(principal.getName());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
