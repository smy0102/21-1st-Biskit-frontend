# Biskit front-end team 입니다!
요리키트를 판매하는 이커머스 플랫폼인  [CJ COOKIT](https://www.cjcookit.com/pc/main)를 모티브로 한 프로젝트

![스크린샷 2021-06-20 오후 3 56 59](https://user-images.githubusercontent.com/73716178/122665086-3a8b0180-d1e0-11eb-8ac0-064b0fcfa6ab.png)

<br>

## 프로젝트 계획 및 기간
📆 2021.6.7 ~ 6.18
- 1st Sprint : 개발환경 초기세팅, 전체 레이아웃, 컴포넌트화
- 2nd Sprint : 컴포넌트 별 기능 구현, 프론트-백 통신, 코드 리팩토링, conflict 수정 작업

### 시연 영상 확인
<a href="https://www.youtube.com/watch?v=SE_5vtrBrsg">
    <img src="http://img.shields.io/badge/-YouTube-FF0000?style=flat&logo=YouTube&link=https://https://www.youtube.com/watch?v=SE_5vtrBrsg/"
        style="height : auto; margin-left : 10px; margin-right : 10px;"/>
</a>
<br>

--- 

## 페이지별 기능 Demo 및 구현 기능 상세

### 0. 공통 
- React 기반의 커머스 홈페이지 제작
- CRA를 사용한 초기 세팅
- 3명의 팀원들이 공통 Common.scss, Reset.scss 사용
- 공통부분인 Nav, Footer 컴포넌트 제작
<br>

### 1. 제품 상세 페이지
![비스킷 제품상세페이지](https://user-images.githubusercontent.com/73716178/122664656-af107100-d1dd-11eb-8997-97fb06401656.gif)
- fecth를 이용해 백엔드와 통신하여 페이지 데이터 렌더링
- 상품 이미지 캐러셀 노출 기능 구현
- 상세설명/정보/리뷰/배송,환불,문의 탭 기능 구현
- 상품 찜하기 기능 구현
- 장바구니 담기: fetch (post)를 이용해 장바구니 페이지로 데이터 전달
<br>

### 2. 장바구니
![비스킷 장바구니](https://user-images.githubusercontent.com/73716178/122664783-61e0cf00-d1de-11eb-8fbc-4491bee09b18.gif)
- 장바구니 페이지 UI 구현
- 제품별 삭제, 선택 삭제 기능 구현
- 개별 상품 수량 증감 버튼 기능 구현
- 제품 장바구니 삭제, 수량 증감에 따라 총 결제 금액 변동 구현
- 제품의 장바구니가 비어있을 경우 다른 UI가 나오도록 구현 
<br><br>

## 🛠 사용한 기술

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a> <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/></a> <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=SASS&logoColor=white"/></a> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/></a>

<br>

## 🛠 사용한 툴

<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/></a> <img src="https://img.shields.io/badge/Trello-0052CC?style=flat-square&logo=Trello&logoColor=white"/></a> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></a> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/></a>

<br>

## 👥 팀원

- 프론트 : [권오현](https://github.com/im667), [신미영](https://github.com/smy0102), [전건우](https://github.com/fghjjkl32)
- 벡엔드 : [김민규](https://github.com/SkyStar-K), [박창현](https://github.com/chp9419), [송준](https://github.com/riassuc), [이아란](https://github.com/araaaaan)
 (비스킷 벡앤드팀 [깃허브](https://github.com/wecode-bootcamp-korea/21-1st-Biskit-backend))
 
 <br>

## Reference
이 프로젝트는 [쿡킷(COOKIT)](https://www.cjcookit.com/pc/main) 사이트를 참조하여 학습목적으로 만들었습니다.
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
