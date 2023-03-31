# UDOG
> 위치 기반 애견 미용실 예약 서비스 

<p align="center">
  <br>
  <img src="./images/common/logo-sample.jpeg">
  <br>
</p>

## 프로젝트 소개

<p align="justify">
프로젝트 개요/동기
</p>

<p align="center">
GIF Images
</p>

<br>

## 기술 스택


<br>

## 구현 기능

### 미용실
- 서울시 내 애견 미용실 가져오기
  - 위치 기반
  - 거리순 List
- 무한 스크롤을 통해 List 출력
- 크롤링과 API를 통한 미용실 정보 추합
  - API
    - NAVER
    - 공공 데이터
    - KAKAO
- 미용실 상세 페이지
  - 탭에 홈, 예약, 리뷰으로 구성
  - 홈 탭에서 미용실 상세정보를 포함한 좋아요, 리뷰 수가 있음
  
### 예약
- 가능한 날짜 선택 ➡️ 가능한 시간 선택 ➡️ 미용 옵션 선택 ➡️ 등록한 강아지 선택
  - 이미 지난 날짜는 선택이 불가능, 오늘 기준 한달까지 선택이 가능
  - 이미 예약이 된 시간은 선택이 불가능, 현재 시간 기준으로 지난 시간 선택 불가능
  - 원하는 미용 옵션을 선택 가능
  - 등록된 강아지가 여러 마리면 선택 가능
- 마이페이지 예약 관리 기능
  - 특정 회원의 모든 예약 내역이 나타남
  - 예약 당일 전까지 예약 취소 가능
  - 날짜가 지난 예약내역은 `예약취소` 버튼 비활성화, `방문완료` 버튼으로 변경

### 리뷰
- 방문 완료된 예약을 대상으로 리뷰 작성 가능
  - 마이페이지 - 리뷰관리 - 작성 가능한 리뷰에서 `리뷰 작성` 버튼 활성화
- 리뷰 수정 및 삭제 가능
  - 작성한 리뷰 탭에서 수정 및 삭제
  
### 스타일
- 작성된 모든 미용실 리뷰 사진들 모아보기
  - 사진에 대한 좋아요
  - 사진에 대한 라우팅 기능
    - 해당 스타일(리뷰 사진)의 미용실 상세페이지로 이동
    
### 좋아요
- 스타일북과 미용실 상세페이지에서 활성화
- BEST 스타일 및 미용실
  - 지난 24시간 좋아요수 기준
  - BEST 스타일 : TOP 3 스타일 출력
  - BEST 미용실 : TOP 10 미용실 출력

<br>

## 배운 점 & 아쉬운 점
- 배운 점
  - 상윤 : 팀으로서 하나의 유기적인 프로그램을 구현하기 위해 얼마나 체계적으로 움직여야 하는지, 여러 기술과 로직을 경험하고 구현 하면서 정답은 아니지만 더 이 코드의 목적에 맞게 구현해야한다는 것을 깨닫게 되었다.
  - 수현 : 다양한 라이브러리를 사용해 볼 수 있었고, 특히 리덕스 툴킷을 처음 사용해봤는데 상태관리 라이브러리의 중요성을 깨닫게 되었다.
  - 창하 : AWS를 활용하고 그 중에서도 특히 S3 Bucket을 활용하여 Image Upload 기술을 경험해본 점과, Token 관련 로직을 고민하면서 Spring Security에 대해 좀 더 깊게 이해할 수 있게 되었다.
  - 정인 : redux toolkit을  사용해 볼 수 있어서 좋았다. 
  - 영준 : 코드의 전반적인 흐름을 읽는게 조금은 더 익숙해진 것 같다.
- 아쉬운 점
  - 상윤 : 기획부터 개발까지 4주라는 시간은 굉장히 짧아 기술들과 로직들에 대한 분석과 고찰이 부족해 아쉬워 이후에 개선할 예정이다.
  - 수현 : 조금 더 깔끔하고 효율적인 코드를 작성하고 싶었는데 리팩토링 할 수 있는 여유가 없어서 아쉬웠다.
  - 창하 : 기존 팀원들과 꿈꿨던 기능들을 다 구현해보지 못해서 아쉬웠다.
  - 정인 : 생각보다 스스로 작업 속도가 느려서 아쉬웠다.
  - 영준 : 테스트코드를 완성하지 못해서 아쉬웠고 조금 더 advanced한 기능에 도전하지 못해서 아쉬웠다.
<p align="justify">

</p>

<br>

## 라이센스

MIT License

Copyright (c) 2023 SangYoon Lee, SooHyun Shin, ChangHa Kim, JeongIn Cho, YoungJun Eom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
