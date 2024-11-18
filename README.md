# 👨‍💻코드그램(CodeGram)👩‍💻
<img src="https://i.ibb.co/tPTmcRt/2024-10-21-224957.png" alt="코드그램 메인배경" />

<br />

- **배포 URL** : https://codegram-sns.vercel.app
- **테스트 Email** : codegram@codegram.com
- **테스트 Password** : codegram
  
<br />
  
## 시연 영상
[코드그램 시연 영상 보기](https://youtu.be/9CL5SN3xBEg)

<br />

## 목차
- [1. 프로젝트 개요](#1-프로젝트-개요)
- [2. 프로젝트 팀 구성 및 역할](#2-프로젝트-팀-구성-및-역할)
- [3. 프로젝트 수행 절차 및 방법](#3-프로젝트-수행-절차-및-방법)
- [4. 프로젝트 수행 경과](#4-프로젝트-수행-경과)
- [5. 자체평가](#5-자체평가)

<br />

## 1. 프로젝트 개요

### 기획의도
CodeGram은 개발자들이 작업물과 프로젝트를 공유하고, 다양한 피드백을 통해 성장할 수 있는 커뮤니티입니다. 팔로우 기능을 통해 개발자 간 네트워크를 확장하고, 단순한 소통을 넘어 프로젝트를 체계적으로 관리할 수 있는 기능을 갖추어, 실무 능력 향상과 상호 성장에 기여합니다. 기존의 유사한 SNS 앱과는 다르게, 개발자들이 서로의 작업물에 대해 활발하게 상호작용을 하며 기술적 논의와 피드백을 주고받을 수 있는 차별화된 경험을 제공합니다.

### 핵심 기능
- 회원가입 및 로그인 : 이메일 형식과 비밀번호 조건 실시간 유효성 검사.
- 프로필 관리 : 프로필 설정 및 수정 기능 제공.
- 게시물 CRUD 및 피드 : 텍스트와 최대 3장의 이미지를 포함한 게시물 관리.
- 좋아요 및 댓글 기능 : Redux를 사용하여 댓글 수 관리 및 실시간 댓글 업데이트.
- 챗봇 서비스 : IT 및 취업 관련 질문에 대한 응답 기능.
- 사용자 검색 및 팔로우 : 다른 사용자를 검색하고 팔로우할 수 있는 기능.
- 작업물 CRUD 기능 : 사용자가 자신의 작업물을 등록하여 프로필에 표시.

<br />

## 2. 프로젝트 팀 구성 및 역할
### 팀원 구성

<div align="center">

| **이서림** | **이다빈** | **윤혜림** | **양현우** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://ifh.cc/g/VWMCP6.jpg" width=150 height=150> <br/>@seoriml](https://github.com/seoriml) |[<img src="https://ifh.cc/g/nryplm.jpg" width=150 height=150> <br/> @Yeon-seong](https://github.com/Yeon-seong) |[<img src="https://ifh.cc/g/StYRwo.jpg" width=150 height=150> <br/> @lia006](https://github.com/lia006) |[<img src="https://ifh.cc/g/FPGGzr.jpg" width=150 height=150> <br/> @yhwoooo](https://github.com/yhwoooo) |

</div>

<br />

### 역할 분담
#### 👩‍💻 이서림(팀장)
- **UI**
  - 페이지
    - 홈화면 피드
    - 유저검색
    - 게시글 작성/수정/상세
    - 내 작업 등록/수정
    - 댓글
  - 공통 컴포넌트
    - 모달 컴포넌트
    - 이미지 업로드 버튼
    - 뒤로가기 버튼
- **기능**
  - 홈화면 피드 불러오기
  - 유저검색
  - 게시물 생성/수정/상세/삭제
  - 댓글 생성/목록/삭제
  - 내 작업 등록 및 수정
  - 팔로잉리스트의 팔로우 및 언팔로우 api연결
  - 모달 훅
  - 무한 스크롤
  - 이미지 업로드 기능
- **그 외**
  - 팀 회의록 작성
  - 기술문서 작성 (프로젝트 수행 결과, 자체평가의견)
  - 코드그램 로고 수정, 로그인/회원가입 디자인 개선

<br>

### 👩‍💻 이다빈(팀원)
- **UI**
  - 페이지
    - 404 페이지
  - 공통 컴포넌트
    - Button 컴포넌트
    - Loading 컴포넌트
  - 스타일링
    - 챗봇 스타일링
    - CSS 전역 변수정의
- **기능**
  - 좋아요/좋아요 취소 토글
- **그 외**
  - Figma 페이지 디자인 개선
  - 코드그램 로고 제작
  - Readme 마크다운 작성

<br>

### 👩‍💻 윤혜림(팀원)
- **UI**
  - 페이지
    - 프로필 페이지
    - 프로필 수정
    - 팔로워/팔로잉 리스트
  - 공통 컴포넌트
    - 하단 탭 메뉴
- **기능**
  - 헤더 스크롤 관리 훅
  - 개인 프로필
  - 프로필 수정
  - 팔로우/언팔로우
  - 팔로워/팔로잉 리스트
  - 사용자 목록형/앨범형 게시물 
  - Vertical 메뉴 버튼
- **그 외**
  - Jira 일정관리 세팅
  - 기술문서 작성 (프로젝트 개요, 팀구성 및 역할, 수행절차 및 방법)

<br>

### 👨‍💻 양현우(팀원)
- **UI**
  - 페이지
    - 로그인
    - 회원가입
    - 프로필 설정
    - 내 작업 목록/상세
    - 챗봇 구조
  - 공통 컴포넌트
    - Input 컴포넌트
- **기능**
  - API 호출 훅
  - 로그인
  - 회원가입
  - 프로필 설정
  - 챗봇 기능구현
  - 내 작업 목록/상세/삭제
- **그 외**
  - 시연 영상 제작, 폴더 구조 작성, 라이브러리 설치
<br>

## 3. 프로젝트 수행 절차 및 방법
### 프로젝트 일정 관리 : [Jira](https://codegram.atlassian.net/jira/core/projects/CODE/board)

<img src="https://ifh.cc/g/5l7N3X.png" width=500 height=300 alt="zira 일정관리" />

|구분|기간|활동|비고|
|:---:|:---:|:---:|:---:|
|사전 기획|09월 23일(월)|주제, 디자인, 프로그래밍 언어, 구현기능범위, 배포환경 및 상태관리, 브랜치 및 커밋 규칙, 네이밍 컨벤션|
|개발 전 기본 세팅|09월 24일(화)|폴더 구조 설정, 라이브러리 설치, 공통 컴포넌트/훅 구현, Jira 일정 관리 세팅, Figma 기획 및 디자인수정|
|기능 개발|09월 25일(수) ~ 10월 13일(일)|게시글/피드, 챗봇, 프로필 각 페이지 관련 세부 기능 구현 작업|회의를 통한 역할 재분배|
|퍼블리싱|10/14(월) ~ 10/16(수)|게시글/피드, 챗봇, 프로필 각 페이지 관련 UI 작업||
|테스팅 및 배포|10/17(목) ~ 10/18(금)|배포 도구 Vercel을 사용해 배포 및 테스팅 진행||
|오류 수정 및 리팩토링|10/19(토) ~ 10/20(일)|테스트를 진행하며 오류 수정 및 리팩토링||
|발표 준비 및 마무리 작업|10/21(월)|리드미 작성, PPT 작업, 발표 준비, 시연 영상 제작||
|최종 발표|10/22(화)|발표||
|총 개발기간|09/23(월) ~ 10/21(월) (총 4주)|||

<br />


## 4. 프로젝트 수행 경과
### 프론트엔드(Front end)
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />

* **HTML** : 웹페이지의 구조와 콘텐츠를 시맨틱하게 배치.

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS" />

* **CSS** : 웹 페이지의 색상, 폰트 스타일, 레이아웃을 비롯한 시각적인 요소를 제어.

<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white" alt="SASS" />

* **SCSS** : CSS의 유지보수성과 재사용성을 높이기 위해 SCSS문법을 채택하여 스타일 관리.

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="JavaScript" />

* **JavaScript** : 사용자와의 상호작용과 비동기적인 웹 페이지의 동작을 구현.

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />

* **React** : 컴포넌트 기반 구조로 UI를 모듈화하고 효율적으로 관리.

<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" alt="Redux Toolkit" />

* **Redux Toolkit** : 전역 상태 관리 및 API 호출 간소화.

<img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="React Query" />

* **React Query** : 피드 데이터 패칭 및 무한 스크롤 구현.

### 백엔드(Back end)
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />

* **API** : 제공된 [RESTful API](https://www.notion.so/oreumi/API-5698646bf28e426981513afab52813fc) 활용.

### 서비스 배포 환경
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" alt="Vite" />

* **Vite** : 프로젝트 초기 설정과 빠른 개발 환경 구축.<br>

<img src="https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=Vercel&logoColor=61DAFB" alt="Vercel" />

* **Vercel** : GitHub와 연동해 코드 변경 시 자동 배포.<br>

### 협업 환경
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />

- **Github, Github Pull requests** : 버전 관리 및 협업

<img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />

- **Discord** : 온라인 회의 협업 툴
- 진행 상황을 공유하고, 이를 바탕으로 회의록을 작성.

<img src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" alt="Jira" />

- [**Jira**](https://codegram.atlassian.net/jira/core/projects/CODE/board) : 프로젝트 일정관리

<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />

- [**Figma**](https://www.figma.com/design/BOWqiGyimXDKi3oSwytrxU/%EC%BD%94%EB%93%9C%EA%B7%B8%EB%9E%A8?node-id=113664-1337&node-type=frame&t=KHXfPMLzz9staN7z-0) : 페이지 디자인 작업

<br />

## 브랜치 전략
- 기능 브랜치: 각 기능별 작업 (PR 제출 및 검토 후 병합)
- Develop 브랜치: 통합 테스트 (승인된 기능들이 모여 테스트 진행)
- Main 브랜치: 배포 (최종 안정화 후 배포)


## 커밋 컨벤션
### 커밋 메시지 규칙
- 타입: 변경사항 요약과 같은 포맷 사용

<details>
<summary>타입 리스트 접기/펼치기</summary>
<div markdown="1">

- **feat** : 기능 개발
- **fix** : 버그 수정
- **refactor** : 리팩토링
- **design** : CSS 등 사용자 UI 디자인 변경
- **comment**: 필요한 주석 추가 및 변경
- **style**:  스타일 (코드 형식, 세미콜론 추가, 비즈니스 로직에 변경 없음)
- **docs** : README 문서 수정
- **test** : 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
- **chore** : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
- **init**: 초기 생성
- **rename**: 파일 혹은 폴더명 수정(파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우)
- **remove**: 파일 삭제(파일을 삭제하는 작업만 수행한 경우)

</div>
</details>

## 네이밍 컨벤션
- **변수**: camelCase
- **함수**: camelCase
- **CSS 클래스 및 ID**: camelCase
- **상수**: UPPER_SNAKE_CASE

## 파일 및 폴더
- 폴더 이름: 케밥 케이스(kebab-case) 사용 (예: `product-list`, `shopping-cart`)
- 컴포넌트 파일 이름: PascalCase 사용 (예: `ProductList.js`, `ShoppingCart.js`)
- 일반 파일: 언더바 사용 (예: `profile_picture.png`)

## 프로젝트 폴더구조
<details>
<summary>폴더구조 접기/펼치기</summary>
<div markdown="1">

```
┌─ codegram-sns(Root)
├ 📂.git          
├ 📂node_modules
├ 📂public                      # 전역에서 사용할 파일
│ ├── favicon.ico
│ ├── loading.gif
│ └── vite.svg
├ 📂src
│ ├ 📂assets                    
│ │ ├ 📂images                  # 이미지 파일
│ │ │ ├── chat_profile.svg
│ │ │ ├── codegram_logo_title_white.svg
│ │ │ ├── file_upload_button.svg
│ │ │ ├── file_upload_button_fill.svg
│ │ │ ├── icon_404.svg
│ │ │ ├── icon_arrow_left.svg
│ │ │ ├── icon_chat.svg
│ │ │ ├── icon_close.svg
│ │ │ ├── icon_file_upload.svg
│ │ │ ├── icon_heart.svg
│ │ │ ├── icon_heart_fill.svg
│ │ │ ├── icon_image_layers.svg
│ │ │ ├── icon_more_vertical.svg
│ │ │ ├── icon_more_vertical_mini.svg
│ │ │ ├── icon_post_album_off.svg
│ │ │ ├── icon_post_album_on.svg
│ │ │ ├── icon_post_list_off.svg
│ │ │ ├── icon_post_list_on.svg
│ │ │ ├── icon_search.svg
│ │ │ ├── icon_share.svg
│ │ │ ├── login_icon_email.svg
│ │ │ ├── login_icon_join.svg
│ │ │ ├── symbol_logo.svg
│ │ │ ├── symbol_logo_codegram.svg
│ │ │ ├── symbol_logo_codegram_title.svg
│ │ │ ├── symbol_logo_gray.svg
│ │ │ ├── symbol_logo_white.svg
│ │ │ ├── tab_icon_chat.svg
│ │ │ ├── tab_icon_chat_fill.svg
│ │ │ ├── tab_icon_home.svg
│ │ │ ├── tab_icon_home_fill.svg
│ │ │ ├── tab_icon_post.svg
│ │ │ ├── tab_icon_profile.svg
│ │ │ ├── tab_icon_profile_fill.svg
│ │ │ ├── user_profile.svg
│ │ │ └── user_profile_mini.svg
│ │ └ 📂styles
│ │ │ └── common.scss
│ ├ 📂components
│ │ ├ 📂auth                    # 인증 컴포넌트(로그인, 회원가입)
│ │ │ ├── AuthForm.jsx
│ │ │ ├── AuthForm.module.scss
│ │ │ ├── AuthHeader.jsx
│ │ │ ├── LoginForm.jsx
│ │ │ ├── LoginForm.module.scss
│ │ │ ├── RedirectIfAuthenticated.jsx
│ │ │ └── SignupForm.jsx
│ │ ├ 📂chat                    # 채팅봇 컴포넌트
│ │ │ ├── ChatForm.jsx
│ │ │ └── ChatForm.module.scss
│ │ ├ 📂feed                    # 피드 컴포넌트
│ │ │ ├── EmptyFeed.jsx
│ │ │ ├── PostFeed.jsx
│ │ │ ├── PostFeed.module.scss
│ │ │ └── PostItem.jsx
│ │ ├ 📂follower                # 팔로워 컴포넌트
│ │ │ ├── Follower.module.scss
│ │ │ ├── FollowerItem.jsx
│ │ │ └── FollowerList.jsx
│ │ ├ 📂heart                   # 좋아요 컴포넌트
│ │ │ └── HeartComponent.jsx
│ │ ├ 📂layout                  # 하단 네비게이션 바 레이아웃 컴포넌트
│ │ │ └── 📂bot-nav
│ │ │ │ ├── BottomNavigation.jsx
│ │ │ │ └── BottomNavigation.module.scss
│ │ ├ 📂post
│ │ │ ├ 📂comment                     # 댓글 컴포넌트
│ │ │ │ ├── CommentList.jsx
│ │ │ │ └── CommentList.module.scss
│ │ │ ├── PostDetail.jsx
│ │ │ ├── PostForm.jsx
│ │ │ └── PostForm.module.scss
│ │ ├ 📂product                       # 포트폴리오 등록 컴포넌트
│ ├── App.jsx                         # 메인 앱 컴포넌트
│ │ │ ├── Product.module.scss
│ │ │ ├── ProductForm.jsx
│ │ │ ├── ProductForm.module.scss
│ │ │ ├── ProductItem.jsx
│ │ │ └── ProductList.jsx
│ │ ├ 📂profile                       # 프로필 컴포넌트
│ │ │ ├── 📂portfolio
│ │ │ │ ├── Portfolio.jsx
│ │ │ │ ├── Portfolio.module.scss
│ │ │ │ ├── PortfolioItem.jsx
│ │ │ │ └── PortfolioItem.module.scss
│ │ │ └ 📂profile-info
│ │ │ │ ├── PostGrid.jsx
│ │ │ │ ├── PostList.jsx
│ │ │ │ ├── ProfileActions.jsx
│ │ │ │ ├── ProfileInfo.jsx
│ │ │ │ ├── ProfileInfo.module.scss
│ │ │ │ └── ProfileTabs.jsx
│ │ ├ 📂search                        # 검색 컴포넌트
│ │ │ ├ Search.module.scss
│ │ │ ├ SearchInput.jsx
│ │ │ ├ SearchResultItem.jsx
│ │ │ └ SearchResultsList.jsx
│ │ └ 📂ui                            # 공통 컴포넌트
│ │ │ ├ 📂button                      # 버튼 모음
│ │ │ │ ├── BackButton.jsxx            # 뒤로가기 버튼
│ │ │ │ ├── ImageUploadButton.jsxx     # 이미지 업로드 버튼
│ │ │ │ └── VerticalButton.jsx         # 햄버거 버튼
│ │ │ ├ 📂modal
│ │ │ │ ├── ConfirmModal.jsx
│ │ │ │ ├── Modal.module.scss          # 공통 모달 컴포넌트
│ │ │ │ └── OptionsModal.jsx
│ │ │ ├── Button.jsx                   # 공통 버튼 컴포넌트
│ │ │ ├── Button.module.scss
│ │ │ ├── Input.jsx                    # 공통 인풋 컴포넌트
│ │ │ ├── Input.module.scss
│ │ │ ├── InputField.jsx
│ │ │ ├── Layout.jsx
│ │ │ ├── Loading.jsx                  # 공통 로딩 컴포넌트
│ │ │ ├── Loading.module.scss
│ │ │ └── ScrollToTop.jsx
│ ├ 📂hooks                            # 커스텀 훅
│ │ ├── useAPI.js                      # API 호출을 위한 커스텀 훅
│ │ ├── useModal.js                    # 모달 관리를 위한 커스텀 훅
│ │ └── useScrollHeader.js
│ ├ 📂pages                            # 각 페이지 컴포넌트
│ │ ├ 📂chat
│ │ │ ├── ChatRoomPage.jsx             # 채팅방 페이지 컴포넌트 
│ │ │ └── ChatRoomPage.module.scss
│ │ ├ 📂error
│ │ │ ├── NotFound.jsx                 # 404 페이지 컴포넌트
│ │ │ └── NotFound.module.scss
│ │ ├ 📂followersFollowings           # 팔로워, 팔로잉 페이지 컴포넌트
│ │ │ ├── followers.jsx
│ │ │ └── followings.jsx
│ │ ├ 📂home                          # 홈 페이지 컴포넌트
│ │ │ └── Home.jsx    
│ │ ├ 📂login                         # 로그인 페이지 컴포넌트
│ │ │ ├── LoginEmail.jsx
│ │ │ ├── LoginEmail.module.scss
│ │ │ ├── LoginMain.jsx
│ │ │ └── LoginMain.module.scss
│ │ ├ 📂post                          # 게시글 페이지 컴포넌트
│ │ │ ├── PostCreatePage.jsx
│ │ │ ├── PostDetailPage.jsx
│ │ │ └── PostEditPage.jsx
│ │ ├ 📂product                       # 포트폴리오 페이지 컴포넌트
│ │ │ ├── ProductCreatePage.jsx
│ │ │ ├── ProductDetailPage.jsx
│ │ │ ├── ProductEditPage.jsx
│ │ │ └── ProductListPage.jsx
│ │ ├ 📂profile                       # 프로필 페이지 컴포넌트
│ │ │ ├── MyProfile.jsx
│ │ │ ├── ProfileEdit.jsx
│ │ │ ├── ProfileEdit.module.scss
│ │ │ ├── ProfileSetup.jsx
│ │ │ ├── ProfileSetup.module.scss
│ │ │ └── YourProfile.jsx
│ │ ├ 📂search                        # 검색 페이지 컴포넌트
│ │ │ └── SearchPage.jsx
│ │ ├ 📂signup
│ │ │ └── Signup.jsx
│ │ └ 📂splash-screen
│ │ │ └── SplashScreen.jsx
│ ├ 📂redux                           # redux로 관리하는 파일
│ │ ├── apiSlice.js
│ │ ├── ApiTest.jsx
│ │ ├── bottomSlice.js
│ │ ├── commentSlice.js
│ │ ├── confirmModalSlice.js
│ │ ├── optionsModalSlice.js
│ │ ├── store.js
│ │ └── validationSlice.js
│ ├── App.jsx                 # 메인 앱 컴포넌트
│ ├── index.css               # 전역 스타일 CSS
│ ├── main.jsx
│ └── reset.css               # 리셋 스타일 CSS
├── .env
├── .gitignore                # git 업로드 제외
├── eslint.config.js
├── index.html                # HTML 템플릿
├── package-lock.json
├── package.json              # 프로젝트 설정 및 의존성
├── README.md                 # 프로젝트 설명 문서
├── vercel.json
└── vite.config.js
```

</div>
</details>

<br />

## 신경 쓴 부분
- 재사용성을 고려한 컴포넌트와 훅 설계
- Redux를 통한 전역 상태관리 및 유지
- 로그인 시 로그인/회원가입 페이지 접근제한
- 리덕스 툴킷을 사용하여 모달의 열림/닫힘 상태를 전역적으로 관리
  - 컴포넌트 간의 상태를 일관되게 유지하고, 모달의 내용과 동작을 동적으로 조정하여 중복코드를 줄이도록 노력.

### 공통 컴포넌트 및 커스텀훅 구현

#### UI 컴포넌트
- 버튼 컴포넌트: 버튼의 스타일, 텍스트, 클릭 동작을 동적으로 주입하여 재사용.
- 인풋 컴포넌트: 인풋 타입과 placeholder, value 등을 동적으로 받아 동일한 UI를 재사용.
- 모달 컴포넌트: 타이틀, 내용, 버튼, 동작 등을 동적으로 변경해 동일한 UI를 재사용.
- 로딩 컴포넌트:  여러 페이지에서 데이터를 가져오는 동안 로딩 애니메이션을 공통으로 재사용.
- 이미지 업로드 버튼: 여러 페이지에서 이미지 업로드 기능 재사용.
- 뒤로가기 버튼: 페이지 간 뒤로 이동하는 버튼을 하나의 컴포넌트로 만들어 재사용.

#### 폼 컴포넌트: Input 컴포넌트와 Button 컴포넌트 등을 활용하여 재사용성을 극대화.
- 로그인 및 회원가입 폼: 이메일과 비밀번호 입력 필드 및 로그인/회원가입 버튼 포함.
- 게시물 작성 폼: 제목과 내용 입력 필드, 이미지 업로드 필드, 게시물 저장 버튼 포함.
- 작업물 등록 폼: 작업물 제목과 설명 입력 필드, 등록 버튼 포함.
- 채팅폼: 메시지 입력 필드와 전송 버튼 포함.

#### 페이지별 컴포넌트
- 각 페이지에 필요한 컴포넌트를 별도의 폴더로 구성하여 관련 기능을 묶음.

#### 재사용 가능한 훅
- API 호출 관리 훅: fetch와 async/await를 활용해 비동기 처리 및 로딩 상태와 오류 처리를 일관되게 관리.
- 모달 관리 훅: 여러 컴포넌트에서 다양한 옵션으로 모달의 내용을 동적으로 설정하여 사용하도록 구현.
- 스크롤관리훅: 스크롤에 따라 헤더의 가시성을 관리하여 사용자 경험을 개선.

#### Redux 슬라이스
- API 관리 슬라이스: API 호출 상태(로딩, 성공, 실패) 및 데이터를 관리하여 전역적으로 접근.
- 모달관리 슬라이스: 모달의 열림/닫힘 상태와 관련된 데이터를 관리하여 여러 컴포넌트에서 모달을 쉽게 사용. 
- 댓글 수 관리 슬라이스: 각 게시물에 대한 댓글 수를 관리하여 실시간으로 업데이트.
- 바텀탭 슬라이스: 활성화된 바텀탭을 관리하여 사용자가 선택한 탭을 기억하고 UI에 반영.

#### 미리 제작한 컴포넌트와 훅을 활용해 페이지별로 기능 구현
게시물 CRUD
- Item 컴포넌트: 게시물 데이터를 받아 동일한 UI로 렌더링. 피드에서 여러 게시물을 반복 렌더링할 때 사용.
- Form 컴포넌트: 게시물 생성과 수정에서 재사용. 사용자가 입력한 데이터를 기반으로 게시물을 작성하거나 수정.
- Create (생성): Form컴포넌트를 사용하여 새로운 게시물 작성 후, 작성된 데이터를 Item컴포넌트로 렌더링.
- Read (읽기): 서버에서 받아온 게시물 목록을 map을 사용하여 PostItem으로 반복 렌더링.
- Update (수정): 수정 버튼 클릭 시 PostForm으로 데이터 편집 후 서버에 저장하고 다시 렌더링.
- Delete (삭제): 삭제 요청 후 게시물을 목록에서 제거하고, UI를 재렌더링.


### 피드백 내용 및 보완한 내용
- 각 팀원은 개발 중인 컴포넌트에 대해 정기적으로 코드 리뷰를 진행하여, UI 일관성을 유지하고, 사용자 경험을 향상시키기 위한 피드백을 제공.
- UI/UX 개선: 스크롤할 때 헤더가 자연스럽게 숨겨지거나 나타나도록 수정. 이를 통해 화면 공간을 효율적으로 활용하고, 사용자에게 보다 집중된 경험을 제공하도록 함.
- 컴포넌트 리팩토링: 코드 리뷰 과정에서 중복되는 컴포넌트를 발견하고 이를 통합하여 코드의 가독성을 높이고 유지보수성을 개선.
- Redux 상태 관리 개선: Redux 슬라이스에서 불필요한 상태를 제거하고, 필요한 상태만을 저장하도록 최적화하여 성능을 개선.

<br />

## 5. 자체평가
### 기획의도와의 부합정도
- 개발자 커뮤니티 플랫폼을 구현하기 위한 목표에 부합.
- 사용자가 쉽게 정보를 공유하고 소통할 수 있는 기능을 제공함. 
- 핵심 기능이 잘 구현되었으며, 사용자 요구를 충족시키기 위한 노력이 반영됨.

### 실무 활용 가능성
- 사용된 기술 스택(React, Redux Toolkit, SCSS, React Query 등)은 실제 업무 환경에서도 많이 사용될 것으로 예상. 
- 개발한 플랫폼은 개발자 간의 소통과 협업을 촉진하는 데 기여할 수 있는 기능을 갖추고 있음.

### 만족스러운 점
- 기획 및 사전 준비
  - 기획 단계에서 팀원들과 함께 핵심 기능을 선정하고, 각자의 역할을 명확히 하여 프로젝트의 방향성을 설정. 
  - 이러한 사전 준비가 개발 과정에서 원활한 진행을 가능하게 함.

- 팀 프로세스 구축
  - 팀 프로세스를 미리 설정하여 개발 언어, 브랜치 전략, 명명 규칙 등을 정리함으로써 팀원 간의 협업을 강화함. 
  - 이는 프로젝트의 진행 상황을 명확히 하고 팀원 간의 의견을 통합하는 데 큰 도움이 됨.

- 디자인 및 기술 설계
  - Figma를 통해 UI/UX 디자인을 사전에 충분히 고민함.
  - 컴포넌트 폴더 구조 및 Redux 슬라이스 설계를 통해 기술적인 부분에서도 명확한 기준을 세워 개발을 진행. 
  - 이로 인해 기능 구현이 훨씬 수월해짐.

- 재사용 가능한 컴포넌트 및 훅 설계
  - 재사용 가능성을 고려하여 컴포넌트와 훅을 설계함. 
  - 이를 통해 유지보수성과 가독성을 높였으며, 개발 편의성을 극대화 함.

- 정기적인 코드 리뷰
  - 팀원들의 코드를 정기적으로 리뷰하고 적절한 피드백을 제공하며, 리팩토링을 통해 코드 품질을 개선함.


- ## 추후 개선 목표
- **코드 하이라이팅 지원**
  - 사용자가 코드를 공유할 때, 해당 코드의 언어에 맞춰 구문을 강조해주는 라이브러리 적용할 예정입니다.

- **사용자 채팅기능**
  - 기술지원챗봇 뿐만 아니라 사용자끼리 소통할 수 있는 기능도 구현할 예정입니다.

- **리팩토링**
  - Redux와 api훅의 구조를 상태관리 및 유지보수하기 좋은 방식으로 리팩토링을 하거나 tanstack query를 사용하는 방식으로 개선할 예정입니다.
 
- **타입스크립트 적용**
  - 코드의 안정성을 높이기 위해 프로젝트에 타입스크립트를 도입할 계획.


<!-- ## 페이지별 기능
| 초기화면 |
|--------------------|
|![]()|

<br />

### 회원가입
| 회원가입 |
|--------------------|
|![]()| -->

<br />

## 트러블 슈팅

[PostItem 컴포넌트의 모달 중복 렌더링 문제](https://github.com/seoriml/codegram-sns/wiki/PostItem-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EB%AA%A8%EB%8B%AC-%EC%A4%91%EB%B3%B5-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%AC%B8%EC%A0%9C)

[프로필 페이지에서 컴포넌트 렌더링 이슈](https://github.com/seoriml/codegram-sns/wiki/%ED%94%84%EB%A1%9C%ED%95%84-%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%EC%8A%88)
<br />

<br />

## 프로젝트 후기

### 👩‍💻 이서림
이번 팀 프로젝트를 통해 기획, 개발, 테스트의 전 과정을 경험하면서 많은 것을 배웠습니다. 팀워크의 중요성을 깊이 깨달았고, 원활한 소통이 프로젝트 성공에 얼마나 중요한지 실감했습니다. 초기 기획 단계에서 핵심 기능을 선정하고 각자의 역할을 명확히 하여 프로젝트 방향성을 설정한 경험이 특히 기억에 남습니다.미리 설정된 팀 프로세스는 협업을 강화하는 데 큰 도움이 되었고, 재사용 가능한 컴포넌트와 훅을 설계하면서 그 가치를 체감하게 되었습니다. 문제 발생 시 팀원들과 논의하며 해결하는 과정은 제 문제 해결 능력을 한층 더 키울 수 있는 기회가 되었습니다.
이 프로젝트를 통해 팀과 함께 성장해 나가는 것의 소중함을 느꼈고, 앞으로도 더 나은 결과를 위해 계속해서 노력하겠습니다. 팀원분들 모두 고생 많으셨습니다! 

<br>

### 👩‍💻 이다빈
팀 프로젝트를 성공적으로 마무리할 수 있어 매우 만족스럽습니다. 이번 경험을 통해 개발자들이 협업해야 하는 이유를 몸소 깨달았습니다. 물론 이는 '개발'에만 국한된 사실은 아니지만, 팀 프로젝트를 진행하면서 더욱 뚜렷하게 느낄 수 있었습니다. 특히 팀 프로젝트를 통해 각 팀원의 역할이 얼마나 중요한지 알게 되었습니다. 이전에 경험했던 코딩 클론 개인 프로젝트와는 확연히 달랐습니다. 팀원들과 소통하며 오류를 해결하고, 정해진 답이 없는 상황에서 스스로 해답을 찾아가는 과정은 아직 익숙하지 않았지만, 매우 값진 경험이었습니다. 앞으로, 개발자의 길을 걸어갈 때 이러한 협업 방식에 더욱 익숙해지도록 노력하겠습니다. 약 한 달간의 프로젝트 기간 동안 팀원들과 함께 일하며 웹 프론트엔드 개발자로서 한층 더 성장할 수 있었습니다. 모든 팀원분께 수고하셨다는 말씀을 전하고 싶습니다. 앞으로 코드그램 프로젝트를 업데이트할 기회가 있다면 다시 한번 함께 참여하고 싶습니다!
<br>

### 👩‍💻 윤혜림
팀 프로젝트를 진행하며 프론트엔드 개발에서 중요한 다양한 기술들을 실습하고 적용할 수 있었습니다. 부족한 부분은 공부를 통해 보완해 나갔고, 각종 기술 스택을 활용해 실무적인 문제를 해결하는 경험은 저에게 큰 성장의 기회가 되었습니다.
또한, 팀워크의 중요성을 다시 한번 느낄 수 있었습니다. 각 팀원이 맡은 역할을 책임감 있게 수행하고, Pull Requsets를 통해 주기적으로 코드를 리뷰하며 피드백을 주고받음으로써 코드의 품질을 향상시키고 서로의 아이디어를 반영해 프로젝트의 완성도를 높일 수 있었습니다. 이 과정에서 협업의 상호 보완적인 역할 분담과 의견 조율의 중요성도 느낄 수 있었고, 이를 통해 더 나은 결과물을 만들어낼 수 있었습니다.
앞으로도 이러한 경험을 바탕으로 더 발전된 개발자로 성장하도록 노력하겠습니다. 한 달이라는 기간 동안 동일한 목표를 향해 함께 노력한 만큼 좋은 성과를 이룰 수 있었다고 생각합니다. 어려움이 많았지만 팀원분들 덕분에 많이 배울 수 있었습니다. 모두 고생 많으셨습니다!
<br>

### 👨‍💻 양현우
팀 프로젝트 경험이 부족하여 초반엔 걱정이 앞섰지만 기획, 설계 단계에서 프로젝트의 목표와 컨벤션등을 정하고, 체계적으로 역할 분담을 하면서 팀원과의 소통에 자신감이 생겼습니다. 자신감을 토대로 자유롭고 원활한 의견 조율을 할 수 있었고, 마무리까지 잘 지을 수 있었던 것 같습니다. 프로젝트의 성공에 있어서 개인의 지식과 코딩실력도 중요하지만 그보다 더 주요한 요인은 팀원과의 끈끈한 팀워크를 위한 대화 스킬과 배려심이지 않을까 싶습니다. 깃헙을 활용한 협업과 새로운 라이브러리를 사용해 볼 기회여서 좋았고, 직면한 이슈들을 혼자 또는 팀원들과 같이 해결해 나가면서 한층 더 성장할 수 있는 기간이었습니다. 어렵고 힘든 순간이 있었음에도 책임감 가지고 끝까지 프로젝트에 힘써준 팀원분들께 감사드립니다. 조금 더 책임감 있고, 소통 잘하는 개발자가 되어보겠습니다.


<br>

## 회의록

[회의록](https://github.com/seoriml/codegram-sns/wiki/2024%E2%80%9009%E2%80%9019-%ED%9A%8C%EC%9D%98%EB%A1%9D)
