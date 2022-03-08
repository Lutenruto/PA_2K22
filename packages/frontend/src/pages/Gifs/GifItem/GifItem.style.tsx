import styled from "styled-components/macro";

export const GifContainer = styled.div`
  border-radius: 10px;
  padding: 20px;

  background: linear-gradient(
    90deg,
    rgba(96, 122, 212, 1) 0%,
    rgba(53, 161, 180, 1) 50%,
    rgba(2, 207, 142, 1) 100%
  );
  width: 100%;
`;

export const GifUploader = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GifImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const GifActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0px 15px;
`;
