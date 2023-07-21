import React from 'react';
import { keyframes, styled } from 'styled-components';

const PostData = ({ setFacility, facility }) => {
  const openLink = () => {
    window.open(facility.SVCURL, '');
  };

  if (!facility) {
    return <div>Loading...</div>;
  }
  return (
    <PostBOX>
      <div>
        <Img src={facility.IMGURL} />
        <ContentHover>자세한 내용은 홈페이지를 참고해 주세요!</ContentHover>
        <div>
          <button onClick={openLink}>예약하러가기</button>
          <button
            onClick={() => {
              setFacility(null);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
      <ConDiv>
        <div>장소명:&nbsp;{facility.PLACENM}</div>
      </ConDiv>
      <ConDiv>
        <div>접수기간:&nbsp;{facility.RCPTBGNDT}</div>&nbsp;&nbsp;~
        <div>{facility.RCPTENDDT}</div>
      </ConDiv>
      <ConDiv>
        <div>이용요금:&nbsp;{facility.PAYATNM}</div>&nbsp;&nbsp;
      </ConDiv>
      <ConDiv>
        <div>이용시간:&nbsp;{facility.V_MIN}</div>&nbsp;&nbsp;~
        <div>{facility.V_MAX}</div>
      </ConDiv>
      <ConDiv>
        <div>{facility.TELNO ? `연락처: ${facility.TELNO}` : `연락처:"없음"`}</div>
      </ConDiv>
    </PostBOX>
  );
};
// 연락처:&nbsp;{facility.TELNO}
export default PostData;

const growAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;
const Img = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    animation: ${growAnimation} 0.5s ease-in-out;
    background-color: rgba(225, 225, 225, 0.45);
    /* transform: scale(1.1);
    transition: transform 0.5s; */
    filter: brightness(70%);
  }
`;
const ContentHover = styled.div`
  border: 1px solid black;
  margin: 10px;
  width: 400px;
  height: 60px;
  overflow: hidden;
  line-height: 20px;
`;

const PostBOX = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

const ConDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  margin: 10px;
  padding: 4px 8px;
`;
// const Content = styled.div`
//   border: 1px solid black;
//   margin: 10px;

//   width: 140px;
//   height: 20px;
//   overflow: hidden;
//   line-height: 20px;
//   color: white;
// `;
// const ContentCont = styled.div`
//   border: 1px solid black;
//   margin: 10px;

//   width: 400px;
//   height: 60px;
//   overflow: hidden;
//   line-height: 20px;
//   color: white;
// `;
