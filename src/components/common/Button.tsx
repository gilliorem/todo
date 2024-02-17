import { ReactNode } from "react";
import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { getClasses } from "@/utils/class";

export interface ButtonProps extends PropsWithStyles {
  onClick?: () => void;
  content: ReactNode;
}

export const Button = ({ className, content, onClick }: ButtonProps) => {
  return (
    <ButtonRoot onClick={onClick} className={getClasses(["button", className])}>
      <Text type="button">{content}</Text>
    </ButtonRoot>
  );
};

/* ------------- Styled components ------------- */
const ButtonRoot = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  border: none;
  border-radius: 60px;
  background-color: lightblue;

  .text {
    display: block;
    text-align: end;
  }

  :hover {
    cursor: pointer;
    border: none;
    background-color: #8bc7db;
  }

  :focus-visible,
  :active {
    border: none;
    outline: 1px solid grey;
  }
`;
