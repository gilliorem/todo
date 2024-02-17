import styled from "@emotion/styled";
import { PropsWithStyles } from "@/types/styles";
import { Stack } from "@/components/common/Stack";
import { Text } from "@/components/common/Text";
import { theme } from "@/styles/theme";
import { useTasksContext } from "@/context/Tasks.context";
import closeIcon from "@/assets/images/close.svg";
import { TaskParams } from "@/types/types";

export interface TaskProps extends PropsWithStyles<TaskParams> {}

export const Task = ({ done, content, className }: TaskProps) => {
  const { toggleDone, removeTask } = useTasksContext();
  return (
    <TaskRoot className={className}>
      <Line done={done} />
      <Checkbox type="checkbox" onChange={() => toggleDone(content)} />
      <StyledText type="M">{content}</StyledText>
      <IconContainer onClick={() => removeTask(content)}>
        <img src={closeIcon} />
      </IconContainer>
    </TaskRoot>
  );
};

/* ------------- Styled components ------------- */
const TaskRoot = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: subgrid;
  grid-column: span 3;
  align-items: center;
`;

const StyledText = styled(Text)`
  justify-self: start;
`;

const Checkbox = styled.input`
  border: 1px solid black;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  justify-self: start;
`;

const Line = styled.div<{ done: boolean }>`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  top: 50%;
  ${({ done }) => done && "opacity: 1"};
  pointer-events: none;
`;

const IconContainer = styled.div`
  width: 25px;
  height: 25px;
  :hover {
    opacity: 0.6;
  }
`;
