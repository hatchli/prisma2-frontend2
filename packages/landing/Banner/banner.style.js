import styled from "styled-components";
import { themeGet } from "styled-system";
import { rgba } from "polished";
const BannerWrapper = styled.section`
  position: relative;
  background-color: #030b16;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    padding-top: 220px;
    min-height: 80vh;
    height: 100%;
  }

  @media (min-width: 1800px) {
    padding-top: 240px;
  }
  @media (min-width: 2200px) {
    padding-top: 300px;
  }

  .image_area {
    @media (max-width: 767px) {
      display: block;
    }
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
  .more_button {
    background-color: ${themeGet("colors.transparent")};
    color: ${themeGet("colors.primary")};
    border-radius: 5px;
    border: 1px solid rgba(225, 225, 225, 0.152);
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

export default BannerWrapper;
