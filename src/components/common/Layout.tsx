import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { Stack } from "@/components/common/Stack";
import { ReactNode } from "react";
import { Header } from "./Header/Header";
import TasksContextProvider from "@/context/Tasks.context";

export interface LayoutProps extends PropsWithStyles {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutRoot>
      <Header />
      <TasksContextProvider>{children}</TasksContextProvider>
    </LayoutRoot>
  );
};

/* ------------- Styled components ------------- */
const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
`;
