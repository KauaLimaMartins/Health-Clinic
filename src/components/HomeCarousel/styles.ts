import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
`;

export const Content = styled.div`
  height: calc(100vh - 6.25rem);
  width: 100vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// export const CarouselContent = styled.div`
//   background-image: url("/images/home.png");
//   height: calc(100vh - 6.25rem);
//   background-color: black;
//   background-size: cover;
// `;
