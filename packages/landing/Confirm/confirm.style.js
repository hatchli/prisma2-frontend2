import styled from "styled-components";
import { themeGet } from "styled-system";

const PageWrapper = styled.div`
  /* flex-flow: column no-wrap; */

  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  flex-direction: column;
  /* flex-wrap: no-wrap; */
  /* flex-wrap: wrap; */
  background-color: #ffffff;
  /* padding: 40px 70px 40px; */
  justify-content: flex-start;
  align-items: center;
  background-color: ${themeGet("colors.secondary")};
  @media only screen and (max-width: 990px) {
    padding: 100px 0 60px;
  }

  @media only screen and (min-width: 991px) and (max-width: 1280px) {
    padding: 130px 15px 60px;
  }
`;

const SidebarSection = styled.div`
  width: 300px;
  flex-shrink: 0;
  margin-right: 30px;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const ContentBox = styled.div`
  width: calc(100% - 360px);
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 30px 0px;
  border: 1px solid ${themeGet("colors.borderColor", "#e6e6e6")};

  @media only screen and (max-width: 1199px) {
    width: 100%;
    border: 0;
    padding: 20px;
  }
`;

export { PageWrapper, SidebarSection, ContentBox };
