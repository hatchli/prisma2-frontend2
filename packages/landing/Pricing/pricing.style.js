import styled, { keyframes } from "styled-components";
import { themeGet } from "styled-system";
import error from "common/src/assets/image/error.svg";
import success from "common/src/assets/image/success.svg";

export const SectionWrapper = styled.div`
  width: 100%;
  padding: 130px 0 100px;
  margin: 81px 0;
  background-color: ${themeGet("colors.lightBg", "#fbfafe")};
  /* background-image: url(${mapImage}); */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media only screen and (max-width: 1440px) {
    margin: 70px 0;
    padding: 120px 0 90px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1360px) {
    margin: 50px 0;
    padding: 100px 0 70px;
    .row {
      > .col {
        /* &:first-child {
          width: 53%;
        }
        &:last-child {
          width: 47%; */
          width: 100%;
        
      }
    }
  }
  @media only screen and (max-width: 991px) {
    margin: 40px 0;
    padding: 80px 0 50px;
  }
  @media only screen and (max-width: 667px) {
    .row {
      > .col {
        width: 100%;
      }
    }
  }
`;

export const ContentArea = styled.div`
  padding-right: 99px;
  @media only screen and (max-width: 1440px) {
    padding-right: 40px;
  }
  @media only screen and (max-width: 1360px) {
    padding-right: 0;
  }
  @media only screen and (max-width: 667px) {
    max-width: 465px;
  }

  > p {
    color: ${themeGet("colors.text", "#4E5865")};
    font-size: 18px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 991px) {
      line-height: 30px;
    }
  }
`;

export const HeadingForm = styled.h2`
  font-size: 40px;
  line-height: 70px;
  font-weight: 300;
  margin: 0 0 20px;
  color: ${themeGet("colors.heading3", "#273343")};
  @media only screen and (max-width: 1440px) {
    font-size: 36px;
    line-height: 54px;
    margin: 0 0 27px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 34px;
    line-height: 52px;
    margin-bottom: 25px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 30px;
    line-height: 46px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 40px;
  }

  span {
    color: ${themeGet("color.secondary", "#D50032")};
  }
`;

export const ButtonGroupForm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 56px;
  @media only screen and (max-width: 1360px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 991px) {
    margin-top: 40px;
    align-items: flex-start;
    flex-direction: column;
  }
  @media only screen and (min-width: 481px) and (max-width: 667px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
  }

  .learn__more-btn {
    color: ${themeGet("color.primaryWithBg", "#34558b")} !important;

    &::before {
      background-color: ${themeGet(
        "colors.inactiveButton",
        "#b7dbdd"
      )} !important;
    }

    .hyphen {
      background-color: ${themeGet("color.primaryWithBg", "#34558b")}!important;
    }

    &:hover {
      color: ${themeGet("colors.heading", "#191919")}!important;

      &::before {
        background-color: ${themeGet(
          "color.primaryWithBg",
          "#34558b"
        )}!important;
      }

      .hyphen {
        background-color: ${themeGet("colors.heading", "#191919")}!important;
      }
    }

    &.alt {
      color: ${themeGet("colors.heading", "#191919")}!important;

      &::before {
        width: 100%;
        background-color: ${themeGet(
          "color.primaryWithBg",
          "#191919"
        )}!important;
      }

      .hyphen {
        background-color: ${themeGet("colors.heading", "#191919")}!important;
      }
    }
  }

  p {
    margin: 0;
    color: ${themeGet("colors.white", "#ffffff")};
    font-size: 14px;
    font-weight: 700;
    padding: 0 22px;
    @media only screen and (max-width: 991px) {
      padding: 7.5px 0;
      opacity: 0;
    }
    @media only screen and (min-width: 481px) and (max-width: 667px) {
      padding: 0 20px;
      opacity: 1;
    }
  }
`;

export const DonationForm = styled.form`
  padding: 50px;
  border-radius: 10px;
  background-color: ${themeGet("colors.white", "#ffffff")};
  @media only screen and (max-width: 1440px) {
    padding: 50px 45px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 40px 35px;
  }
  @media only screen and (max-width: 991px) {
    padding: 30px 20px;
  }
  @media only screen and (max-width: 667px) {
    max-width: 448px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  .input_group {
    input {
      @media only screen and (max-width: 1360px) {
        width: calc(100% - 140px);
        padding: 0 15px;
        font-size: 15px;
        height: 56px;
      }
      @media only screen and (max-width: 991px) {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      @media only screen and (max-width: 480px) {
        width: calc(100% - 110px);
        margin-bottom: 10px;
      }
    }
    .select_wrapper {
      @media only screen and (max-width: 1360px) {
        width: 140px;
      }
      @media only screen and (max-width: 480px) {
        width: 110px;
      }
      .current_option {
        @media only screen and (max-width: 1360px) {
          height: 56px;
        }
        @media only screen and (max-width: 991px) {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        .text {
          @media only screen and (max-width: 1360px) {
            font-size: 15px;
            margin-right: 10px;
          }
        }
        svg {
          @media only screen and (max-width: 1360px) {
            width: 12px;
            height: auto;
          }
        }
      }
      .dropdown {
        @media only screen and (max-width: 1360px) {
          top: 56px;
        }
        @media only screen and (max-width: 991px) {
          border-radius: 5px;
        }
      }
    }
  }

  .radio_group {
    margin-top: 50px;
    @media only screen and (max-width: 1440px) {
      margin-top: 45px;
    }
    @media only screen and (max-width: 1360px) {
      margin-top: 35px;
    }
    @media only screen and (max-width: 991px) {
      margin-top: 25px;
    }
    @media only screen and (max-width: 480px) {
      flex-direction: column;
      margin: 0;
    }

    label {
      @media only screen and (max-width: 1360px) {
        padding: 10px 15px;
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 10px 0;
      }
      &.active {
        border-color: ${themeGet("colors.primaryWithBg", "#028489")};
        background-color: ${themeGet("colors.primaryWithBg", "#028489")};
        p {
          color: ${themeGet("colors.white", "#ffffff")};
        }
      }

      h4 {
        font-size: 20px;
        font-weight: 600;
        @media only screen and (max-width: 1440px) {
          font-size: 16px;
          margin-bottom: 5px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
        }
      }

      p {
        color: ${themeGet("colors.textColor", "#484848")};
        font-size: 14px;
        @media only screen and (max-width: 1360px) {
          font-size: 13px;
        }
      }
    }
  }
`;

export const DonateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  border: 0;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  color: ${themeGet("colors.white", "#ffffff")};
  background-color: ${themeGet("colors.secondary", "#ff5b60")};
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 50px;
  text-transform: uppercase;
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
    height: 60px;
    margin-top: 45px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 16px;
    margin-top: 35px;
    height: 56px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 14px;
    margin-top: 25px;
    height: 54px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }

  img {
    margin-left: 13px;
  }

  .btn-icon {
    animation: ${shake} 1s infinite;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    background: repeating-linear-gradient(
      -45deg,
      ${themeGet("colors.secondary", "#ff5b60")},
      ${themeGet("colors.secondary", "#ff5b60")} 10px,
      ${themeGet("colors.secondaryHover", "#FF282F")} 10px,
      ${themeGet("colors.secondaryHover", "#FF282F")} 20px
    );
    transition: all 0.45s ease;
    @media only screen and (max-width: 1440px) {
      background: repeating-linear-gradient(
        -45deg,
        ${themeGet("colors.secondary", "#ff5b60")},
        ${themeGet("colors.secondary", "#ff5b60")} 8px,
        ${themeGet("colors.secondaryHover", "#FF282F")} 8px,
        ${themeGet("colors.secondaryHover", "#FF282F")} 16px
      );
    }
  }

  &:hover {
    &::before {
      left: 0;
      opacity: 0.2;
      visibility: visible;
    }
  }
`;

export const PricingTableWrapper = styled.div`
  .glide__slides {
    align-items: stretch;
    .glide__slide {
      height: auto;
    }
  }
`;

const shake = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateX(7px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const DonateButtonStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  border: 0;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  margin-top: 0.5rem;
  cursor: pointer;
  color: ${themeGet("colors.white", "#ffffff")};
  background-color: ${themeGet("colors.secondary", "#ff5b60")};
  position: relative;
  &:hover {
    opacity: 0.95;
    box-shadow: 0px 9px 21px rgba(131, 84, 255, 0.25);
  }
  .reusecore__button {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    background-color: transparent;
    .btn-icon {
      animation: ${shake} 1s infinite;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 50px;
  text-align: center;
  @media only screen and (max-width: 767px) {
    margin-top: 25px;
    margin-bottom: 54px;
  }

  .reusecore__button {
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    &:first-child {
      margin-right: 30px;
      &:hover {
        opacity: 0.95;
        box-shadow: 0px 9px 21px rgba(131, 84, 255, 0.25);
      }
    }

    &:hover {
      .btn-icon {
        animation: ${shake} 1s infinite;
      }
    }
  }
`;

export const ButtonGroupMobile = styled.div`
  margin-top: 50px;
  text-align: center;
  @media only screen and (max-width: 767px) {
    margin-top: 25px;
    margin-bottom: 54px;
  }

  .reusecore__button {
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    &:first-child {
      margin-right: 30px;
      &:hover {
        opacity: 0.95;
        box-shadow: 0px 9px 21px rgba(131, 84, 255, 0.25);
      }
    }

    .btn-icon {
      animation: ${shake} 1s infinite;
    }
  }
`;

export const FormWrapper = styled.form`
  margin-top: 45px;
  @media only screen and (max-width: 767px) {
    margin-top: 40px;
  }

  .reusecore__input {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    &::after {
      content: "";
      width: 16px;
      height: 16px;
      position: absolute;
      top: calc(50% - 16px / 2);
      right: 0px;
    }
    &.invalid {
      &::after {
        background-image: url(${error});
      }
    }
    &.valid {
      &::after {
        background-image: url(${success});
      }
    }
    &.is-material {
      &.is-focus {
        label {
          color: ${themeGet("colors.primary", "#10ac84")};
          top: -12px;
        }
        textarea {
        }

        .highlight {
          background-color: ${themeGet("colors.primary", "#10ac84")};
        }
      }
    }

    textarea {
      resize: none;
      font-family: inherit;
      font-size: inherit;
      background: rgba(0, 0, 0, 0);
      min-height: 6em;
    }

    input {
      background: rgba(0, 0, 0, 0);
    }

    label {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      top: 15px;
    }

    .input-icon {
      position: absolute;
      left: 22px;

      i {
        color: ${themeGet("colors.lightText", "#7E7E7E")};
        svg {
          width: auto;
          height: 24px;
        }
      }
    }
  }

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    top: calc(50% - 16px / 2);
    right: 25px;
  }

  &.invalid {
    &::after {
      background-image: url(${error});
    }
  }
  &.valid {
    &::after {
      background-image: url(${success});
    }
  }
`;

export const PricingTable = styled.div`
  border: 1px solid #f9fafb;
  border-radius: 5px;
  padding: 45px 45px 50px 45px;
  border-radius: 15px;
  background-color: #f9fafb;
  height: 100%;
  transition: 0.25s ease-in-out;
  @media (max-width: 767px) {
    padding: 45px 35px;
  }
  &:hover {
    background-color: #fff;
    border-color: #f2f4f7;
  }
`;

const PricingHead = styled.div`
  margin-bottom: 35px;
`;

const PricingPrice = styled.div`
  margin-bottom: 50px;
`;

const PricingButton = styled.div`
  text-align: center;
  .reusecore__button {
    border-radius: 4px;
  }
  .trial_button {
    font-size: 15px;
    font-weight: 500;
    color: #3b93ff;
    display: block;
    margin-top: 25px;
    transition: 0.15s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const PricingList = styled.div`
  margin-bottom: 50px;
`;

const ListItem = styled.div`
  display: flex;
  margin-bottom: 23px;
  justify-content: space-between;
  /* text-align: left; */
  &:last-child {
    margin-bottom: 0;
  }
  .itemCheckbox {
    width: 100%;
  }
  .price_list_icon {
    color: #18d379;
    margin-right: 10px;
  }
`;

const SwitchWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  .reusecore__switch {
    .reusecore__field-label {
      font-size: 16px;
      font-weight: 400;
      color: #5c636c;
      cursor: pointer;
    }
    input[type="checkbox"] {
      &:checked {
        + div {
          width: 40px !important;
          background-color: ${themeGet("colors.primary")};
          > div {
            left: 17px !important;
          }
        }
      }
      + div {
        background-color: #f0f0f0;
        background-color: #f0f0f0;
        border: 0;
        width: 40px;
        height: 25px;
        > div {
          background-color: #fff;
          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);
          width: 21px;
          height: 21px;
          top: 2px;
          left: 2px;
        }
      }
    }
  }
`;

const PricingButtonWrapper = styled.div`
  text-align: center;
  margin-top: 80px;
  position: relative;
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #e7e8eb;
    display: block;
    bottom: 0;
    left: 0;
  }
  .reusecore__button {
    font-size: 18px;
    font-weight: 500;
    color: #90949b;
    background: transparent;
    height: auto;
    min-width: 200px;
    border: none;
    padding-bottom: 30px;
    position: relative;
    transition: 0.15s ease-in-out;
    @media (max-width: 767px) {
      min-width: 0;
      padding: 0 15px 10px 15px;
      font-size: 14px;
    }
    &:hover {
      color: #ff4362;
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      display: block;
      background: #ff4362;
      transform: scaleX(0);
      transform-origin: right center 0;
      transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
    &.active-item {
      color: #ff4362;
      &:after {
        transform: scaleX(1);
        transform-origin: left center 0;
        transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
      }
    }
    @media (max-width: 575px) {
      font-size: 14px;
      height: 44px;
      width: 120px;
      padding: 0 5px;
    }
  }
  > a {
    font-size: 18px;
    font-weight: 500;
    color: #3b93ff;
    padding: 0 40px;
    @media (max-width: 767px) {
      padding: 0 15px 10px 15px;
      font-size: 14px;
      height: 46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  SwitchWrapper,
  PricingButtonWrapper
};
export default PricingTable;
