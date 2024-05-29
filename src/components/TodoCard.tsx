import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

interface TodoCard {
  todo: ITodo;
}

const TodoCard: FC<TodoCard> = ({ todo }) => {
  return (
    <Flex bgColor="blue.100" px={4} py={2} rounded="lg" gap={1}>
      <Text fontSize={20} w={48} isTruncated={true}>
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
