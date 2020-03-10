import styled from "styled-components";

const OptionWrapper = styled.section`
  .container {
    display: flex;
    @media (max-width: 480px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .frontend_image_area {
    justify-self: flex-end;
    justify-content: flex-end;
    margin-right: 0;
    z-index: 0;
    @media (max-width: 550px) {
      display: none;
    }
  }
  .backend_image_area {
    z-index: 0;
    /* width: 50%; */
    @media (max-width: 550px) {
      display: none;
    }
  }
  .desTitleWrapper {
    z-index: 1;
    width: 100%;
    transition: all 0.5s;
    @media (max-width: 550px) {
      width: 100%;
    }
    .desTitle {
      position: relative;
      transition: 0.35s ease-in-out;
      z-index: 1;
      &:before {
        content: "";
        position: absolute;
        width: calc(100% + 4px);
        height: 9px;
        background: #c2c7fb;
        bottom: 7px;
        left: -4px;
        z-index: -1;
        transform-origin: right center 0;
        transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
      }
    }

    .desOnHover {
      text-align: right;
    }
    .buttonStyle {
      .reusecore__button {
        background-color: transparent;
        > span {
          background-color: transparent;
          padding: 0;
          position: relative;
          @media (max-width: 700px) {
            font-size: 14px;
          }
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            background: #15172c;
            bottom: 1px;
            left: 0px;
            z-index: -1;
            transform-origin: right center 0;
            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
        }
      }
      &.signupBtn {
        .reusecore__button {
          margin-top: 75px;
          @media (max-width: 768px) {
            margin-top: 45px;
          }
          > span {
            &:after {
              content: none;
            }
          }
        }
      }
    }
  }
  .desTitleWrapperLeft {
    z-index: 1;
    position: absolute;
    left: 7%;
    align-items: flex-start;
    .desOnHoverLeft {
      text-align: left;
    }
  }
  .desTitleWrapperRight {
    z-index: 1;
    position: absolute;
    right: 10%;
  }
  .frontendBlock,
  .backendBlock {
    cursor: pointer;
    transition: all 0.5s ease;
    overflow: hidden;
    .desTitleWrapper {
      transform: translateY(50%);
      transition: all 0.5s;
    }

    @media (max-width: 550px) {
      padding: 15px;
    }
    @media (max-width: 480px) {
      background: #faf8ff;
      margin-bottom: 15px;
      margin-left: 0 !important;
      padding: 20px;
      border-radius: 5px;
    }
    .desOnHover {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      opacity: 0;
      visibility: hidden;
      @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        background: #faf8ff;
      }
    }
    &.active-item {
      background: #faf8ff;
      .frontend_image_area {
        opacity: 0.6;
        filter: blur(2px);
        -webkit-filter: blur(2px);
      }
      .backend_image_area {
        opacity: 0.6;
        filter: blur(2px);
        -webkit-filter: blur(2px);
      }
      /* -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px); */
      .desTitleWrapper {
        transform: translateY(0%);
      }
      @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
      }
      .desOnHover {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        opacity: 1;
        visibility: visible;
      }
    }
    .desDetailsFirst {
      margin-top: 65px;
      line-height: 32px;
      @media (max-width: 768px) {
        line-height: 22px;
        margin-top: 30px;
      }
    }
  }
  .backendBlock {
    margin-left: 10px;
    width: 100%;
    /* @media (max-width: 1440px) {
      width: 47%;
    } */
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .frontendBlock {
    width: 100%;
    margin-right: 10px;
    /* @media (max-width: 1440px) {
      width: calc(48% + 10px);
    } */
    @media (max-width: 480px) {
      width: 100%;
      margin-top: 15px;
    }
  }
`;

export { OptionWrapper };
