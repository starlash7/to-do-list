import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "🏃‍♀️ 달리기",
    isDone: false,
  },
  {
    id: 2,
    content: "🏰 놀이동산가기",
    isDone: false,
  },
  {
    id: 3,
    content: "🗿 제주도가기",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo />
      <TodoList todos={todos} />
    </Flex>
  );
};

export default App;
