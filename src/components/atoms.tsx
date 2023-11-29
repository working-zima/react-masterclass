import { atom, selector } from "recoil";

export enum Categories {
  "New" = "+ New",
  "TO_DO" = "To Do",
  "DOING" = "Doing",
  "DONE" = "Done",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories | string;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const customCategoriesState = atom<string[]>({
  key: "customCategories",
  default: [],
});

export const isNewCategorySelector = selector({
  key: "isNewCategory",
  get: ({ get }) => {
    const category = get(categoryState);
    return category === Categories.New;
  },
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
