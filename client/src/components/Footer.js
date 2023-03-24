import * as S from './style/FooterStyle';
import { RxNotionLogo } from 'react-icons/rx';
import { FiFigma } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { ABOUT, DB, FIGMA, GITHUB, HOME, NOTION, PRE } from '../modules/routes';

function Footer() {
  return (
    <S.Footer>
      <S.FooterContent>
        <S.NavLinkWrapper>
          <S.NavLinkLogo to={HOME}>
            <img src="/assets/Logo.png" alt="logo" />
          </S.NavLinkLogo>
          <S.NavService activeclassname="active" to={ABOUT}>
            서비스 소개
          </S.NavService>
          <S.NavService activeclassname="active" to={PRE}>
            비즈니스 계정 등록
          </S.NavService>
        </S.NavLinkWrapper>
        <S.SnsWrapper>
          <S.SnsLink to={GITHUB} target="_blank">
            <AiFillGithub />
          </S.SnsLink>
          <S.SnsLink to={NOTION} target="_blank">
            <RxNotionLogo />
          </S.SnsLink>
          <S.SnsLink to={FIGMA} target="_blank">
            <FiFigma />
          </S.SnsLink>
          <S.SnsLink to={DB} target="_blank">
            <FaProjectDiagram />
          </S.SnsLink>
        </S.SnsWrapper>
      </S.FooterContent>
      <S.FooterDetail>
        <S.FooterText>
          우리멍군 | BE 이상윤, 김창하, 엄영준 | FE 신수현, 조정인, 이현건 <br />
        </S.FooterText>
      </S.FooterDetail>
    </S.Footer>
  );
}

export default Footer;
