import Header from '../components/Header';
import Footer from '../components/Footer';
import * as S from '../components/style/AboutStyle';
import TopButton from '../components/stylebook/TopButton';
import { useEffect, useRef } from 'react';
import useScrollTop from '../hooks/useScrollTop';

function About() {
  const elementRef = useRef([]);

  useScrollTop();

  const handleScroll = ([entry]) => {
    entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.25,
    });

    elementRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => observer?.disconnect();
  }, []);

  return (
    <>
      <Header />
      <S.AboutContainer>
        <S.ImgContainer>
          <img src="/assets/Top.png" alt="top" />
        </S.ImgContainer>
        <S.ContentContainer>
          <S.AboutSection ref={(el) => (elementRef.current[0] = el)}>
            <S.AboutImg>
              <img src="/assets/Style.png" alt="style" />
            </S.AboutImg>
            <S.AboutContent className="left">
              <h2>강아지에게 어울리는 스타일을 찾아보세요</h2>
              <p>
                가위 아이콘을 누르면,
                <br />
                해당 스타일의 미용실로 바로 이동합니다.
              </p>
            </S.AboutContent>
          </S.AboutSection>
          <S.AboutSection ref={(el) => (elementRef.current[1] = el)}>
            <S.AboutContent className="right">
              <h2>내 주변의 미용실을 찾아보세요</h2>
              <p>
                위치 정보 제공 동의를 받으면,
                <br />내 주변의 애견 미용실을 찾아드립니다.
                <br />
                <span>(현재 서비스 가능 업체 : 서울시 기준 1,500여 개)</span>
              </p>
            </S.AboutContent>
            <S.AboutImg>
              <img src="/assets/Shop.png" alt="shop" />
            </S.AboutImg>
          </S.AboutSection>
          <S.AboutSection ref={(el) => (elementRef.current[2] = el)}>
            <S.AboutImg>
              <img src="/assets/Book.png" alt="book" />
            </S.AboutImg>
            <S.AboutContent className="left">
              <h2>미용 예약을 쉽고 빠르게 할 수 있어요</h2>
              <p>
                번거로운 절차 없이 날짜와 시간,
                <br />
                미용 옵션과 강아지만 선택하면 예약이 완료됩니다.
              </p>
            </S.AboutContent>
          </S.AboutSection>
          <S.AboutSection ref={(el) => (elementRef.current[3] = el)}>
            <S.AboutContent className="right">
              <h2>스타일과 미용실을 추천해드려요</h2>
              <p>
                마음에 드는 스타일과 미용실에 좋아요 버튼을 눌러주세요.
                <br />
                좋아요 개수를 기준으로 추천해드립니다.
              </p>
            </S.AboutContent>
            <S.AboutImg>
              <img src="/assets/Style.png" alt="best" />
            </S.AboutImg>
          </S.AboutSection>
        </S.ContentContainer>
      </S.AboutContainer>
      <TopButton />
      <Footer />
    </>
  );
}

export default About;
