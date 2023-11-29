import { atom, selector } from "recoil";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    // setSelf -> Callbacks to set or reset the value of the atom.
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    // onSet -> Subscribe to changes in the atom value.
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

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
  effects: [localStorageEffect("customCategories")],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [localStorageEffect("toDo")],
});

export const isNewCategorySelector = selector({
  key: "isNewCategory",
  get: ({ get }) => {
    const category = get(categoryState);
    return category === Categories.New;
  },
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
