import styled from "styled-components";
type Props = {
  size?: number | "default" | "small" | "large";
  color?: string;
};

export const Square = ({ size, color }: Props) => {
  return <StyledSquare size={size} color={color} />;
};

type StyledProps = Props;
const StyledSquare = styled.div<StyledProps>`
  width: ${(props) => {
    if (typeof props.size === "number") {
      return `${props.size}px`;
    } else {
      if (props.size === "small") {
        return "50px";
      }
      if (props.size === "large") {
        return "150px";
      }
      if (props.size === "default") {
        return "100px";
      }
    }
  }};
  height: ${(props) => {
    if (typeof props.size === "number") {
      return `${props.size}px`;
    } else {
      if (props.size === "small") {
        return "50px";
      }
      if (props.size === "large") {
        return "150px";
      }
      if (props.size === "default") {
        return "100px";
      }
    }
  }};
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.primary};
  :hover {
    background-color: ${(props) => props.theme.colors.success};
    transform: rotate(360deg);
  }
  transition: all 0.3s ease-in-out;
`;
