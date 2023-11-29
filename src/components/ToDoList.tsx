import { useRecoilValue } from "recoil";
import { toDoSelector } from "./atoms";
import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import SelectCategories from "./SelectCategories";

const Title = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <Title>To Dos</Title>
      <Container>
        <CreateToDo />
        <SelectCategories />
      </Container>
      <Container>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </Container>
    </div>
  );
}

export default ToDoList;
