import { useCallback, useState } from "react";
import { TaskParams } from "@/types/types";
import {
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";

export interface TasksContextProps {
  tasks: TaskParams[];
  setTasks: (tasks: TaskParams[]) => void;
  toggleDone: (indexOrContent: string | number) => void;
  removeTask: (indexOrContent: string | number) => void;
}

export const TasksContext = createContext<TasksContextProps | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context)
    throw Error("useTasksContext must be called inside a TasksContextProvider");
  return context;
};

export interface TasksProviderProps extends PropsWithChildren {}

const TasksContextProvider = memo(({ children }: TasksProviderProps) => {
  const [tasks, setTasks] = useState<TaskParams[]>([
    { done: false, content: "todo1 très long content" },
    {
      done: false,
      content:
        "Lorem ipsum le plus long du monde pour voir si on gère le multiline et que c'est pas trop dégueu",
    },
    { done: false, content: "1" },
    { done: false, content: "todo1 trys" },
  ]);

  const toggleDone = useCallback(
    (indexOrContent: string | number) => {
      let taskIndex: number;
      if (typeof indexOrContent === "string") {
        taskIndex = tasks.findIndex((t) => t.content === indexOrContent);
      } else {
        taskIndex = indexOrContent;
      }
      const newTasks = [...tasks];
      newTasks[taskIndex].done = !newTasks[taskIndex].done;
      setTasks(newTasks);
    },
    [tasks]
  );

  const removeTask = useCallback(
    (indexOrContent: string | number) => {
      let taskIndex: number;
      if (typeof indexOrContent === "string") {
        taskIndex = tasks.findIndex((t) => t.content === indexOrContent);
      } else {
        taskIndex = indexOrContent;
      }
      const newTasks = [...tasks].filter((_, i) => i !== taskIndex);
      setTasks(newTasks);
    },
    [tasks]
  );

  const value = useMemo(
    () => ({
      tasks,
      setTasks,
      toggleDone,
      removeTask,
    }),
    [tasks, toggleDone, removeTask]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
});

export default TasksContextProvider;
