import { Button, Flex, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
  const onClickIsDone = () => {
    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        return { id: todo.id, content: todo.content, isDone: !todo.isDone };
      } else {
        return v;
      }
    });

    setTodos(temp);
  };

  return (
    <Flex bgColor="yellow.100" px={4} py={2} rounded="lg" gap={1}>
      <Text
        fontSize={20}
        w={48}
        isTruncated={true}
        textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
        onClick={onClickIsDone}
      >
        {todo.content}
      </Text>
      <Button colorScheme="blue">
        <FiEdit3 />
      </Button>
      <Button colorScheme="red">
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
