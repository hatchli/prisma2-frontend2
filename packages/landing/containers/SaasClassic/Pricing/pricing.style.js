import styled, { keyframes } from "styled-components";
import { themeGet } from "styled-system";
import error from "common/src/assets/image/error.svg";
import success from "common/src/assets/image/success.svg";

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

const PricingTable = styled.div`
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
