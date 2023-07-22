<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=⚾🏸GongGong%20Play⚽🏐&fontSize=60" />

### 실행법

> 1. `yarn`으로 패키지 설치
> 2. `json-server --watch db.json --port 4000` 으로 JSON server 실행
> 3. `node server.js`로 express 서버 실행
> 4. `yarn start`로 클라이언트 실행


# GongGongPlay

## 🖥️ 프로젝트 소개

React에 다양한 API로 서울시의 체육시설 공공서비스 예약안내 사이트입니다.

## 사이트 주소

//주소넣기

## 🕰️ 개발 기간

- 23.07.17 - 23.07.23

### 🧑‍🤝‍🧑 멤버 구성 - 팀명 : 내 코드 왜2러조
역할|이름|맡은 기능 소개|GitHub|
---|---|---|---|
팀장|김환훈|지도 API|<a href="https://github.com/kimhwanhoon">https://github.com/kimhwanhoon</a>|
팀원|김우리|상세 페이지, 유튜브 API|<a href="https://github.com/wooriki">https://github.com/wooriki</a>|
팀원|박지원|공공API 데이터 페이지네이션|<a href="https://github.com/xoxojw">https://github.com/xoxojw</a>|
팀원|조성록|날씨API 상세 페이지, 댓글 기능|<a href="https://github.com/pigrok">https://github.com/pigrok</a>
팀원|최수아|공공API 데이터 검색 및 필터 기능|<a href="https://github.com/choisua98">https://github.com/choisua98</a>|


### 🖼 와이어프레임
<details>
<summary>클릭하면 자세한 내용이 보입니다</summary>
Figma: https://www.figma.com/community/file/1264539931329446342
![123](https://github.com/kimhwanhoon/20230724_team_project/assets/123552221/45f102ee-ba89-442f-b7ea-4bc9cf0637e8)
![456](https://github.com/kimhwanhoon/20230724_team_project/assets/123552221/938892b3-c550-49cd-b729-cd9fe73e206a)
![](https://files.slack.com/files-pri/T043597JK8V-F05J9NAQSHZ/789.jpg)
</details>


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


### ⚙️ 기술스택
- React.js
<div align=“center”>
    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=git&logoColor=white">
    
</div> 

### ⚙️ 사용한 라이브러리
- styled-components
- react-router-dom
- redux-toolkit
- redux-devtools-extension
- react-query
- react-query-devtools
- react-js-paginaition
- react-redux
- react-naver-maps
- axios
- cors
- dotenv
- express
- weather-styled-icon


<div align=“center”>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=git&logoColor=white">

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

⚙️ 배포 
- Vercel
<div align=“center”>
	  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
  </div>
  
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
