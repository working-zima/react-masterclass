import { useRecoilState } from "recoil";
import { Categories, categoryState, customCategoriesState } from "./atoms";

function SelectCategories() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [customCategories] = useRecoilState(customCategoriesState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const dynamicOptions = Object.values(Categories).map((categoryValue) => (
    <option key={categoryValue} value={categoryValue}>
      {categoryValue}
    </option>
  ));

  const customOptions = customCategories.map((customCategory) => (
    <option key={customCategory} value={customCategory}>
      {customCategory}
    </option>
  ));

  return (
    <select value={category} onInput={onInput}>
      {dynamicOptions}
      {customOptions}
    </select>
  );
}

export default SelectCategories;
