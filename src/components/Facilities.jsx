import { useEffect, useMemo, useState } from 'react';
import { styled, keyframes } from 'styled-components';
import useFetchPublicData from '../hooks/useFetchPublicData';
import { useDispatch, useSelector } from 'react-redux';
import { setSortedData } from '../redux/modules/publicData';
import { calDistance } from '../helper/calDistance';
import { Paging } from './Paging';
import { save10Location } from '../redux/modules/maps/save10Location';

const Facilities = ({ setFacility, filteredGlobalDataByArea, globalSearch }) => {
  // 선택된 지역과 스포츠 종목 변수 설정
  const selectedArea = filteredGlobalDataByArea?.selectedArea;
  const selectedSports = filteredGlobalDataByArea?.selectedSports;
  const [filteredData, setFilteredData] = useState([]);
  const [sliceData, setSliceData] = useState([]);
  // 상세 페이지로 이동하는 함수
  const navDetailPage = (facility) => {
    setFacility(facility);
  };
  console.log('filteredData', filteredData);
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const { data: publicData, isLoading, isError } = useFetchPublicData();

  // 검색 및 필터된 데이터 설정
  useMemo(() => {
    setFilteredData((prev) => {
      return !globalSearch
        ? filteredGlobalDataByArea
          ? publicData?.filter((data) => data.AREANM === selectedArea && data.MINCLASSNM === selectedSports)
          : publicData || []
        : publicData?.filter(
            (data) =>
              (!selectedArea || data.AREANM === selectedArea) &&
              (!selectedSports || data.MINCLASSNM === selectedSports) &&
              (data.MINCLASSNM.includes(globalSearch) ||
                data.SVCNM.includes(globalSearch) ||
                data.AREANM.includes(globalSearch))
          ) || null;
    });
  }, [filteredGlobalDataByArea, globalSearch, publicData, selectedArea, selectedSports]);

  // 페이지네이션 관련 변수 및 state 선언
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = filteredData?.length || null;
  const totalPage = Math.ceil((filteredData?.length || publicData?.length || 0) / itemsPerPage) || null;
  const [sortPublicDataByDis, setSortPublicDataByDis] = useState([]);

  // 거리 기준으로 데이터 정렬하는 부분
  useEffect(() => {
    // 검색 및 필터된 데이터 설정

    const sortPublicDataByDis = [...filteredData].sort((a, b) => {
      const dx = calDistance(location.longitude, location.latitude, a.X, a.Y);
      const dy = calDistance(location.longitude, location.latitude, b.X, b.Y);
      return dx - dy; // 거리 값을 비교하여 정렬
    });

    setSortPublicDataByDis(sortPublicDataByDis);

    // 현재 페이지에 따라 보여줄 데이터 조각 설정
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const sliceData = sortPublicDataByDis.slice(startIndex, endIndex);

    // 필터된 데이터들을 스토어에 저장
    dispatch(save10Location(sliceData));

    dispatch(setSortedData(sortPublicDataByDis));

    // Update the sliceData state
    setSliceData(sliceData);
  }, [dispatch, currentPage, itemsPerPage, filteredData, location, globalSearch]);

  // 로딩 중이면 로딩 메시지 출력
  if (isLoading) return <h3>로딩 중 입니다</h3>;

  // 에러가 발생하면 에러 메시지 출력
  if (isError) {
    return (
      <>
        <p>에러가 발생하였습니다</p>
        <p>{publicData?.error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <StyledFacilitiesContainer>
        <Title>Reservation Data</Title>
        <StyledItemListBox>
          <SubTitlte>
            <p>총 {totalItems}개</p>
            <p>
              &nbsp;&nbsp; 현재 페이지 {currentPage}/{totalPage}
            </p>
          </SubTitlte>
          <UlTag>
            {sliceData.map((facility) => (
              <StyledItemBox key={facility.SVCID}>
                <LiTag onClick={() => navDetailPage(facility)}>
                  <TextTag>
                    <span>{facility.AREANM}</span>&nbsp;&nbsp;
                    <span>{facility.MINCLASSNM}</span>
                  </TextTag>
                  <TextTag>{facility.SVCNM}</TextTag>
                </LiTag>
              </StyledItemBox>
            ))}
          </UlTag>
        </StyledItemListBox>
        <PagingTag>
          <Paging currentPage={currentPage} totalItems={totalItems} setCurrentPage={setCurrentPage} />
        </PagingTag>
      </StyledFacilitiesContainer>
    </>
  );
};

export default Facilities;

// const StLi = styled.li`
//   border: 1px solid black;
// `;
const StyledFacilitiesContainer = styled.div`
  width: 35%;
  height: 1000px;
  margin-left: 10px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  color: white;
  background-color: rgba(41, 41, 41, 0.747);
  border-radius: 0 30px 30px 0;
  padding: 20px 10px 20px 15px;

  position: relative;
`;

const StyledItemListBox = styled.div`
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`;
const SubTitlte = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 10px;
`;

const StyledItemBox = styled.div`
  // width: 90%;

  margin: 0 auto;
  margin: 10px 0;
  background-color: grey;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const growAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.025);
  }
  100% {
    transform: scale(1);
  }

`;
const UlTag = styled.ul`
  width: 90%;
  margin: 0 auto;
  height: 70px;
  color: white;
`;

const LiTag = styled.li`
  width: 100%;
  margin: 0 auto;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    animation: ${growAnimation} 0.5s ease-in-out;
    background-color: rgba(138, 138, 138, 0.788);
  }
`;
const TextTag = styled.p`
  text-align: center;
  // height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 2px 0 8px;

  margin-top: 10px;
  padding: 0 4px 4px;
`;
const PagingTag = styled.div`
  margin: 0 auto;
`;
