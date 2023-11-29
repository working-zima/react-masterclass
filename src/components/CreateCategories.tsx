import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { customCategoriesState } from "./atoms";

interface ICategoriesForm {
  newCategory: string;
}

function CreateCategories() {
  const [customCategories, setCustomCategories] = useRecoilState(
    customCategoriesState
  );
  const { register, handleSubmit, setValue } = useForm<ICategoriesForm>();

  const handleAddCategory = ({ newCategory }: ICategoriesForm) => {
    setCustomCategories((oldCategories) => [...oldCategories, newCategory]);
    setValue("newCategory", "");
  };

  return (
    <form onSubmit={handleSubmit(handleAddCategory)}>
      <input
        {...register("newCategory", {
          required: "Please write a new category",
        })}
        placeholder="Write a new category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategories;
