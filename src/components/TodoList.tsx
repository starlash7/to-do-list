import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const TodoList: FC = () => {
  return (
    <Flex
      bgColor="yellow.100"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
    >
      TodoList
    </Flex>
  );
};

export default TodoList;
