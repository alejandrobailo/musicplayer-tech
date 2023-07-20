import styled from '@emotion/styled';

export const NowPlayingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  bottom: 0;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  background-color: #fff;
  opacity: 0.9;
`;

export const CurrentSong = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    border-radius: 0.625rem;
  }

  .textDetails {
    display: flex;
    gap: 0.5rem;
  }
`;

export const CustomH2 = styled.h2`
  margin: 0;
`;

export const CustomParagraph = styled.p`
  margin: 0;
  font-weight: bold;
`;
