## 221021

### 종현

- 프론트 초기 셋팅
  > - `CRA, Typescript` 프로젝트 생성
  > - `jest, testing` 모듈 제거
  > - `msw` 초기 셋팅 완료
  > - `styled-component` 초기 셋팅 완료
  > - `react-router` 초기 셋팅 완료
  > - 필요한 페이지 생성
  > - `router` 경로 초기 설정 완료
  > - `minireset.min.css` 설정 완료
  > - `eslint + prettier` 설정 완료

## 221024

### 종현

- 파일 디렉토리 수정
  > - 누락 페이지 생성 `ProjectCreatePage, WidgetSelectPage`
  > - 페이지 수정 `issuePage` -> `BucketPage`
- Text 컴포넌트 구현
  > - `index.tsx`, `style.ts` 생성
  > - 동적 `props` 할당

## 221025

### 종현

- Text 컴포넌트 구현
  > - `isFill` 적용, `true` 시 `Fill` 컴포넌트가 `false` 시 `Text` 컴포넌트가 생성됨
  > - `Text` 전체 `props` 설정완료
  > - `Fill` 컴포넌트 `width`를 통해, 자동 형태 구축할 수 있도록 조정
  > - `defaultProps` 수정 완료
- Select 컴포넌트 구현
  > - `children` 설정
  > - `width`, `font-size` 동적 설정
  > - 와이어 프레임과 유사하게 설정

### 준혁

- front/src/RouterWrapper 주소별로 주석 추가함

- front/tsconfig.json 수정

  > - `compilerOptions` 에 `"baseUrl": "src"` 항목을 추가함.
  > - 앞의 경로 언급이 없다면 src/ 부터 생각한다.
  > - `import Something from '../../../components/atom` 같은 항목을 `from components/atom` 으로 선언가능

- atom 제작
  > - style 관련 props 는 style.ts의 styleType에 묶고 index.tsx에서 styleType을 상속한 propsType가 다른 props 들을 정의한다.
  > - defaultStyle 적용
  > - Sheet, Input 만들어둠

### 성현

- Button
  > - `backgroundColor`, `borderColor` default값 #FFFFFF로 설정. 사용 시 주의
  > - `isHover` 적용 시 hover 기능 추가. 색상은 `borderColor` 색상을 따라감.
  > - `isDisabled` 적용 시 버튼 비활성화. 비활성화 시 클릭 불가

## 221026

### 종현

- Tab 컴포넌트 구현
  > - `activated` 를 따라 `background-color` 다르게 설정
  > - `react-router`를 통한 `link` 이동을 위해 `clickHandler` 설정
- `theme.ts`
  > - 필요한 전역 색 설정완료
  > - `primary`, `secondary`, `epic`, `bug`, `task`, `story`
- `minireset.min.css`
  > - `min` 형태로 재설정

### 준혁

- MR 수정 요구 적용
  > - `src/components/atom/Sheet/` 와 `Input` 의 index와 style 에 props 값을 구조 분해 할당함
  > - `src/components/atom/Sheet/` 와 `Input` 의 height, width 는 기존 넘버에서 px, rem 등 다양한 상황을 위하여 문자열 타입으로 변경함
  > - `src/components/atom/input/` 은 InputBox molecule 을 상정하지 않고 개발되어 수정함

### 성현

- Circle
  > - 디자인 효과 `isDropShadow`, `isInnerShadow` 추가. 각각 Figma의 Drop Shadow, Inner Shadow 효과 부여
  > - 클릭 효과 `isClickable` 추가. cursor: pointer 기능 부여

## 221027

### 종현

- `navProject` 컴포넌트
  > - 디자인 완료
  > - `tabs` 데이터 설정
  > - `activatedToggleHandler` : 하나의 `tab`이 활성화되면, 다른 `tab`은 비활성화 화는 이벤트

### 준혁

- `src\components\molecules\WidgetBlock` 제작

  > - 디폴트 값은 높이 180px, 넓이 400px 이다.

- 전체 프리텐다드 글꼴 적용

  > - `src\index.css` 에 해당 폰트 적용

  > ```css
  > code {
  >   font-family: Pretendard, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  > }
  >
  > @font-face {
  >   font-family: 'Pretendard';
  >   src: url('assets/font/PretendardVariable.ttf');
  > }
  > ```

- `.gitignore` 설정 추가

  > - 깃에 올리지 않을 테스트 용 코드를 사용하기 위해 다음의 법칙을 추가함
  > - `*.local.*`

### 성현

- TextArea
  > - defaultValue 옵션 적용. React에서는 value 옵션 적용 시 수정이 불가능했음

## 221028

### 종현

- `NavProject` 컴포넌트
  > - `closeTabHandler` : `tab`을 삭제하는 이벤트
  > - `closeTabHandler` 에러
  > - 컴포넌트 제 랜더링 시 이전의 idx가 그대로 반영되는 에러
  > - idx가 가지고 있는 데이터 갯수보다 큰 경우와 0보다 작은 경우로 나누어 해결
  > - `recoil - projectList` 로 프로젝트 데이터 이동
  > - 삭제 이벤트, `activate` 이벤트 모두 정상작동
- `recoil` 설치
  > - `recoil` 세팅
  > - `recoil` `project` 관리용 `atoms` 생성

### 준혁

- `src\components\molecules\WidgetBlock` tailwindcss 를 twin macro 기반 적용

### 성현

- Button, Circle, TextArea
  > - props 컨벤션 적용
  > - tailwind 적용

## 221029

### 종현

- `NavProject` 컴포넌트, 이벤트 구성 완료
  > - 실제 브라우저 탭과 동일한 기능을 반영
  > - 실제 서비스 플로우와 연결 시 에러날 가능성 있음
  > - 문제가 나면 일단 그때 찾아보자
  > - 특정 경로에서 `HeaderNav` 적용되지 않도록 적용
  > - 탭 클릭 시 `projects/:projectId`로 이동
  > - 모든 프로젝트 탭 종료 시 `ProjectSelectPage`로 이동하게 설정

## 221030

### 종현

- `NavWidget` 컴포넌트, 이벤트 구성 완료
  > - `recoil` projectList 데이터에 widgetList 추가
  > - `NavProject`의 삭제, 토글 이벤트와 동일하게 적용
  > - 해당 `widget` 탭마다 경로 이동하도록 설정
  > - 대시보드 페이지 및 위젯 생성 페이지는 삭제가 이루어지지 않도록 설정

### 준혁

- 드래그 앤 드롭을 위한 사전 세팅

  > - 클래스를 조건에 맞춰서 조작하는 라이브러리 설치
  >
  > ```
  > npm install --save @types/classnames
  > ```
  >
  > - 테스트 시, 드래그하는 객체의 PK 값을 위한 PK 생성 라이브러리 설치
  >
  > ```
  >
  > npm i --save-dev @types/shortid
  >
  > ```
  >
  > - 드래그 앤 드랍을 구현해주는 라이브러리 설치
  >
  > ```
  >
  > react-dnd install
  >
  > ```
  >
  > - onDrag 에 타입을 설정하지 않는다면 Uncaught Invariant Violation: spec.type must be defined 에러를 뱉으니 주의

## 221031

### 종현

- `InputBox` 컴포넌트 구현
  > - `isRow` 값 마다 `row` 혹은 `column` 방향의 컴포넌트 생성
  > - `label~` label에 대한 style 및 값을 담당
  > - `Container~` box 전체의 style을 담당
  > - `Input~` Input 컴포넌트에 필요한 props를 담당
- `Option` 컴포넌트 구현
  > - `string[]` 데이터를 보내는 경우, 자동으로 배열 갯수만큼 `<option>` 태그를 반환하는 컴포넌트
- `SelectBox` 컴포넌트 구현
  > - 기본 디자인 구현 완료
  > - `Option` 태그 안에 `img, svg`가 적요되지 않는 문제 발생
  > - 찾아본 결과, 기본 리액트 안에서는 `<option>`에 컴포넌트나 이미지가 반영되지 않음
  > - 이를 위한 대안으로 `react-select` 라이브러리 있음
  > - `selectBox` 를 많이 사용하지 않아서, 설치 없이 `icon`을 반영하지 않는 것으로 결정

### 준혁

- `DashBoard` 페이지 구현
  > - 드래그앤 드롭에 맞게 페이지 조작
  > - 행과 열로 통제

### 성현

- `Issue` 컴포넌트 UI 구현
  > - 이슈 템플릿의 정보를 받아서 간략하게 표기해줌
  > - `type` props에 `story` `task` `bug` 중 하나의 값을 부여 시 유형에 따라 스타일링해줌.
- `IssueBar` 컴포넌트 UI 구현
  > - 미들 버킷에 들어간 이슈 템플릿을 막대 형태로 표기해줌
  > - `type` props에 `story` `task` `bug` 중 하나의 값을 부여 시 유형에 따라 스타일링해줌.
- `ProjectItem` 컴포넌트 UI 구현
  > - 사용자의 Jira 프로젝트의 정보를 표기
  > - 클릭 시 해당 프로젝트로 이동(예정)

## 221101

### 종현

- `Notification` 컴포넌트 구현
  > - `check` 값에 따라 에러 혹은 확인 요청을 알려줌
  > - `message` prop에 메시지를 담을 수 있음
  > - `width` 값 설정 가능
  > - `millisecond`를 통해, 애니메이션 지속 시간 설정 가능
- `TextAreaBox` 컴포넌트 구현
  > - `isRow` 값 마다 `row` 혹은 `column` 방향의 컴포넌트 생성
  > - `label~` label에 대한 style 및 값을 담당
  > - `Container~` box 전체의 style을 담당
  > - `TextArea~` Input 컴포넌트에 필요한 props를 담당
- `TextArea` 컴포넌트 수정
  > - `width`, `height`의 타입을 `string` 으로 수정
  > - `styled.input` -> `styled.textarea`
- `Calendar API` 학습
  > - `Calendar API` react 렌더링 완료
  > - `styled component` 디자인 리팩토링

### 준혁

- `components/atoms/Sheet` props 수정
- `api/rest` 제작
  > - `Token` 저장 위치에 대한 장단점에 대한 학습
  > - CSRF 공격 : Cross Site Request Forgery, 정상적인 request를 중간에 가로채 변조된 request 를 보내 피해자의 요청인 척 보안을 뚫는 공격
  > - XSS 공격 : Cross Site Scripting, 또는 code injection attack, 인젝션 에러, 악의적인 js 코드를 서버가 읽게 하는 공격
  > - 일반적으로 토큰은 localStorage나 cookie에 저장함. 장단이 존재
  > - localStorage에 저장 시, js 코드에 의하여 헤더에 토큰이 담겨 CSRF 공격에 안전함, 공격자가 로컬스토리지 토큰 값을 쉽게 조작하므로 XSS 공격에 매우 취약
  > - cookie에 저장 시, httpOnly 옵션 시, Js에서 쿠키 접근 자체가 불가하여 XSS 공격에 안전함, 토큰이 자동으로 request에 실리므로 CSRF 공격에 취약

### 성현

- `TokenBox` 컴포넌트 UI 구현
  > - `Input`에 Jira 토큰 입력 시 프로젝트 리스트 도출 후 컴포넌트 생성 가능(예정)
- `Issue` `IssueBar` `ProjectItem` 컴포넌트 코드 수정

## 221102

### 종현

- `HeaderNav` 경로 이동 에러 해결
  > - 프로젝트 탭에서 위젯 탭을 활성화시킨 후, 다른 프로젝트 탭을 보다가 다시 이전의 프로젝트 탭으로 돌아오는 경우, 해당 위젯은 활성화 되어있으나 경로는 dashboard 경로로 되어있는 문제 발생
  > - 다른 탭에 이동하는 경우 무조건 dashboard 위젯이 활성화 되게 끔 설계 변경
- 경로 및 파일 디렉토리 재설정
  >- 노션에 내용 정리
- Calendar API
  >- Issue 컴포넌트를 가져와서 Calendar 매핑하는 것이 성공
  >- 다양한 편의 기능 더 만들어보기로
  > - 노션에 내용 정리

### 준혁

- `api/axios` 코드 수정

  > - 전체 커스텀 axios 객체들의 설정을 조작하는 메서드 제작

- 로그인 로직 완성

### 성현

- `IssueInfo` 컴포넌트 생성 및 UI 작업
  >- 이슈 템플릿 클릭 시 템플릿에 대한 정보를 띄우는 컴포넌트.

## 221103

### 종현

- `HeaderInit 생성`
  > -  비 서비스에 필요한 네비게이션 바 컴포넌트 생성
  > - 로그인 혹은 로그아웃 시 `localStorage` 확인하여 다른 버튼 반환
  > - 버튼들은 추후에 다시 손 보기로
- `Header`
  > - 기존 네비게이션이 너무 크다!
  > - 실제 브라우저와 비슷하게 리사이징 완료


### 성현

- `IssueInfo` 기능 작업
  >- 이슈 템플릿 클릭 시 템플릿에 대한 정보를 띄운다.
  >- selectbox에 값이 안 뜨는 문제가 있어서 해결
  >- inputbox에 값을 입력 후 이슈 템플릿을 클릭하면 컴포넌트에 값 표시가 안 되는 문제 발생.

## 221104

### 종현

- `HeaderInit`
  > - `+` 버튼 클릭 시 프로젝트 선택 페이지로 이동하도록 설정
- `ProjectSelectPage`
  > - 폴더화 설정 완료
  > - `프로젝트 생성` 버튼 클릭 시 프로젝트 생성 페이지로 이동하도록 설정
  > - 기본 1차 디자인 적용 완료
  > - 기본 1차 레이아웃 적용 완료
  > - 삭제, 수정은 유저 정보 및 프로젝트 생성 한 후에 해보기로
- `Circle` 컴포넌트 확장
  > - isImage         - image가 들어오는 지 아닌지 확인
  > - url             - 가져오는 image의 경로의 값
- `Text` 컴포넌트 확장
  > - display         - display 설정 변경
- `Sheet` 컴포넌트 확장
  > - maxWidth        - max-width 설정
  > - minHeight       - min-height 설정
- `react-query`
  > - hooks 폴더 생성
  > - react-query 초안 설계
  > - `getUserInfo` 통신 성공

### 성현

- `IssueInfo` 문제 해결
  >- inputbox에 값을 입력 후 이슈 템플릿을 클릭하면 컴포넌트에 값 표시가 안 되는 문제 해결


## 221105

### 종현
- `ProjectCreatePage`
  > - 프로젝트 생성 페이지 1차 디자인 완료
  > - react-slick을 통한 carousel 적용
  > - 지라 토큰 입력 창 생성
  > - 깃 토큰 입력 창 생성
  > - 연동 시 불러온 Select 생성
- `Navigation`
  > - `Portal`을 활용한, 재배치 완료
  > - root 컴포넌트와 전혀 다르게 배치함으로써, 컴포넌트 생성시 크기 부담 줄임
- `recoil 설계`
  > - react 식 form 형태 데이터 설계
  > - api에 requestBody에 필요한 데이터를 모아둘 recoil 설계
  > - Input 컴포넌트가 직접 setRecoil 함수를 받아 본인의 e.target.value를 지속적으로 업데이트
  > - button 클릭으로 api에 시전되도록 

## 221106
### 종현
- 415 error
  > - customAxios의 content-type -> Content-Type 오타로 인한 에러
- `/auth-service/tokens` (POST)
  > - requestBody를 위한 recoil 설계 반영 완료
  > - custom hook 구현 완료
  > - jira 및 gitlab 토큰 연동 api 
  > - 통신 완료
- `Notifiacation 알림 컴포넌트`
  > - navigation 재 배치에 맞게 렌더링 배치 변환
- `/project-service/project`(GET)
  > - 토큰을 활용한 프로젝트 리스트 가져오기
  > - api 구현 완료
  > - custom hook 구현 완료
  > - 통신 완료
  > - 알고보니 우리 서비스에서 생성한 프로젝트 리스트 가져오는 거였음
  > - 잘못 만든건데 혹시나 싶어서 그냥 놔둠
- `/issue-service/project-list (GET)
  > - jira 토큰과 연관되는 jira 프로젝트를 모두 가져오는 api
  > - 확인결과 500 error로 연기
- `/project-service/project (POST)
  > - 우리 서비스에 프로젝트 생성하기
  > - requestBody를 위한 recoil 설계 반영 완료
  > - textAreaBox,  textArea에 recoil props 반영
  > - image file blob 화하여 저장완료
  > - api 구현 완료
  > - custom hook 구현 완료
  > - 통신 완료
  > - 정상적으로 통신 된 경우, project 목록 페이지로 이동하도록 설정

## 221107
### 종현
- API
  > - 지라 토큰 값을 통해, 지라 프로젝트 목록 가져오기
  > - 프로젝트 목록 필터링하여 `<Option>` 컴포넌트에 매핑하기
- API 설계 다시
  > - 응답 데이터 interface화 하여 반영하기
  > - 기존의 코드 짜진 설계대로 고쳐보기
- 로그인 이후 처리해야하는 유저 정보 및 토큰 데이터를 가지고 오는 요청 시 에러
  > - LandingPage로 리다이렉트 전 api 요청을 하니 에러가 나서, LandingPage까지 접근한 후, localStroge에 Access 토큰 저장되었는지 확인 한 후에 api 요청이 오도록 처리, 
  > - 추측하건데, 아마 customAxios가 만들어지기전에 호출해서 서버에서 거절을 한 것이 아닌가 추측
- API 지라 연동
  > - 기존의 연동 토큰을 가지고 있으면 입력창에 바로 반영됨
  > - 기존의 연동 토큰을 가지고 있으면 프로젝트도 미리 가져옴
  > - 이메일도 입력하도록 입력창 생성
  > - 이메일 입력창 저장하기 위한 recoil 설계
- Notification
  > - 프로젝트가 성공적으로 생성시 성공적으로 생성되었다는 알림이 나오게 함

### 준혁
- 대쉬보드→ 위젯선택 → 간트차트 연동 확인
- 전체 서비스 플로우 ui 무시하고 확인
- 서버 데이터 확인

### 성현

- `IssueInfo`-`SelectBox` 에러 해결
  >- 'setValue is not a function' 에러 - 생성된 해당 컴포넌트 전부에 props를 넣으니 해결됐다.

- `IssueInfo`-`InputBox` 컴포넌트 형식 forwardRef<HTMLInputElement, propsType>로 변경
- `IssueInfo`-`SelectBox` 컴포넌트 형식 forwardRef<HTMLSelectElement, propsType>로 변경
  >- 내부에 targetRef를 새로 만들어 자식 컴포넌트에 ref로 접근할 수 있게 작성

## 221108
### 종현
- API
  > - 프로젝트 선택 페이지에서 자신과 연관되는 프로젝트 데이터 가져오기
  > - 클릭하면 해당 projectId의 대시보드로 이동하도록 설정
  > - 프로젝트 개수가 많은 경우, Navigation bar를 넘어가지 않도록, max-height 및 스크롤 바 고정
  > - 프로젝트 삭제 기능 구현
  > - 자기가 팀장이 아닌 경우, 삭제하지 못하도록 처리 필요 있음
  > - 지라 프로젝트와 생성한 프로젝트가 서로 연동되도록 설정
  > - 팀원 조회 API 연결 완료
  > - projectSummary 컴포넌트 생성
  > - 팀원 조회 통신 완료
  > - 팀장 및 팀원 이미지 렌더링 projectSummary 컴포넌트에 렌더링

  ### 준혁
  - 대쉬보드→ 위젯선택 → 대쉬보드에 위젯추가 로직 에러 잡기
  - 리액트 쿼리 데이터를 코드에 적용하는 테스트 코드 제작

### 성현
  - `MiddleBucket`에서 `IssueInfo` 데이터 수신 후 `IssueBar` 생성
  - `IssuesPage` 스타일링
  - `IssuesPage` 디렉토리 구조 수정
    >- IssuesPage.tsx -> IssuesPage/index.tsx, style.ts
  - 미들버킷 관련 Organism 디렉토리 구조 수정
    >- organism/IssueInfo, MiddleBucket -> organism/issues/IssueInfo, MiddleBucket

## 221109
### 종현
- NavProject & NavWidget
  > - recoil nav데이터 localStorage로 이관
  > - tab 삭제, tab 활성화 함수 정상작동하도록 이관
  > - 프로젝트 선택 시 프로젝트 탭이 활성화 되면서 생성되도록 설정
  > - localStorage 안에 이미 데이터가 있는데, 또 선택해서 오는 경우에는 그냥 탭 활성화만 시킴
  > - + 버튼 클릭시 프로젝트 선택 페이지로 이동, 이어서 프로젝트를 또 생성할 수 있음
- 탭이 활성화되지 않은 경우, 탭을 삭제 할때, localStorage 상에서 삭제는 되지만, 리렌더링이 안됨
  > - 시간 없어서 그냥 활성화된 탭만 x 할 수 있도록 처리  

  ### 준혁
- 간트차트 드래그 시 에러나고 멈추는 문제 해결
- UI/UX 잔조정 - 대시보드가 가운데 정렬이 안되는 문제 해결
 
### 성현
- IssueTemplate
  > - 이슈 템플릿 삭제 구현

## 221110
 ### 종현
- Error : 처음 getProject 요청을 보낼때, 값을 못가져와 탭에 이름이 없이 렌더링이 됨
  > - api 성공 시의 상태를 useEffect 의존성으로 추가하여 해결

### 준혁
- 서버에 간트이슈 생성 버그 해결
- 위젯 생성이 가데이터 말고 여러 위젯이 생성가능하도록 타입 수정

## 221111
### 종현
- 위젯 탭
  > - localStorage로 이관 완료
- 위젯 타입 변환
  > - 프로젝트 탭이 생성될 때, 한번에 모든 위젯이 생성되도록 전환
  > - 단순하게 현재 경로에서 활성화된 곳만 파악하도록 설정
  > - list 형태가 아닌 단순 boolean이기 때문에 파악하기 쉽고, 유지 보수도 더욱 쉬워졌다.

### 준혁
- 대쉬보드 내용과 간트차트 내용이 꼬여버린 브랜치를 정리
- 생성 할 때, 올바른 행렬에서 생성될 수 있도록 주소 params 에 행 index 번호를 추가함

## 221112
### 종현
- 프로젝트 설정 페이지 생성
  > - 프로젝트 이미지 변경 컴포넌트 생성 완료
  > - 프로젝트 이름/설명 컴포넌트 생성 완료
  > - 팀원 초대 컴포넌트 생성 완료
  > - 팀원 권한 변경 및 강퇴 컴포넌트 생성 완료
- API 요청 함수
  > - 프로젝트 로고 수정 API 요청 함수 생성 완료
  > - 프로젝트 이름, 상세 수정 API 요청 함수 생성 완료
  > - 팀원 권한 수정 API 요청 함수 생성 완료
- 커스텀 훅
  > - 프로젝트 로고 수정 커스텀 훅 생성 완료
  > - 프로젝트 이름, 상세 수정 커스텀 훅 생성 완료
  > - 팀원 권한 변경 커스텀 훅 생성 완료
- API 연결
  > - 프로젝트 로고 수정 통신 연결 완료
  > - 프로젝트 이름, 상세 수정 연결 완료
  > - 팀원 권한 수정 연결 완료 

### 성현
- IssueTemplate
  > - 이슈 템플릿 추가 구현
- Organism 구조 변경
  > - IssueTemplate, IssueInfo -> IssueTemplate으로 통합
- IssueTemplate
  > - 이슈 템플릿 편집 구현

## 221113
### 종현
- 권한 변경 컴포넌트 생성 완료
- 컬러 변경 컴포넌트 생성 완료
- 해당 권한마다 옵션에 접근할 수 있도록 설정완료
  > - 컬러 색상 변경을 위한 `react-colorful` 설치
- API 요청 함수
  > - 프로젝트 컬러 변경 API 요청 함수 생성 완료
  > - 유저 검색 API 요청 함수 생성 완료
  > - 팀원 초대 API 요청 함수 생성 완료
  > - 유저 강퇴 API 요청 함수 생성 완료
- 커스텀 훅
  > - 프로젝트 컬러 변경 커스텀 훅 생성 완료
  > - 유저 검색 조회 커스텀 훅 생성 완료
  > - 팀원 초대 커스텀 훅 생성 완료
  > - 유저 강퇴 커스텀 훅 생성 완료
- API 연결
  > - 프로젝트 컬러 변경 통신 연결 완료
  > - 유저 검색 통신 연결 완료
  > - 팀원 초대 통신 연결 완료
  > - 유저 강퇴 통신 연결 완료

### 준혁
- dashboard 에 project 정보 띄우기
- 위젯 변경 사항을 hooks/widget 의 커스텀 훅을 통하여 값을 받고 레이아웃 형식으로 변환한 뒤, 캐싱으로 저장한다.