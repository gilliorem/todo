import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";

export interface CheckboxProps extends PropsWithStyles {}

export const Checkbox = ({ className }: CheckboxProps) => {
  return <CheckboxRoot type="checkbox" className={className} />;
};

/* ------------- Styled components ------------- */
const CheckboxRoot = styled.input`
  border: 1px solid black;
  border-radius: 50%;
  height: 20px;
  justify-self: start;
`;
