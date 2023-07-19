import React from 'react';
import Comments from '../components/Comments';
import { styled } from 'styled-components';

export const Detail = () => {
  return (
    <Body>
      <div>Detail Page</div>
      <Comments />
    </Body>
  );
};

const Body = styled.div`
  width: 70%;
  margin: 0 auto;
  justify-content: center;
`;
