# CodeGram 💬
개발자들이 직접 작성한 코드, 프로젝트, 기술과 일상을 공유하고, 피드백을 주고받을 수 있는 웹앱 커뮤니티입니다!<br>
팔로우/팔로잉 기능을 통해 관심 있는 개발자를 구독하고, 게시글에 답글을 달거나 좋아요를 누르며 상호작용할 수 있습니다.


## 팀원 구성
| **이서림** | **이다빈** | **윤혜림** | **양현우** |
| :------: |  :------: | :------: | :------: |
| [<img src="https://ifh.cc/g/X8zsd1.png" width=150 height=150> <br/>@seoriml](https://github.com/seoriml) |[<img src="https://ifh.cc/g/nryplm.jpg" width=150 height=150> <br/> @Yeon-seong](https://github.com/Yeon-seong) |[<img src="https://ifh.cc/g/X8zsd1.png" width=150 height=150> <br/> @lia006](https://github.com/lia006) |[<img src="https://ifh.cc/g/X8zsd1.png" width=150 height=150> <br/> @yhwoooo](https://github.com/yhwoooo) |

## 목차
- [개요](#개요)
- [타입 리스트](#타입-리스트)
- [파일 및 폴더구조](#파일-및-폴더구조)

## 개요
- 프로젝트 이름: [코드그램(Codegram)](https://codegram-sns.vercel.app/)
- 프로젝트 기간: 2024.09.23 - 2024.10.22
- 프로젝트 일정 관리 : Jira
- 멤버: 이서림, 이다빈, 윤혜림, 양현우
- 개발 언어
  <!-- HTML5 아이콘 배지 -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <!-- CSS3 아이콘 배지 -->
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <!-- JavaScript 아이콘 배지 -->
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
  <!-- React.js 아이콘 배지 -->
  <img src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/><br>
  <!-- Redux 아이콘 배지 -->
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white" />
  <!-- Sass 아이콘 배지 -->
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white" />
  <!-- Node.js 아이콘 배지 -->
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <!-- Vite 아이콘 배지 -->
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white" />

<!-- ## 명명 규칙
변수 및 함수 클래스
- 변수: camelCase (예: userName, postCount)
- 함수: camelCase (예: fetchUserData, handleSubmit)
- 클래스 및 ID: camelCase
### 상수
- UPPER_SNAKE_CASE (예: MAX_LENGTH, API_URL) -->


## 타입 리스트
```
→ feat: 기능 개발
→ fix: 버그 수정
→ refactor: 리팩토링
→ design: CSS 등 사용자 UI 디자인 변경
→ comment: 필요한 주석 추가 및 변경
→ style: 스타일 (코드 형식, 세미콜론 추가: 비즈니스 로직에 변경 없음)
→ docs: 문서 수정 (문서 추가, 수정, 삭제, README)
→ test: 테스트 (테스트 코드 추가, 수정, 삭제: 비즈니스 로직에 변경 없음)
→ test: 테스트 코드 추가/수정
→ chore : 기타 변경사항 (빌드 스크립트 수정, assets, 패키지 매니저 등)
→ init: 초기 파일 생성
→ rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만 한 경우
→ remove: 파일을 삭제하는 작업만 수행한 경우
```

<!-- ## 컴포넌트 구성
UI 컴포넌트
- Button: 여러 유형의 버튼을 위한 공통 컴포넌트
- Modal: 모달 공통 컴포넌트
- Input: 텍스트 입력, 체크박스, 라디오 버튼 공통 컴포넌트
- Loading: 페이지 로딩 시 나타나는 로딩 컴포넌트

### 폼 컴포넌트
- LoginForm: 로그인 입력 필드 및 버튼
- SignupForm: 회원가입 입력 필드 및 버튼
- PostForm: 게시글 작성을 위한 입력 필드 및 버튼


### 페이지별 컴포넌트
각 페이지에 필요한 컴포넌트를 별도의 폴더로 구성하여 관련 기능을 묶음.

### 재사용 가능한 훅
useAPI: API 호출 관리 훅 (fetch와 async/await를 사용하여 API를 관리하는 훅)
useModal: 모달 상태 관리를 위한 훅

## API 호출 규칙
훅을 통해 API 호출의 로직을 중앙에서 관리
로딩 상태 및 오류 처리를 통일
컴포넌트는 훅을 호출하여 필요한 API 데이터를 손쉽게 가져도록 함

## 브랜치 전략
main 브랜치: 배포 가능한 안정 버전이 포함된 브랜치.
develop 브랜치: 기능 개발이 끝나면 이 브랜치에 병합.
기능별 브랜치: 새로운 기능을 추가할 때마다 feature/기능이름 브랜치를 생성해 작업.

## 코드 리뷰 및 병합 프로세스
모든 팀원은 개발 브랜치에서 기능별로 자신이 작업한 부분을 pull request (PR)로 제출
팀원 전원이 해당 PR을 검토하고 문제가 없을 시 승인
승인된 PR은 develop 브랜치에 병합하여 통합 테스트 진행
테스트 완료 후 main 브랜치에 병합하여 실제 배포 -->

<br />

## 프로젝트 폴더구조
```
┏ codegram-sns(Root)
┣ 📂.git
┣ 📂public
┃ ┣ favicon.ico
┃ ┣ loading.gif
┃ ┗ vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┣ 📂images
┃ ┃ ┃ ┣ chat_profile.svg
┃ ┃ ┃ ┣ codegram_logo_title_white.svg
┃ ┃ ┃ ┣ file_upload_button.svg
┃ ┃ ┃ ┣ file_upload_button_fill.svg
┃ ┃ ┃ ┣ icon_404.svg
┃ ┃ ┃ ┣ icon_arrow_left.svg
┃ ┃ ┃ ┣ icon_chat.svg
┃ ┃ ┃ ┣ icon_close.svg
┃ ┃ ┃ ┣ icon_file_upload.svg
┃ ┃ ┃ ┣ icon_heart.svg
┃ ┃ ┃ ┣ icon_heart_fill.svg
┃ ┃ ┃ ┣ icon_image_layers.svg
┃ ┃ ┃ ┣ icon_more_vertical.svg
┃ ┃ ┃ ┣ icon_more_vertical_mini.svg
┃ ┃ ┃ ┣ icon_post_album_off.svg
┃ ┃ ┃ ┣ icon_post_album_on.svg
┃ ┃ ┃ ┣ icon_post_list_off.svg
┃ ┃ ┃ ┣ icon_post_list_on.svg
┃ ┃ ┃ ┣ icon_search.svg
┃ ┃ ┃ ┣ icon_share.svg
┃ ┃ ┃ ┣ login_icon_email.svg
┃ ┃ ┃ ┣ login_icon_join.svg
┃ ┃ ┃ ┣ symbol_logo.svg
┃ ┃ ┃ ┣ symbol_logo_codegram.svg
┃ ┃ ┃ ┣ symbol_logo_codegram_title.svg
┃ ┃ ┃ ┣ symbol_logo_gray.svg
┃ ┃ ┃ ┣ symbol_logo_white.svg
┃ ┃ ┃ ┣ tab_icon_chat.svg
┃ ┃ ┃ ┣ tab_icon_chat_fill.svg
┃ ┃ ┃ ┣ tab_icon_home.svg
┃ ┃ ┃ ┣ tab_icon_home_fill.svg
┃ ┃ ┃ ┣ tab_icon_post.svg
┃ ┃ ┃ ┣ tab_icon_profile.svg
┃ ┃ ┃ ┣ tab_icon_profile_fill.svg
┃ ┃ ┃ ┣ user_profile.svg
┃ ┃ ┃ ┗ user_profile_mini.svg
┃ ┃ ┗ 📂styles
┃ ┃ ┃ ┗ common.scss
┃ ┣ 📂components
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┣ AuthForm.jsx
┃ ┃ ┃ ┣ AuthForm.module.scss
┃ ┃ ┃ ┣ AuthHeader.jsx
┃ ┃ ┃ ┣ LoginForm.jsx
┃ ┃ ┃ ┣ LoginForm.module.scss
┃ ┃ ┃ ┣ RedirectIfAuthenticated.jsx
┃ ┃ ┃ ┗ SignupForm.jsx
┃ ┃ ┣ 📂chat
┃ ┃ ┃ ┣ ChatForm.jsx
┃ ┃ ┃ ┗ ChatForm.module.scss
┃ ┃ ┣ 📂feed
┃ ┃ ┃ ┣ EmptyFeed.jsx
┃ ┃ ┃ ┣ PostFeed.jsx
┃ ┃ ┃ ┣ PostFeed.module.scss
┃ ┃ ┃ ┗ PostItem.jsx
┃ ┃ ┣ 📂follower
┃ ┃ ┃ ┣ Follower.module.scss
┃ ┃ ┃ ┣ FollowerItem.jsx
┃ ┃ ┃ ┗ FollowerList.jsx
┃ ┃ ┣ 📂heart
┃ ┃ ┃ ┗ HeartComponent.jsx
┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┗ 📂bot-nav
┃ ┃ ┃ ┃ ┣ BottomNavigation.jsx
┃ ┃ ┃ ┃ ┗ BottomNavigation.module.scss
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ 📂comment
┃ ┃ ┃ ┃ ┣ CommentList.jsx
┃ ┃ ┃ ┃ ┗ CommentList.module.scss
┃ ┃ ┃ ┣ PostDetail.jsx
┃ ┃ ┃ ┣ PostForm.jsx
┃ ┃ ┃ ┗ PostForm.module.scss
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ Product.module.scss
┃ ┃ ┃ ┣ ProductForm.jsx
┃ ┃ ┃ ┣ ProductForm.module.scss
┃ ┃ ┃ ┣ ProductItem.jsx
┃ ┃ ┃ ┗ ProductList.jsx
┃ ┃ ┣ 📂profile
┃ ┃ ┃ ┣ 📂portfolio
┃ ┃ ┃ ┃ ┣ Portfolio.jsx
┃ ┃ ┃ ┃ ┣ Portfolio.module.scss
┃ ┃ ┃ ┃ ┣ PortfolioItem.jsx
┃ ┃ ┃ ┃ ┗ PortfolioItem.module.scss
┃ ┃ ┃ ┗ 📂profile-info
┃ ┃ ┃ ┃ ┣ PostGrid.jsx
┃ ┃ ┃ ┃ ┣ PostList.jsx
┃ ┃ ┃ ┃ ┣ ProfileActions.jsx
┃ ┃ ┃ ┃ ┣ ProfileInfo.jsx
┃ ┃ ┃ ┃ ┣ ProfileInfo.module.scss
┃ ┃ ┃ ┃ ┗ ProfileTabs.jsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┣ Search.module.scss
┃ ┃ ┃ ┣ SearchInput.jsx
┃ ┃ ┃ ┣ SearchResultItem.jsx
┃ ┃ ┃ ┗ SearchResultsList.jsx
┃ ┃ ┗ 📂ui
┃ ┃ ┃ ┣ 📂button
┃ ┃ ┃ ┃ ┣ BackButton.jsx
┃ ┃ ┃ ┃ ┣ ImageUploadButton.jsx
┃ ┃ ┃ ┃ ┗ VerticalButton.jsx
┃ ┃ ┃ ┣ 📂modal
┃ ┃ ┃ ┃ ┣ ConfirmModal.jsx
┃ ┃ ┃ ┃ ┣ Modal.module.scss
┃ ┃ ┃ ┃ ┗ OptionsModal.jsx
┃ ┃ ┃ ┣ Button.jsx
┃ ┃ ┃ ┣ Button.module.scss
┃ ┃ ┃ ┣ Input.jsx
┃ ┃ ┃ ┣ Input.module.scss
┃ ┃ ┃ ┣ InputField.jsx
┃ ┃ ┃ ┣ Layout.jsx
┃ ┃ ┃ ┣ Loading.jsx
┃ ┃ ┃ ┣ Loading.module.scss
┃ ┃ ┃ ┗ ScrollToTop.jsx
┃ ┣ 📂hooks
┃ ┃ ┣ useAPI.js
┃ ┃ ┣ useModal.js
┃ ┃ ┗ useScrollHeader.js
┃ ┣ 📂pages
┃ ┃ ┣ 📂chat
┃ ┃ ┃ ┣ ChatRoomPage.jsx
┃ ┃ ┃ ┗ ChatRoomPage.module.scss
┃ ┃ ┣ 📂error
┃ ┃ ┃ ┣ NotFound.jsx
┃ ┃ ┃ ┗ NotFound.module.scss
┃ ┃ ┣ 📂followersFollowings
┃ ┃ ┃ ┣ followers.jsx
┃ ┃ ┃ ┗ followings.jsx
┃ ┃ ┣ 📂home
┃ ┃ ┃ ┗ Home.jsx
┃ ┃ ┣ 📂login
┃ ┃ ┃ ┣ LoginEmail.jsx
┃ ┃ ┃ ┣ LoginEmail.module.scss
┃ ┃ ┃ ┣ LoginMain.jsx
┃ ┃ ┃ ┗ LoginMain.module.scss
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ PostCreatePage.jsx
┃ ┃ ┃ ┣ PostDetailPage.jsx
┃ ┃ ┃ ┗ PostEditPage.jsx
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ ProductCreatePage.jsx
┃ ┃ ┃ ┣ ProductDetailPage.jsx
┃ ┃ ┃ ┣ ProductEditPage.jsx
┃ ┃ ┃ ┗ ProductListPage.jsx
┃ ┃ ┣ 📂profile
┃ ┃ ┃ ┣ MyProfile.jsx
┃ ┃ ┃ ┣ ProfileEdit.jsx
┃ ┃ ┃ ┣ ProfileEdit.module.scss
┃ ┃ ┃ ┣ ProfileSetup.jsx
┃ ┃ ┃ ┣ ProfileSetup.module.scss
┃ ┃ ┃ ┗ YourProfile.jsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┗ SearchPage.jsx
┃ ┃ ┣ 📂signup
┃ ┃ ┃ ┗ Signup.jsx
┃ ┃ ┗ 📂splash-screen
┃ ┃ ┃ ┗ SplashScreen.jsx
┃ ┣ 📂redux
┃ ┃ ┣ apiSlice.js
┃ ┃ ┣ ApiTest.jsx
┃ ┃ ┣ bottomSlice.js
┃ ┃ ┣ commentSlice.js
┃ ┃ ┣ confirmModalSlice.js
┃ ┃ ┣ optionsModalSlice.js
┃ ┃ ┣ store.js
┃ ┃ ┗ validationSlice.js
┃ ┣ App.jsx
┃ ┣ index.css
┃ ┣ main.jsx
┃ ┗ reset.css
┣ .env
┣ .gitignore
┣ eslint.config.js
┣ index.html
┣ package-lock.json
┣ package.json
┣ README.md
┣ vercel.json
┗ vite.config.js
```

<br />