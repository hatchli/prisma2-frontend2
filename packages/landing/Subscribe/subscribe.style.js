import styled from "styled-components";
import { themeGet } from "styled-system";
import { rgba } from "polished";

const SectionWrapper = styled.section`
  background-color: ${themeGet("colors.primary")};
  padding: 75px 0;
  position: relative;
  z-index: 0;
  .illustration {
    position: absolute;
    z-index: -1;
  }
  .bg1 {
    top: 170px;
    left: 300px;
  }
  .bg2 {
    bottom: 0;
    right: 20px;
  }
  .bg3 {
    left: 0;
    top: 0;
  }
  .bg4 {
    right: 280px;
    top: 0;
  }
  .bg5 {
    left: 140px;
    bottom: 0;
  }
`;

export const FooterInner = styled.div`
  background-color: ${themeGet("colors.primary")};
  border-radius: 15px;
  /* border: 2px solid ${themeGet("colors.secondary")}; */
  padding: 60px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1023px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    padding: 35px;
  }
  > div {
    width: calc(100% / 2);
    @media only screen and (max-width: 1023px) {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  margin-right: 70px;
  @media only screen and (max-width: 1023px) {
    margin-right: 0;
  }
  h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 55px;
    letter-spacing: -0.5px;
    margin-bottom: 6px;
    @media only screen and (max-width: 600px) {
      font-size: 24px;
      line-height: 35px;
    }
  }
  p {
    color: #343d48;
    font-size: 16px;
    line-height: 30px;
  }
`;

export const SubscriptionForm = styled.div`
  > div {
    display: flex;
  }
  @media only screen and (max-width: 480px) {
    align-items: center;
  }
  .reusecore__input {
    width: 100%;
  }
  .field-wrapper {
    margin-right: 15px;
    input {
      background-color: #eff3f7;
      border: 0;
      font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 16px;
      min-height: 60px;
      padding: 0 24px;
      ::placeholder {
        color: ${rgba("#02073E", 0.4)};
        opacity: 1; /* Firefox */
      }
      &:focus {
        border-color: #ff825c;
      }

      @media only screen and (max-width: 480px) {
        min-height: 50px;
      }
    }
  }
  button {
    background-color: ${themeGet("colors.primary")};
    color: ${themeGet("colors.secondary")};
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.052);
    min-width: 150px;
    &:hover {
      box-shadow: ${themeGet("colors.primaryBoxShadow")};
    }
    @media only screen and (max-width: 480px) {
      min-width: 100px;
    }
  }
  .reusecore__checkbox {
    margin-top: 10px;
    .reusecore__field-label {
      cursor: pointer;
      color: ${rgba("#9095ad", 0.9)};
      font-weight: 400;
      font-size: 14px;
    }
    .checkbox + div {
      background-color: #eff3f7;
      border: 0;
      &::after {
        top: 2px;
      }
    }
  }
`;

export default SectionWrapper;
