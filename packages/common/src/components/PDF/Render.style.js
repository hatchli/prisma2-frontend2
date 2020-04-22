import styled from "styled-components";
import { themeGet } from "styled-system";

export const PagesWrapper = styled.div`
  display: flex;
`;

export const InteriorWrapper = styled.div`
  .glide__controls {
    margin-top: 30px;
  }

  .glide__controls > div,
  .glide__arrows > div {
    height: 18px;
    width: 100%;
    padding: 0;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: transparent;

    .prev_arrow {
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${themeGet("colors.label", "#C6C6C6")};
      transition: width 0.3s ease;
      position: relative;
      @media only screen and (max-width: 667px) {
        width: 20px;
      }

      &::before,
      &::after {
        content: "";
        display: block;
        width: 14px;
        height: 2px;
        border-radius: 4px;
        background-color: ${themeGet("colors.label", "#C6C6C6")};
        position: absolute;
        z-index: 1;
        transition: all 0.3s ease;
      }

      &.next_arrow {
        &::before {
          right: 0;
          transform: rotate(0);
          transform-origin: top right;
        }
        &::after {
          right: 0;
          transform: rotate(0);
          transform-origin: 14px 2px;
        }
      }

      &.prev_arrow {
        &::before {
          left: 0;
          transform: rotate(0);
          transform-origin: top left;
        }
        &::after {
          left: 0;
          transform: rotate(0);
          transform-origin: 0 2px;
        }
      }
    }

    .next_arrow {
      display: block;
      margin-left: 15px;
      width: 45px;
      height: 2px;
      border-radius: 4px;
      transition: width 0.3s ease;
      position: relative;
      background-color: ${themeGet("colors.primary", "#FDEF00")};
      @media only screen and (max-width: 667px) {
        width: 30px;
      }

      &::before,
      &::after {
        content: "";
        display: block;
        width: 24px;
        height: 2px;
        border-radius: 4px;
        background-color: ${themeGet("colors.primary", "#FDEF00")};
        position: absolute;
        z-index: 1;
        transition: all 0.3s ease;
      }
      &.next_arrow {
        &::before {
          right: 0;
          transform: rotate(42deg);
          transform-origin: top right;
        }
        &::after {
          right: 0;
          transform: rotate(-42deg);
          transform-origin: 24px 2px;
        }
      }
    }

    &:hover {
      > span {
        width: 45px;
        border-radius: 4px;
        background-color: ${themeGet("colors.primary", "#FDEF00")};
        @media only screen and (max-width: 667px) {
          width: 30px;
        }

        &::before,
        &::after {
          background-color: ${themeGet("colors.primary", "#FDEF00")};
        }

        &.prev_arrow {
          &::before {
            transform: rotate(-42deg);
          }
          &::after {
            transform: rotate(42deg);
          }
        }

        &.next_arrow {
          width: 70px;
          &::before {
            transform: rotate(42deg);
          }
          &::after {
            transform: rotate(-42deg);
          }
        }
      }
    }
  }
`;

export const Other = styled.span`
  .next_arrow {
    width: 45px;
    background-color: ${themeGet("colors.primary", "#FDEF00")};
    @media only screen and (max-width: 667px) {
      width: 30px;
    }

    &::before {
      background-color: ${themeGet("colors.primary", "#FDEF00")};
      transform: rotate(42deg);
    }

    &::after {
      background-color: ${themeGet("colors.primary", "#FDEF00")};
      transform: rotate(-42deg);
    }
  }
`;
