# CodeGram

## 프로젝트 개요
- 프로젝트명: 코드그램 (Codegram)
- 주제: 웹앱형식의 개발자 SNS 플랫폼으로, 개발자들이 코드, 프로젝트, 기술 및 일상을 공유하고 피드백을 주고받을 수 있는 커뮤니티.

## 명명 규칙
변수 및 함수 클래스
- 변수: camelCase (예: userName, postCount)
- 함수: camelCase (예: fetchUserData, handleSubmit)
- 클래스 및 ID: camelCase
### 상수
- UPPER_SNAKE_CASE (예: MAX_LENGTH, API_URL)


## 타입 리스트
```
• feat: 기능 개발
• fix: 버그 및 에러 수정
• refactor: 리팩토링
• design: UI 디자인 변경 및 이미지
• comment: 주석 추가 및 변경
• style: 스타일 변경
• docs: README 문서 수정
• test: 테스트 코드 추가/수정
• chore: 기타 변경사항 및 빌드 스크립트
• init: 초기 파일 생성
• rename: 파일/폴더명 수정
• remove: 파일 삭제
```

## 컴포넌트 구성
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
테스트 완료 후 main 브랜치에 병합하여 실제 배포

## 기타
프로젝트 일정은 Jira를 통해 관리

## 파일 및 폴더구조
```
┏ codegram-sns(Root)
┣ 📂public
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┗ 📂images
┃ ┣ 📂components
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┣ AuthForm.jsx
┃ ┃ ┃ ┗ AuthHeader.jsx
┃ ┃ ┣ 📂follower
┃ ┃ ┃ ┣ FollowerItem.jsx
┃ ┃ ┃ ┗ FollowerList.jsx
┃ ┃ ┣ 📂home
┃ ┃ ┃ ┣ EmptyFeed.jsx
┃ ┃ ┃ ┗ PostFeed.jsx
┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┣ 📂bot-nav
┃ ┃ ┃ ┃ ┣ BottomNavigation.jsx
┃ ┃ ┃ ┃ ┗ BottomNavigation.module.scss
┃ ┃ ┃ ┗ 📂top-nav
┃ ┃ ┃ ┃ ┣ TopBasicNav.jsx
┃ ┃ ┃ ┃ ┣ TopChatNav.jsx
┃ ┃ ┃ ┃ ┣ TopMainNav.jsx
┃ ┃ ┃ ┃ ┣ TopSearchNav.jsx
┃ ┃ ┃ ┃ ┗ TopUploadNav.jsx
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ 📂post
┃ ┃ ┃ ┃ ┣ 📂comment
┃ ┃ ┃ ┃ ┃ ┣ Comment.jsx
┃ ┃ ┃ ┃ ┃ ┣ Comment.module.scss
┃ ┃ ┃ ┃ ┃ ┗ CommentSection.jsx
┃ ┃ ┃ ┃ ┣ 📂post-action
┃ ┃ ┃ ┃ ┃ ┣ CommentButton.jsx
┃ ┃ ┃ ┃ ┃ ┣ LikeButton.jsx
┃ ┃ ┃ ┃ ┃ ┗ PostAction.jsx
┃ ┃ ┃ ┃ ┣ PostContent.jsx
┃ ┃ ┃ ┃ ┗ PostImage.jsx
┃ ┃ ┃ ┗ 📂post-create-edit
┃ ┃ ┃ ┃ ┣ ImageUploadBtn.jsx
┃ ┃ ┃ ┃ ┗ PostForm.jsx
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ ProductForm.jsx
┃ ┃ ┃ ┗ ProductImage.jsx
┃ ┃ ┣ 📂profile
┃ ┃ ┃ ┣ 📂portfolio
┃ ┃ ┃ ┃ ┣ Portfolio.jsx
┃ ┃ ┃ ┃ ┣ Portfolio.module.scss
┃ ┃ ┃ ┃ ┗ PortfolioItem.jsx
┃ ┃ ┃ ┣ 📂profile-info
┃ ┃ ┃ ┃ ┣ PostGrid.jsx
┃ ┃ ┃ ┃ ┣ PostList.jsx
┃ ┃ ┃ ┃ ┣ ProfileActions.jsx
┃ ┃ ┃ ┃ ┣ ProfileInfo.jsx
┃ ┃ ┃ ┃ ┗ ProfileTabs.jsx
┃ ┃ ┃ ┣ 📂profile-settings
┃ ┃ ┃ ┃ ┣ ProfileForm.jsx
┃ ┃ ┃ ┃ ┗ ProfileForm.module.scss
┃ ┃ ┃ ┗ ProfileImage.jsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┣ SearchResults.jsx
┃ ┃ ┃ ┗ UserResult.jsx
┃ ┃ ┗ 📂ui
┃ ┃ ┃ ┣ 📂modal
┃ ┃ ┃ ┃ ┣ ConfirmModal.jsx
┃ ┃ ┃ ┃ ┣ Modal.module.scss
┃ ┃ ┃ ┃ ┗ OptionsModal.jsx
┃ ┃ ┃ ┣ Button.jsx
┃ ┃ ┃ ┣ Button.module.scss
┃ ┃ ┃ ┣ Button.scss
┃ ┃ ┃ ┣ Input.jsx
┃ ┃ ┃ ┣ Input.module.scss
┃ ┃ ┃ ┣ InputField.jsx
┃ ┃ ┃ ┗ Layout.jsx
┃ ┣ 📂hooks
┃ ┃ ┣ useAPI.js
┃ ┃ ┗ useModal.js
┃ ┣ 📂pages
┃ ┃ ┣ 📂chat
┃ ┃ ┣ ChatRoomPage.jsx
┃ ┃ ┗ ChatRoomPage.module.scss
┃ ┃ ┣ 📂error
┃ ┃ ┃ ┣ NotFound.jsx
┃ ┃ ┃ ┗ NotFound.module.scss
┃ ┃ ┣ 📂followers-followings
┃ ┃ ┃ ┣ followers.jsx
┃ ┃ ┃ ┗ followings.jsx
┃ ┃ ┣ 📂home
┃ ┃ ┃ ┗ Home.jsx
┃ ┃ ┣ 📂login
┃ ┃ ┃ ┣ LoginEmail.jsx
┃ ┃ ┃ ┗ LoginMain.jsx
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ Post.jsx
┃ ┃ ┃ ┣ PostCreate.jsx
┃ ┃ ┃ ┗ PostEdit.jsx
┃ ┃ ┣ 📂product
┃ ┃ ┃ ┣ ProductCreate.jsx
┃ ┃ ┃ ┗ ProductEdit.jsx
┃ ┃ ┣ 📂profile
┃ ┃ ┃ ┣ MyProfile.jsx
┃ ┃ ┃ ┣ ProfileEdit.jsx
┃ ┃ ┃ ┣ ProfileSetup.jsx
┃ ┃ ┃ ┗ YourProfile.jsx
┃ ┃ ┣ 📂search
┃ ┃ ┃ ┗ Search.jsx
┃ ┃ ┣ 📂signup
┃ ┃ ┃ ┗ Signup.jsx
┃ ┃ ┣ 📂splash-screen
┃ ┃ ┃ ┗ SplashScreen.jsx
┃ ┃ ┣ ModalExample.jsx
┃ ┃ ┗ Page404.jsx
┃ ┣ 📂redux
┃ ┃ ┣ actions.js
┃ ┃ ┣ modalSlice.js
┃ ┃ ┣ reducers.js
┃ ┃ ┗ store.js
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
┗ vite.config.js
```