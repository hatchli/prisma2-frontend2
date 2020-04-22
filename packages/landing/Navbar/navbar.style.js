import styled from "styled-components";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  color: ${themeGet("colors.primary")};
`;

export { Container };
