import styled from "styled-components";

type Props = {
  size: number;
  color?: string;
};

const Square = ({ size, color }: Props) => {
  return <StyledSquare size={size} color={color} />;
};

type StyledProps = Props;
const StyledSquare = styled.div<StyledProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.colors.primary};
  :hover {
    background-color: ${(props) => props.theme.colors.success};
    transform: rotate(360deg);
  }
  transition: all 0.3s ease-in-out;
`;

export default Square;
