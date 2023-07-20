import styled from '@emotion/styled';

export const SongListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  max-height: 52vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100vw;
    max-height: 100%;
    position: absolute;
    bottom: 0;
  }
`;
