import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { SyntheticEvent } from "react";

export interface TextInputProps extends PropsWithStyles {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ value, onChange, onEnterUp }: TextInputProps) => {
  return (
    <TextInputRoot
      type="text"
      value={value}
      onChange={onChange}
      onKeyUp={(e) => e.code === "Enter" && onEnterUp(e)}
    />
  );
};

/* ------------- Styled components ------------- */
const TextInputRoot = styled.input`
  ${theme.mixins.M}
  background-color: #e6e6e6;
  border: none;
  border-radius: 6px;
  :hover {
    outline: 1px solid white;
  }
  :focus-visible {
    outline: 1px solid grey;
  }
`;
