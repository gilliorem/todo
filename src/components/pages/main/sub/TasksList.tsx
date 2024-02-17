import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { Task as TaskComponent } from "./Task";
import { TaskParams } from "@/types/types";
import { useTasksContext } from "@/context/Tasks.context";

export interface TasksListProps extends PropsWithStyles {
  tasks: TaskParams[];
}

export const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <TasksListRoot>
      {tasks.map((t) => (
        <TaskComponent {...t} key={t.content} />
      ))}
    </TasksListRoot>
  );
};

/* ------------- Styled components ------------- */
const TasksListRoot = styled.div`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 12px;
  row-gap: 12px;
`;
