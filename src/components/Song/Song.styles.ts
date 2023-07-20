import styled from '@emotion/styled';

export const SongCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.3125rem auto;
  background-color: #fff;
  opacity: 0.9;
  border-radius: 0.625rem;
  padding: 0.125rem 0.5rem 0.125rem 0.125rem;
  width: 44rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-width: 320px;

  img {
    border-radius: 0.625rem;
  }

  .infoContainer {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 0;
    box-shadow: none;
    justify-content: space-between;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .nameContainer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const UsabilityContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Name = styled.h3`
  font-weight: 600;
  color: #333;
  margin: 0;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Artist = styled.p`
  color: #999;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
