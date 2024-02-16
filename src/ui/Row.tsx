import styled, { css } from "styled-components";
// Define an interface for the props
interface RowProps {
  type?: string;
}
const Row = styled.section<RowProps>`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: center;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;
Row.defaultProps = {
  type: "vertical",
};
export default Row;
