import styled, { css } from "styled-components";

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${(props) =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 30px;
      padding-right: 30px;
    `};
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1440px) {
    max-width: 1170px;
    width: 100%;
  }
  @media (min-width: 1620px) {
    max-width: 1300px;
    width: 100%;
  }

  @media (min-width: 1800px) {
    max-width: 1500px;
    width: 100%;
  }
  @media (min-width: 2020px) {
    max-width: 1800px;
    width: 100%;
  }
  @media (min-width: 2240px) {
    max-width: 2200px;
    width: 100%;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.mobileGutter &&
      css`
        padding-left: 30px;
        padding-right: 30px;
      `};
  }
`;

export default ContainerWrapper;
