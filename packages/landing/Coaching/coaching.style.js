import styled from "styled-components";
import { themeGet } from "styled-system";

const FeatureSectionWrapper = styled.section`
  a {
    text-decoration: inherit;
    color: inherit;
  }
  padding: 80px 0 180px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .more_button {
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
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .feature__block {
    margin: 10px;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 20px 20px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.052);
    &:hover {
      background-image: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.031)
      );
    }
    @media (max-width: 500px) {
      padding: 15px 0;
      &:hover {
        background-image: none;
      }
    }
  }
  .btnGroups {
    margin-top: 30px;
    margin-bottom: 20px;
    .reusecore__button {
      font-weight: 500;
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.202);
      margin-right: 17px;
      padding-left: 30px;
      padding-right: 30px;
      font-size: 14px;
      text-transform: uppercase;
      @media only screen and (max-width: 480px) {
        width: 100%;
        &:nth-child(1) {
          margin-bottom: 15px;
        }
      }
      .btn-icon {
        margin-right: 10px;
        margin-top: -2px;
        img {
          height: 18px;
        }
      }
    }
  }
`;

export default FeatureSectionWrapper;
