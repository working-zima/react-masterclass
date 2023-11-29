import { useRecoilValue } from "recoil";
import { isNewCategorySelector, toDoSelector } from "./atoms";
import styled from "styled-components";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import SelectCategories from "./SelectCategories";
import CreateCategories from "./CreateCategories";

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
  const isNewCategory = useRecoilValue(isNewCategorySelector);

  return (
    <div>
      <Title>To Dos</Title>
      <Container>
        {isNewCategory ? <CreateCategories /> : <CreateToDo />}
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
