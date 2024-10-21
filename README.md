# 👨‍💻코드그램(CodeGram)👩‍💻
<img src="https://i.ibb.co/tPTmcRt/2024-10-21-224957.png" alt="코드그램 메인배경" />

<br />

- **배포 URL** : https://codegram-sns.vercel.app
- **테스트 Email** : codegram@codegram.com
- **테스트 Password** : codegram

## 목차
- [1. 프로젝트 개요](#1-프로젝트-개요)
- [2. 프로젝트 팀 구성 및 역할](#2-프로젝트-팀-구성-및-역할)
- [3. 프로젝트 수행 절차 및 방법](#3-프로젝트-수행-절차-및-방법)
- [4. 프로젝트 수행 경과](#4-프로젝트-수행-경과)
- [5. 자체평가](#5-자체평가)

<br />

## 1. 프로젝트 개요
### 주제 및 선정 배경
최근 개발자 간 소통과 협업의 필요성이 증가하면서 자신의 기술 성장을 기록하고 동료들과 지식을 공유하는 것의 중요성이 더욱 커졌지만, 기존 소셜 미디어는 개발자들의 기술적 토론과 피드백 및 프로젝트 공유에 한계가 있다는 점을 발견하였습니다. 이를 해결하기 위해 개발자들이 자신의 기술과 경험을 자유롭게 공유하고 피드백을 주고받는 웹앱 기반 전문 커뮤니티 플랫폼인 CodeGram을 기획하게 되었습니다.

### 기획의도
CodeGram은 개발자들이 작업물과 프로젝트를 공유하고, 다양한 피드백을 통해 성장할 수 있는 커뮤니티를 제공합니다. 팔로우 기능을 통해 개발자 간 네트워크를 확장하고, 단순한 소통을 넘어 프로젝트를 체계적으로 관리할 수 있는 기능을 갖추어, 실무 능력 향상과 상호 성장에 기여합니다. 기존의 유사한 SNS 앱과는 다르게, 개발자들이 서로의 작업물에 대해 활발하게 상호작용을 하며 기술적 논의와 피드백을 주고받을 수 있는 차별화된 경험을 제공합니다.

### 프로젝트 내용
- CodeGram은 개발자들이 코드와 프로젝트를 공유하고, 기술적인 문제에 대한 피드백을 받을 수 있는 커뮤니티 웹앱입니다. 
- EST 프론트엔드 개발 훈련 과정에서 학습한 HTML, CSS, SCSS, JavaScript, React, Redux 등 핵심 기술을 사용해 실제 프로젝트에 적용하며, 개발자 간의 소통과 협업을 지원하는 커뮤니티 플랫폼을 구축하였습니다.
- 이 과정에서 각 기술의 특성과 역할을 이해하고, 효율적인 UI 구현과 상태 관리를 학습했습니다.
- 로그인 및 회원가입, 게시글 CRUD, 팔로우 및 팔로잉, 좋아요, 댓글, 챗봇 등의 기능을 제공하고, 서버와의 데이터 통신 관리를 통해 사용자들이 원활하게 상호작용할 수 있도록 했습니다.
- 또한, 내 작업 등록기능을 통해 개발자들이 자신의 프로젝트를 체계적으로 관리하고 공개적으로 공유할 수 있는 기능을 지원합니다.

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
  - 보고서 작성 (프로젝트 수행 결과, 자체평가의견)
  - 코드그램 로고 수정, 로그인/회원가입 디자인 개선

<br>

### 👩‍💻 이다빈(팀원)
- **UI**
  - 페이지
    - 404 페이지
  - 공통 컴포넌트
    - 버튼 컴포넌트
    - 로딩 컴포넌트
  - 스타일링
    - 챗봇 스타일링
    - CSS 전역 변수정의
- **기능**
  - 좋아요/좋아요 취소 토글
- **그 외**
  - Figma 페이지 디자인 개선
  - 코드그램 로고 제작
  - Readme 작성

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
  - 프로필 수정
  - 팔로우/언팔로우
  - 팔로워/팔로잉 리스트
  - 사용자 목록형/앨범형 게시물 
  - Vertical 메뉴 버튼
- **그 외**
  - Jira 일정관리 세팅
  - 보고서 작성 (프로젝트 개요, 팀구성 및 역할, 수행절차 및 방법)

<br>

### 👨‍💻 양현우(팀원)
- **UI**
  - 페이지
    - 로그인
    - 회원가입
    - 프로필 설정
  - 공통 컴포넌트 : 인풋 컴포넌트
- **기능**
  - API 호출 훅
  - 로그인
  - 회원가입
  - 프로필 설정
  - 챗봇 기능구현
  - 내 작업 목록/상세/삭제

<br>

## 3. 프로젝트 수행 절차 및 방법
### 프로젝트 일정 관리 : [Jira](https://codegram.atlassian.net/jira/core/projects/CODE/board)
<img src="https://ifh.cc/g/5l7N3X.png" width=500 height=300 alt="zira 일정관리" />

|구분|기간|활동|비고|
|:---:|:---:|:---:|:---:|
|사전 기획|09월 23일(월)|주제, 디자인, 프로그래밍 언어, 구현기능범위,배포환경 및 상태관리, 브랜치 및 커밋 규칙, 네이밍 컨벤션 정하기|정기회의 시간 결정|
|개발 전 기본 세팅|09월 24일(화)|폴더 구조 설정, 라이브러리 설치, 공통 컴포넌트/훅 구현, Jira 일정 관리 세팅, Figma 디자인 수정|협업 도구 GitHub 사용|
|기능 개발|09월 25일(수) ~ 10월 13일(일)|게시글/피드, 챗봇, 프로필 각 페이지 관련 세부 기능 구현 작업|회의를 통한 역할 재분배|
|퍼블리싱|10/14(월) ~ 10/16(수)|게시글/피드, 챗봇, 프로필 각 페이지 관련 UI 작업||
|테스팅 및 배포|10/17(목) ~ 10/18(금)|배포 도구 Vercel을 사용해 배포 및 테스팅 진행||
|오류 수정 및 리팩토링|10/19(토) ~ 10/20(일)|잦은 테스트로 발견한 버그 수정 및 리팩토링||
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

* **SASS** : CSS의 유지보수성과 재사용성을 높이기 위해 SCSS문법을 채택하여 스타일 관리.

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

* **Node.js** : 브라우저 내에서 말고도 다른 환경에서 JavaScript를 실행하여 서버단 로직을 처리
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
- 커밋 컨벤션, 코딩 컨벤션을 공유합니다.
- 진행 상황을 공유하고, 이를 바탕으로 회의록을 작성합니다.

<img src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" alt="Jira" />

- [**Jira**](https://codegram.atlassian.net/jira/core/projects/CODE/board) : 프로젝트 관리 및 일정관리

<img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />

- [**Figma**](https://www.figma.com/design/BOWqiGyimXDKi3oSwytrxU/%EC%BD%94%EB%93%9C%EA%B7%B8%EB%9E%A8?node-id=113664-1337&node-type=frame&t=KHXfPMLzz9staN7z-0) : 페이지 디자인 작업

<br />

### 핵심기능
- 회원가입 및 로그인 : 이메일 형식과 비밀번호 조건 실시간 유효성 검사.
- 프로필 관리 : 프로필 설정 및 수정 기능 제공.
- 게시물 CRUD 및 피드 : 텍스트와 최대 3장의 이미지를 포함한 게시물 관리.
- 좋아요 및 댓글 기능 : Redux를 사용하여 댓글 수 관리 및 실시간 댓글 업데이트.
- 챗봇 서비스 : IT 및 취업 관련 질문에 대한 응답 기능.
- 사용자 검색 및 팔로우 : 다른 사용자를 검색하고 팔로우할 수 있는 기능.
- 작업물 CRUD 기능 : 사용자가 자신의 작업물을 등록하여 프로필에 표시.

### 구현방법 및 과정
1. 기획 : 팀원 간 논의를 통해 핵심 기능 선정.
2. 팀 프로세스 수립 : 개발 언어, 브랜치 전략, 명명 규칙 등 설정.
3. 디자인 및 설계 : Figma를 통한 UI/UX 설계.
4. 요구 사항 분석 : 주요 기능 분석 및 설계.
5. 프로젝트 구조 설계 : 컴포넌트 폴더 및 Redux 슬라이스, hooks 구성.

6. 공통 컴포넌트 및 커스텀훅 구현
#### 6-1. UI 컴포넌트
- 버튼 컴포넌트: 버튼의 스타일, 텍스트, 클릭 동작을 동적으로 주입하여 재사용.
- 인풋 컴포넌트: 인풋 타입과 placeholder, value 등을 동적으로 받아 동일한 UI를 재사용.
- 모달 컴포넌트: 타이틀, 내용, 버튼, 동작 등을 동적으로 변경해 동일한 UI를 재사용.
- 로딩 컴포넌트:  여러 페이지에서 데이터를 가져오는 동안 로딩 애니메이션을 공통으로 재사용.
- 이미지 업로드 버튼: 여러 페이지에서 이미지 업로드 기능 재사용.
- 뒤로가기 버튼: 페이지 간 뒤로 이동하는 버튼을 하나의 컴포넌트로 만들어 재사용.

#### 6-2. 폼 컴포넌트: Input 컴포넌트와 Button 컴포넌트 등을 활용하여 재사용성을 극대화.
- 로그인 및 회원가입 폼: 이메일과 비밀번호 입력 필드 및 로그인/회원가입 버튼 포함.
- 게시물 작성 폼: 제목과 내용 입력 필드, 이미지 업로드 필드, 게시물 저장 버튼 포함.
- 작업물 등록 폼: 작업물 제목과 설명 입력 필드, 등록 버튼 포함.
- 채팅폼: 메시지 입력 필드와 전송 버튼 포함.

#### 6-3. 페이지별 컴포넌트
- 각 페이지에 필요한 컴포넌트를 별도의 폴더로 구성하여 관련 기능을 묶음.

#### 6-4. 재사용 가능한 훅
- API 호출 관리 훅: fetch와 async/await를 활용해 비동기 처리 및 로딩 상태와 오류 처리를 일관되게 관리.
- 모달 관리 훅: 여러 컴포넌트에서 다양한 옵션으로 모달의 내용을 동적으로 설정하여 사용하도록 구현.
- 스크롤관리훅: 스크롤에 따라 헤더의 가시성을 관리하여 사용자 경험을 개선.

#### 6-5. Redux 슬라이스
- API 관리 슬라이스: API 호출 상태(로딩, 성공, 실패) 및 데이터를 관리하여 전역적으로 접근.
- 모달관리 슬라이스: 모달의 열림/닫힘 상태와 관련된 데이터를 관리하여 여러 컴포넌트에서 모달을 쉽게 사용. 
- 댓글 수 관리 슬라이스: 각 게시물에 대한 댓글 수를 관리하여 실시간으로 업데이트.
- 바텀탭 슬라이스: 활성화된 바텀탭을 관리하여 사용자가 선택한 탭을 기억하고 UI에 반영.

7. 미리 제작한 컴포넌트와 훅을 활용해 페이지별로 기능 구현
게시물 CRUD
- Item 컴포넌트: 게시물 데이터를 받아 동일한 UI로 렌더링. 피드에서 여러 게시물을 반복 렌더링할 때 사용.
- Form 컴포넌트: 게시물 생성과 수정에서 재사용. 사용자가 입력한 데이터를 기반으로 게시물을 작성하거나 수정.
- Create (생성): Form컴포넌트를 사용하여 새로운 게시물 작성 후, 작성된 데이터를 Item컴포넌트로 렌더링.
- Read (읽기): 서버에서 받아온 게시물 목록을 map을 사용하여 PostItem으로 반복 렌더링.
- Update (수정): 수정 버튼 클릭 시 PostForm으로 데이터 편집 후 서버에 저장하고 다시 렌더링.
- Delete (삭제): 삭제 요청 후 게시물을 목록에서 제거하고, UI를 재렌더링.

8. 테스트 및 오류수정
- 유닛 테스트와 통합 테스트를 통해 코드 품질을 보장. 
- 오류를 수정하여 기능의 안정성을 높임.


### 구현 결과
- 사용자가 쉽게 정보를 공유하고 소통할 수 있는 개발자 커뮤니티 플랫폼 구현.

### 피드백 내용 및 보완한 내용
- 각 팀원은 개발 중인 컴포넌트에 대해 정기적으로 코드 리뷰를 진행하여, UI 일관성을 유지하고, 사용자 경험을 향상시키기 위한 피드백을 제공.
- UI/UX 개선: 스크롤할 때 헤더가 자연스럽게 숨겨지거나 나타나도록 수정. 이를 통해 화면 공간을 효율적으로 활용하고, 사용자에게 보다 집중된 경험을 제공하도록 함.
- 컴포넌트 리팩토링: 코드 리뷰 과정에서 중복되는 컴포넌트를 발견하고 이를 통합하여 코드의 가독성을 높이고 유지보수성을 개선.
- Redux 상태 관리 개선: Redux 슬라이스에서 불필요한 상태를 제거하고, 필요한 상태만을 저장하도록 최적화하여 성능을 개선.

### 앞으로의 계획
- 리액트 쿼리를 활용한 상태 관리 업데이트.
- 타입스크립트 적용으로 코드 안정성 향상.
- 코드 하이라이팅 지원 기능 추가.
- 사용자 간 채팅 기능 추가로 소통 강화.

<br />

## 5. 자체평가
### 기획의도와의 부합정도
- 개발자 커뮤니티 플랫폼을 구현하기 위한 목표에 부합.
- 사용자가 쉽게 정보를 공유하고 소통할 수 있는 기능을 제공함. 
- 핵심 기능이 잘 구현되었으며, 사용자 요구를 충족시키기 위한 노력이 반영됨.

### 실무 활용 가능성
- 사용된 기술 스택(React, Redux Toolkit, SCSS, React Query 등)은 실제 업무 환경에서도 많이 사용될 것으로 예상. 
- 개발한 플랫폼은 개발자 간의 소통과 협업을 촉진하는 데 기여할 수 있는 기능을 갖추고 있음.

### 달성도
- 설정한 목표에 대해 비교적 높은 달성도를 보였다고 생각 됨.
- 회원가입, 로그인, 게시물 CRUD 기능, 댓글 및 좋아요 기능, 유저 검색 및 팔로잉 등 
주요 기능이 정상적으로 구현되어 사용자 경험을 최적화 함.

### 완성도 평가 (8점)
대부분의 기능이 원활하게 작동하고 UI/UX가 개선되어 꽤나 완성도있게 작업. 
몇 가지 추가 기능이나 개선이 이루어지면 더욱 완벽한 결과물이 될 것이라고 생각함.

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

### 아쉬운 점
- 테스트 부족
기능 구현 후 충분한 테스트를 진행할 시간이 부족하여 일부 버그가 발견됨. 이러한 오류를 고치기는 했지만, 충분한 시간을 할애하지 못하여 사용자에게 불편을 초래할 가능성이 있었음. 
향후 프로젝트에서는 테스트를 보다 철저히 진행하고, 오류 수정에 충분한 시간을 할애해야겠다고 느낌.

- 기술적 및 소통의 어려움
프로젝트 진행 중 일부 기능구현에서 기술적인 어려움이 있었고, 이로 인해 팀원 간의 소통이 원활하지 않아 프로젝트가 지연되는 경우가 있었음. 
초기 단계부터 팀원 간의 소통을 강화하고 기술적 지원을 제공할 필요성이 있다고 느낌.

- 기능 구현의 일부 대체
초기 기획 단계에서 고려했던 사용자 간의 채팅 기능을 챗봇 기능으로 대체함. 사용자 소통을 강화하려고 했지만, 직접적인 사용자 간의 소통을 통한 깊이 있는 경험은 부족한 점이 아쉬움. 
그러나 챗봇 기능이 제공하는 자동화된 응답과 정보 제공은 오히려 더 효율적이고 유용한 부분도 있음.
향후 프로젝트에서는 채팅 기능을 포함하는 방향으로 다시 검토할 계획.

### 결과물의 추후 개선점 및 보완할 점
**추가 기능 개발**
- 사용자 간 채팅 기능 지원
- 코드 하이라이팅 지원 기능을 추가하여 사용자 경험을 더욱 향상시킬 수 있음.

**리액트 쿼리 활용**
- 상태 관리를 리액트 쿼리로 업데이트
- 성능을 개선하고 더 나은 데이터 패칭을 구현할 예정.

**타입스크립트 적용**
- 코드의 안정성을 높이기 위해 프로젝트에 타입스크립트를 도입할 계획.

**팀워크의 중요성**
- 팀원들과의 소통과 협력이 프로젝트 성공의 핵심 요소임을 실감.
- 정기적인 회의를 통해 의견을 공유하고 문제를 해결하는 과정에서 팀워크가 더욱 강화됨.

**재사용 가능성의 가치**
- 재사용 가능한 컴포넌트와 훅을 설계함으로써 코드의 가독성과 유지보수성이 향상. 
- 이러한 경험은 앞으로의 프로젝트에서도 큰 도움이 될 것이라 느낌.

**문제 해결 능력 향상**
- 프로젝트 진행 중 발생한 문제를 함께 논의하고 해결하는 과정을 통해 문제 해결 능력이 향상됨.

**실무 경험의 가치**
- 실무에서 사용할 수 있는 기술과 프로세스를 경험함으로써 향후 커리어에 큰 도움이 될 것이라고 느낌.



## 브랜치 전략
- **main** 브랜치는 실제 배포를 하는 브랜치로 사용하였습니다.
- 브랜치는 기능별로 따로 만들어서 관리. 
feature/login과 같이 타입과 기능을 나타내는 짧고 명확한 이름을 사용.
<br />

### 커밋 컨벤션
<details>
<summary>타입 리스트 접기/펼치기</summary>
<div markdown="1">

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
</div>
</details>
<br />

### 코딩 컨벤션
- [코딩 컨벤션]()
<br />

## 프로젝트 폴더구조
<details>
<summary>폴더구조 접기/펼치기</summary>
<div markdown="1">

```
┌─ codegram-sns(Root)
├ 📂.git                        # git이 관리할 폴더
├ 📂node_modules
├ 📂public                      # 전역에서 사용할 파일
│ ├── favicon.ico
│ ├── loading.gif
│ └── vite.svg
├ 📂src
│ ├ 📂assets                    # 컴포넌트 내에서만 사용할 파일
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
│ ├ 📂redux
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
### 이서림
[PostItem 컴포넌트의 모달 중복 렌더링 문제](https://github.com/seoriml/codegram-sns/wiki/PostItem-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EB%AA%A8%EB%8B%AC-%EC%A4%91%EB%B3%B5-%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%AC%B8%EC%A0%9C)

### 이다빈

### 윤혜림

### 양현우

<br />

## 아쉬운 점
- **테스트 부족**
  - 기능 구현 후 충분한 테스트를 진행할 시간이 부족하여 일부 버그가 발견되었습니다. 이러한 오류를 고치기는 했지만, 충분한 시간을 할애하지 못하여 사용자에게 불편을 초래할 가능성이 있었습니다. 향후 프로젝트에서는 테스트를 보다 철저히 진행하고, 오류 수정에 충분한 시간을 할애해야겠다고 느꼈습니다.

- **기술적 및 소통의 어려움**
  - 프로젝트 진행 중 기술적인 부분에서 어려움이 있었고, 이에 따라 팀원 간의 소통이 원활하지 않아 프로젝트가 지연되기도 하였습니다. 이러한 점을 개선하기 위해 앞으로는 초기 단계부터 팀원 간의 소통을 강화하고 기술적 지원을 제공할 필요성이 있음을 깨달았습니다.

- **기능 구현의 일부 대체**
  - 초기 기획 단계에서 고려했던 사용자 간의 채팅 기능을 챗봇 기능으로 대체하였습니다. 사용자 소통을 강화하려고 했지만, 직접적인 사용자 간의 소통을 통한 깊이 있는 경험은 부족한 점이 아쉬웠습니다. 그러나 챗봇 기능이 제공하는 자동화된 응답과 정보 제공은 오히려 더 효율적이고 유용한 부분도 있었습니다. 향후 프로젝트에서는 채팅 기능을 포함하는 방향으로 다시 검토할 계획입니다.

## 추후 개선 목표
- **코드 하이라이팅 지원**
  - 사용자가 코드를 공유하면 어떤 언어인지에 따라서 코드가 강조되어 표시되는 라이브러리 사용해보기
  - 주 사용자 직업이 개발자인 만큼, 가독성 관련 편의성을 높여야 합니다.
**사용자 채팅기능**
<br />

## 프로젝트 후기

### 👩‍💻 이서림
이번 팀 프로젝트를 통해 기획, 개발, 테스트의 전 과정을 경험하면서 많은 것을 배웠습니다. 팀워크의 중요성을 깊이 깨달았고, 원활한 소통이 프로젝트 성공에 얼마나 중요한지 실감했습니다. 초기 기획 단계에서 핵심 기능을 선정하고 각자의 역할을 명확히 하여 프로젝트 방향성을 설정한 경험이 특히 기억에 남습니다.미리 설정된 팀 프로세스는 협업을 강화하는 데 큰 도움이 되었고, 재사용 가능한 컴포넌트와 훅을 설계하면서 그 가치를 체감하게 되었습니다. 문제 발생 시 팀원들과 논의하며 해결하는 과정은 제 문제 해결 능력을 한층 더 키울 수 있는 기회가 되었습니다.
이 프로젝트를 통해 팀과 함께 성장해 나가는 것의 소중함을 느꼈고, 앞으로도 더 나은 결과를 위해 계속해서 노력하겠습니다. 팀원분들 모두 고생 많으셨습니다! 

<br>

### 👩‍💻 이다빈
<!-- 첫 팀 프로젝트 -->

<br>

### 👩‍💻 윤혜림
팀 프로젝트를 진행하며 프론트엔드 개발에서 중요한 다양한 기술들을 실습하고 적용할 수 있었습니다. 부족한 부분은 공부를 통해 보완해 나갔고, 각종 기술 스택을 활용해 실무적인 문제를 해결하는 경험은 저에게 큰 성장의 기회가 되었습니다.
또한, 팀워크의 중요성을 다시 한번 느낄 수 있었습니다. 각 팀원이 맡은 역할을 책임감 있게 수행하고, Pull Requsets를 통해 주기적으로 코드를 리뷰하며 피드백을 주고받음으로써 코드의 품질을 향상시키고 서로의 아이디어를 반영해 프로젝트의 완성도를 높일 수 있었습니다. 이 과정에서 협업의 상호 보완적인 역할 분담과 의견 조율의 중요성도 느낄 수 있었고, 이를 통해 더 나은 결과물을 만들어낼 수 있었습니다.
앞으로도 이러한 경험을 바탕으로 더 발전된 개발자로 성장하도록 노력하겠습니다. 한 달이라는 기간 동안 동일한 목표를 향해 함께 노력한 만큼 좋은 성과를 이룰 수 있었다고 생각합니다. 어려움이 많았지만 팀원분들 덕분에 많이 배울 수 있었습니다. 모두 고생 많으셨습니다!
<br>

### 👨‍💻 양현우

<br>

## 회의록

[회의록](https://github.com/seoriml/codegram-sns/wiki/2024%E2%80%9009%E2%80%9019-%ED%9A%8C%EC%9D%98%EB%A1%9D)




