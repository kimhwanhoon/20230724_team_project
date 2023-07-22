<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=⚾🏸GongGong%20Play⚽🏐&fontSize=60" />

### 실행법

> 1. `yarn`으로 패키지 설치
> 2. `json-server --watch db.json --port 4000` 으로 JSON server 실행
> 3. `node server.js`로 express 서버 실행
> 4. `yarn start`로 클라이언트 실행


# GongGongPlay ⚽️🎾🏀

## 🖥️ 프로젝트 개요
- React.js로 빌드한 서울시 공공서비스 체육시설 조회 및 예약안내 사이트입니다.

<br />

### 📍 사이트 주소
// 주소넣기

<br />

### 🕰️ 개발 기간
2023. 07. 17 - 2023. 07. 23

<br />

### 🖼 와이어프레임
<details>
<summary><a href="https://www.figma.com/community/file/1264539931329446342">Figma</a> | 펼칠 시 스크린샷</summary>
<br />
	
![123](https://github.com/kimhwanhoon/20230724_team_project/assets/123552221/45f102ee-ba89-442f-b7ea-4bc9cf0637e8)

![456](https://github.com/kimhwanhoon/20230724_team_project/assets/123552221/938892b3-c550-49cd-b729-cd9fe73e206a)

![789](https://github.com/kimhwanhoon/20230724_team_project/assets/123552221/33b1859d-c723-48fc-848a-ddb21ef87274)

<br />

</details>

<br />

### 🏷 폴더 구조
```
┣ 📂axios
 ┃ ┣ 📜comment.js
 ┃ ┣ 📜publicDataAPI.js
 ┃ ┗ 📜weatherApi.js
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┣ 📜Weather.jsx
 ┃ ┃ ┗ 📜YouTubeApi.jsx
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📜Comments.jsx
 ┃ ┃ ┣ 📜Detail.jsx
 ┃ ┃ ┗ 📜PostData.jsx
 ┃ ┣ 📂map
 ┃ ┃ ┣ 📜MapComponent.jsx
 ┃ ┃ ┣ 📜Maps.jsx
 ┃ ┃ ┗ 📜MarkPins.jsx
 ┃ ┣ 📜Facilities.jsx
 ┃ ┣ 📜Paging.jsx
 ┃ ┗ 📜Search.jsx
 ┣ 📂helper
 ┃ ┗ 📜calDistance.js
 ┣ 📂hooks
 ┃ ┣ 📂mapHooks
 ┃ ┃ ┣ 📜saveBoundary.js
 ┃ ┃ ┣ 📜setBoundaries.js
 ┃ ┃ ┗ 📜useGetCoords.js
 ┃ ┣ 📜useCurrentLocation.js
 ┃ ┗ 📜useFetchPublicData.js
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┗ 📜Homebackup.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┣ 📂maps
 ┃ ┃ ┃ ┣ 📜coordsGroup.js
 ┃ ┃ ┃ ┣ 📜reloadMap.js
 ┃ ┃ ┃ ┣ 📜save10Location.js
 ┃ ┃ ┃ ┗ 📜setBoundary.js
 ┃ ┃ ┣ 📜commentsSlice.js
 ┃ ┃ ┣ 📜publicData.js
 ┃ ┃ ┗ 📜userLocation.js
 ┣ 📂shared
 ┃ ┗ 📜Router.js
 ┣ 📜.DS_Store
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜GlobalStyle.jsx
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reset.css
```

<br />

## 🧑‍🤝‍🧑 팀원 소개
- 팀명 : 내 코드 왜2러조
- 팀원 및 맡은 기능
  
역할|이름|맡은 기능 소개|GitHub|
---|---|---|---|
팀장|김환훈|지도 API|<a href="https://github.com/kimhwanhoon">https://github.com/kimhwanhoon</a>|
팀원|김우리|상세 페이지, 유튜브 API|<a href="https://github.com/wooriki">https://github.com/wooriki</a>|
팀원|박지원|공공API 데이터 페이지네이션|<a href="https://github.com/xoxojw">https://github.com/xoxojw</a>|
팀원|조성록|날씨API 상세 페이지, 댓글 기능|<a href="https://github.com/pigrok">https://github.com/pigrok</a>
팀원|최수아|공공API 데이터 검색 및 필터 기능|<a href="https://github.com/choisua98">https://github.com/choisua98</a>|

<br />

## 📌 주요 기능

### 지도API (네이버지도)
#### : https://www.ncloud.com/product/applicationService/maps
- 
-  
- 

### 공공데이터API (서울시 체육시설 공공서비스 예약)
#### : http://data.seoul.go.kr/dataList/OA-2266/S/1/datasetView.do
- 
- 
- 

### 날씨API (Open Weather Map)
#### : https://openweathermap.org/api
- 
- 
- 

### 유튜브API (YouTube)
#### : https://developers.google.com/youtube/v3/getting-started?hl=ko
- 
- 
- 

### 🎬 페이지 스크린샷
1) 

<img src="" alt="" />

2) 

<img src="" alt="" />

3) 

<img src="" alt=""/>

2-1) 

<img src="" alt=""/>

3) 

3-1) 
   
<img src="" alt=""/>


3-2) 

<img src="" alt="" />

3-3) 

<img src="" alt=""/>

4) 

<img src="" alt="" />

<br />

## ⚙️ 기술 스택
- React.js
<div align=“center”>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
    
</div> 

### ⚙️ 사용한 라이브러리
- styled-components
- react-router-dom
- react-redux
- redux-toolkit
- redux-devtools-extension
- react-query
- react-query-devtools
- react-js-paginaition
- react-naver-maps
- axios
- cors
- dotenv
- express
- weather-styled-icon

<div align=“center”>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/React Router DOM-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
	
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/React Naver Maps-03C75A?style=for-the-badge&logo=naver&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white">
</div> 

### ⚙️ 버전 관리 시스템
- Git/Github
<div align=“center”>
 <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
 <img src="https://img.shields.io/badge/sourcetree-0052CC?style=for-the-badge&logo=github&logoColor=white">
</div>

### ⚙️ 협업툴
- Visual Studio
- Slack
- Figma
<div align=“center”>
 <img src="https://img.shields.io/badge/visualstudio-5C2D91?style=for-the-badge&logo=visualstudio&logoColor=white">
 <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
 <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=slack&logoColor=white">
</div>

### ⚙️ 배포 
- Vercel
<div align=“center”>
	  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  </div>

<br />
