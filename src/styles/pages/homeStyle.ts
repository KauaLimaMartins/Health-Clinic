import styled from "styled-components";

export const Container = styled.main`
  h1 {
    font-family: "Effra";
    font-weight: 400;
  }

  .title-content {
    display: flex;
    align-items: center;
    margin-bottom: 2.125rem;

    > h3 {
      font-family: ${({ theme }) => theme.fonts.sectionTitle};
      font-weight: 600;
      font-size: 1.875rem;
    }

    .line-after-title {
      margin-left: 0.938rem;
      width: 6.25rem;
      height: 0.125rem;
      background: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  .content-container {
    width: 30%;

    .subtitle {
      font-family: ${({ theme }) => theme.fonts.content};
      font-weight: 400;
      font-size: 3.125rem;
      margin-bottom: 2.125rem;
    }

    .content {
      font-family: ${({ theme }) => theme.fonts.content};
      font-weight: 400;
      font-size: 1rem;
    }
  }

  @media (max-width: 1100px) {
    .content-container {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    .title-content {
      > h3 {
        font-size: 1.25rem;
      }
    }

    .content-container {
      .subtitle {
        font-size: 2.188rem;
      }
    }
  }

  @media (max-width: 750px) {
    .title-content {
      justify-content: center;

      .line-after-title {
        display: none;
      }
    }

    .content-container {
      text-align: center;
    }
  }
`;

export const WhoWeAreContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.75rem 2.5rem;

  .image-container {
    margin-right: 6.25rem;

    img {
      width: 38vw;
    }
  }

  .content-container {
    > button {
      margin-top: 1.25rem;
    }
  }

  @media (max-width: 850px) {
    .image-container {
      margin-right: 1.875rem;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;

    .image-container {
      margin-right: 0;
      margin-bottom: 1.875rem;

      img {
        width: 50vw;
      }
    }
  }
`;

export const OurTeamContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.75rem;

  .image-container {
    margin-left: 6.25rem;

    img {
      width: 38vw;
    }
  }

  @media (max-width: 850px) {
    .image-container {
      margin-left: 1.875rem;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column-reverse;

    .image-container {
      margin-left: 0;
      margin-bottom: 1.875rem;

      img {
        width: 50vw;
      }
    }
  }
`;

export const OurSpaceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.75rem 1.25rem;
  background-image: url("/images/bg-ornament.svg");
  background-repeat: no-repeat;
  background-size: contain;

  .gray-card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(251, 251, 251, 0.8);
    padding: 1.25rem;
    position: relative;

    .image-container {
      top: 6.25rem;
      position: relative;
      margin-left: 6.25rem;

      img {
        width: 40vw;
      }
    }

    .content-container {
      position: relative;
      top: 3.125rem;
    }
  }

  @media (max-width: 850px) {
    .image-container {
      margin-left: 1.875rem;
    }
  }

  @media (max-width: 750px) {
    .gray-card-container {
      flex-direction: column-reverse;

      .image-container {
        margin-left: 0;
        margin-bottom: 1.875rem;
        top: 0;

        img {
          width: 50vw;
        }
      }

      .content-container {
        top: 0;
      }
    }
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.75rem 0;

  .title-container {
    text-align: center;
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 3.125rem;
      font-family: ${({ theme }) => theme.fonts.sectionTitle};
      font-weight: 600;
      margin-bottom: 0.625rem;
    }

    p {
      font-family: ${({ theme }) => theme.fonts.content};
      font-weight: 400;
      margin-bottom: 1.25rem;
      width: 45%;
    }

    .buttons-container {
      display: flex;
      align-items: center;
      justify-content: center;

      > button {
        margin-right: 1.25rem;
      }

      > button:last-of-type {
        margin-right: 0;
      }
    }
  }

  @media (max-width: 900px) {
    .title-container {
      h2 {
        font-size: 1.875rem;
      }
    }
  }

  @media (max-width: 550px) {
    .title-container {
      .buttons-container {
        flex-wrap: wrap;
        gap: 0.625rem;
        > button {
          margin-right: 0;
        }
      }
    }
  }
`;
