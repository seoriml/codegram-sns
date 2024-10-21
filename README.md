# CodeGram 💬
- 배포 URL : https://codegram-sns.vercel.app
- 테스트 Email : codegram@codegram.com
- 테스트 Password : codegram

## 프로젝트 소개
개발자들이 직접 작성한 코드, 프로젝트, 기술과 일상을 공유하고, 피드백을 주고받을 수 있는 웹앱 커뮤니티입니다!<br>
팔로우/팔로잉 기능을 통해 관심 있는 개발자를 구독하고, 게시글에 답글을 달거나 좋아요를 누르며 상호작용할 수 있습니다.
<br />


## 팀원 구성
| **이서림** | **이다빈** | **윤혜림** | **양현우** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://ifh.cc/g/X8zsd1.png" width=150 height=150> <br/>@seoriml](https://github.com/seoriml) |[<img src="https://ifh.cc/g/nryplm.jpg" width=150 height=150> <br/> @Yeon-seong](https://github.com/Yeon-seong) |[<img src="https://ifh.cc/g/X8zsd1.png" width=150 height=150> <br/> @lia006](https://github.com/lia006) |[<img src="https://ifh.cc/g/FPGGzr.jpg" width=150 height=150> <br/> @yhwoooo](https://github.com/yhwoooo) |
<br />


## 목차
- [개요](#개요)
- [타입 리스트](#타입-리스트)
- [파일 및 폴더구조](#파일-및-폴더구조)
- [개선 목표](#개선-목표)
- [프로젝트 후기](#프로젝트-후기)
<br />


## 개요
- 프로젝트 이름: [코드그램(Codegram)](https://codegram-sns.vercel.app/)
- 프로젝트 기간: 2024.09.23 - 2024.10.22
- 프로젝트 일정 관리 : Jira


## 1. 개발 환경
### 프론트엔드(Front end)
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />

* **HTML** : 웹페이지의 구조와 콘텐츠를 시맨틱하게 배치.

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS" />

* **CSS** : 웹 페이지의 색상, 폰트 스타일, 레이아웃을 비롯한 시각적인 요소를 제어.

<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white" alt="SASS" />

* **SASS** : CSS의 유지보수성과 재사용성을 높이기 위해 SCSS문법을 채택하여 스타일 관리.

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="JavaScript" />

* **JavaScript** : 사용자와의 상호작용을 가능하게 하는 웹 페이지의 동작을 구현.

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />

* **React** : 컴포넌트 기반 구조로 UI를 모듈화하고 효율적으로 관리.

<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" alt="Redux Toolkit" />

* **Redux Toolkit** : 전역 상태 관리 및 API 호출 간소화.

<img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="React Query" />

* **React Query** : 피드 데이터 패칭 및 무한 스크롤 구현.

### 백엔드(Back end)
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />

* **Node.js** : 브라우저 내에서 말고도 다른 환경에서 JavaScript를 실행.
* **API** : 제공된 [RESTful API](https://www.notion.so/oreumi/API-5698646bf28e426981513afab52813fc) 활용.

### 서비스 배포 환경
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" alt="Vite" />

* **Vite** : 프로젝트 초기 설정과 빠른 개발 환경 구축.<br>

<img src="https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=Vercel&logoColor=61DAFB" alt="Vercel" />

* **Vercel** : GitHub와 연동해 코드 변경 시 자동 배포.<br>

### 협업 환경
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="" />

- 버전 및 이슈관리 : Github, Github Pull requests

<img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="" />

- 온라인 소통 : Discord

<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=whit" alt="" />

- 디자인 : [Figma](https://www.figma.com/design/BOWqiGyimXDKi3oSwytrxU/%EC%BD%94%EB%93%9C%EA%B7%B8%EB%9E%A8?node-id=113664-1337&node-type=frame&t=KHXfPMLzz9staN7z-0)

<br />

## 커밋 컨벤션
<details>
<summary>타입 리스트 접기/펼치기</summary>
<div markdown="1">

```
─→ feat: 기능 개발
─→ fix: 버그 수정
─→ refactor: 리팩토링
─→ design: CSS 등 사용자 UI 디자인 변경
─→ comment: 필요한 주석 추가 및 변경
─→ style: 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
─→ docs: 문서 수정 (문서 추가, 수정, 삭제, README)
─→ test: 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
─→ test: 테스트 코드 추가/수정
─→ chore : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
─→ init: 초기 파일 생성
─→ rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
─→ remove: 파일을 삭제하는 작업만 수행한 경우
```
</div>
</details>
<br />

- [코드 컨벤션]()
<br />

## 채택한 개발 기술과 브랜치 전략
<br />


## 프로젝트 폴더구조
<details>
<summary>폴더구조 접기/펼치기</summary>
<div markdown="1">

```
┌ codegram-sns(Root)
├ 📂.git
├ 📂public
│ ├── favicon.ico
│ ├── loading.gif
│ └── vite.svg
├ 📂src
│ ├ 📂assets
│ │ ├ 📂images
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
│ │ ├ 📂auth
│ │ │ ├── AuthForm.jsx
│ │ │ ├── AuthForm.module.scss
│ │ │ ├── AuthHeader.jsx
│ │ │ ├── LoginForm.jsx
│ │ │ ├── LoginForm.module.scss
│ │ │ ├── RedirectIfAuthenticated.jsx
│ │ │ └── SignupForm.jsx
│ │ ├ 📂chat
│ │ │ ├── ChatForm.jsx
│ │ │ └── ChatForm.module.scss
│ │ ├ 📂feed
│ │ │ ├── EmptyFeed.jsx
│ │ │ ├── PostFeed.jsx
│ │ │ ├── PostFeed.module.scss
│ │ │ └── PostItem.jsx
│ │ ├ 📂follower
│ │ │ ├── Follower.module.scss
│ │ │ ├── FollowerItem.jsx
│ │ │ └── FollowerList.jsx
│ │ ├ 📂heart
│ │ │ └── HeartComponent.jsx
│ │ ├ 📂layout
│ │ │ └── 📂bot-nav
│ │ │ │ ├── BottomNavigation.jsx
│ │ │ │ └── BottomNavigation.module.scss
│ │ ├ 📂post
│ │ │ ├ 📂comment
│ │ │ │ ├── CommentList.jsx
│ │ │ │ └── CommentList.module.scss
│ │ │ ├── PostDetail.jsx
│ │ │ ├── PostForm.jsx
│ │ │ └── PostForm.module.scss
│ │ ├ 📂product
│ │ │ ├── Product.module.scss
│ │ │ ├── ProductForm.jsx
│ │ │ ├── ProductForm.module.scss
│ │ │ ├── ProductItem.jsx
│ │ │ └── ProductList.jsx
│ │ ├ 📂profile
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
│ │ ├ 📂search
│ │ │ ├ Search.module.scss
│ │ │ ├ SearchInput.jsx
│ │ │ ├ SearchResultItem.jsx
│ │ │ └ SearchResultsList.jsx
│ │ └ 📂ui
│ │ │ ├ 📂button
│ │ │ │ ├── BackButton.jsx
│ │ │ │ ├── ImageUploadButton.jsx
│ │ │ │ └── VerticalButton.jsx
│ │ │ ├ 📂modal
│ │ │ │ ├── ConfirmModal.jsx
│ │ │ │ ├── Modal.module.scss
│ │ │ │ └── OptionsModal.jsx
│ │ │ ├── Button.jsx
│ │ │ ├── Button.module.scss
│ │ │ ├── Input.jsx
│ │ │ ├── Input.module.scss
│ │ │ ├── InputField.jsx
│ │ │ ├── Layout.jsx
│ │ │ ├── Loading.jsx
│ │ │ ├── Loading.module.scss
│ │ │ └── ScrollToTop.jsx
│ ├ 📂hooks
│ │ ├── useAPI.js
│ │ ├── useModal.js
│ │ └── useScrollHeader.js
│ ├ 📂pages
│ │ ├ 📂chat
│ │ │ ├── ChatRoomPage.jsx
│ │ │ └── ChatRoomPage.module.scss
│ │ ├ 📂error
│ │ │ ├── NotFound.jsx
│ │ │ └── NotFound.module.scss
│ │ ├ 📂followersFollowings
│ │ │ ├── followers.jsx
│ │ │ └── followings.jsx
│ │ ├ 📂home
│ │ │ └── Home.jsx
│ │ ├ 📂login
│ │ │ ├── LoginEmail.jsx
│ │ │ ├── LoginEmail.module.scss
│ │ │ ├── LoginMain.jsx
│ │ │ └── LoginMain.module.scss
│ │ ├ 📂post
│ │ │ ├── PostCreatePage.jsx
│ │ │ ├── PostDetailPage.jsx
│ │ │ └── PostEditPage.jsx
│ │ ├ 📂product
│ │ │ ├── ProductCreatePage.jsx
│ │ │ ├── ProductDetailPage.jsx
│ │ │ ├── ProductEditPage.jsx
│ │ │ └── ProductListPage.jsx
│ │ ├ 📂profile
│ │ │ ├── MyProfile.jsx
│ │ │ ├── ProfileEdit.jsx
│ │ │ ├── ProfileEdit.module.scss
│ │ │ ├── ProfileSetup.jsx
│ │ │ ├── ProfileSetup.module.scss
│ │ │ └── YourProfile.jsx
│ │ ├ 📂search
│ │ │ └── SearchPage.jsx
│ │ ├ 📂signup
│ │ │ └── Signup.jsx
│ │ └ 📂splash-screen
│ │ │ └── SplashScreen.jsx
│ ├ 📂redux
│ │ ├── apiSlice.js
│ │ ├── ApiTest.jsx
│ │ ├── bottomSlice.js
│ │ ├── commentSlice.js
│ │ ├── confirmModalSlice.js
│ │ ├── optionsModalSlice.js
│ │ ├── store.js
│ │ └── validationSlice.js
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ └── reset.css
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└━━ vite.config.js
```

</div>
</details>
<br />


## 역할 분담
### 👩‍💻 이서림
- **UI**
  - 페이지 : 홈화면 피드, 검색, 게시글 작성/수정/상세, 내작업 등록/수정, 
  - 공통 컴포넌트 : 모달컴포넌트, 이미지 업로드버튼, 뒤로가기 버튼
- **기능**
  - 홈화면 피드 불러오기, 유저검색, 게시물 생성/수정/상세/삭제, 댓글 생성/목록/삭제, 상품 등록 및 수정, 팔로잉리스트의 팔로우 및 언팔로우 api연결
- **그 외**
  - 팀 회의록 작성, 코드그램 로고 제작
<br>

### 👩‍💻 이다빈
- **UI**
  - 페이지 : 코드봇 채팅방/채팅폼, 404 페이지, 전역 CSS 제작
  - 공통 컴포넌트 : 버튼 컴포넌트, 로딩 컴포넌트
- **기능**
  - 좋아요/좋아요 취소 토글 버튼
- **그 외**
  - Figma를 사용한 페이지 디자인, 코드그램 로고 제작, Readme 작성
<br>

### 👩‍💻 윤혜림
- **UI**
  - 페이지 : 
  - 공통 컴포넌트 : 
- **기능**
  - ~
- **그 외**
  - ~
<br>

### 👨‍💻 양현우
- **UI**
  - 페이지 : 
  - 공통 컴포넌트 : 
- **기능**
  - ~
- **그 외**
  - ~
<br>

## 개발 기간 및 작업 관리
- 전체 개발 기간 : 2024.09.23 - 2024.10.22
- UI 구현 : 
- 기능 구현 : 
- 오류 해결 : ~ 2024.10.21

### 개발 기간
<br />

### 작업 관리
<br />

## 신경 쓴 부분
<br />

## 페이지별 기능
<br />

## 트러블 슈팅
<br />

## 개선 목표
<br />

## 프로젝트 후기

### 👩‍💻 이서림
이번 팀 프로젝트를 통해 기획, 개발, 테스트의 전 과정을 경험하면서 많은 것을 배웠습니다. 팀워크의 중요성을 깊이 깨달았고, 원활한 소통이 프로젝트 성공에 얼마나 중요한지 실감했습니다. 초기 기획 단계에서 핵심 기능을 선정하고 각자의 역할을 명확히 하여 프로젝트 방향성을 설정한 경험이 특히 기억에 남습니다.미리 설정된 팀 프로세스는 협업을 강화하는 데 큰 도움이 되었고, 재사용 가능한 컴포넌트와 훅을 설계하면서 그 가치를 체감하게 되었습니다. 문제 발생 시 팀원들과 논의하며 해결하는 과정은 제 문제 해결 능력을 한층 더 키울 수 있는 기회가 되었습니다.
이 프로젝트를 통해 팀과 함께 성장해 나가는 것의 소중함을 느꼈고, 앞으로도 더 나은 결과를 위해 계속해서 노력하겠습니다. 팀원분들 모두 고생 많으셨습니다! 
<br>

### 👩‍💻 이다빈
<br>

### 👩‍💻 윤혜림
<br>

### 👨‍💻 양현우