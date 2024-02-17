import { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import reactLogo from "@/assets/images/react.svg";
import { TasksList } from "./sub/TasksList";
import { TextInput } from "./sub/TextInput";
import { Button } from "@/components/common/Button";
import { useTasksContext } from "@/context/Tasks.context";

export interface MainProps extends PropsWithStyles {}

export const Main = () => {
  const [input, setInput] = useState("");
  const { tasks, setTasks } = useTasksContext();

  const addTask = useCallback(() => {
    const content = input;
    if (!content) return;
    const task = { done: false, content };
    if (tasks.find((t) => t.content === content)) {
      // notify of an error
      window.alert("This task already exists.");
      return;
    }
    setTasks([...tasks, task]);
    setInput("");
  }, [tasks, input, setTasks]);

  return (
    <MainRoot>
      <Stack gap={12}>
        <TextInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onEnterUp={addTask}
        />
        <Button content="Add" onClick={addTask} />
      </Stack>
      <TasksList tasks={tasks} />
    </MainRoot>
  );
};

/* ------------- Styled components ------------- */
const MainRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
`;
