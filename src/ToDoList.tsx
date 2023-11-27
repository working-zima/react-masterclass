import { useState } from "react";

import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setTodoError("To do should be longer");
    }
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      return setError(
        "password1",
        { message: "password are not the same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server offline" });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("firstName", {
            required: "First Name is required",
            validate: {
              noAdmin: (value) =>
                value.includes("admin") ? "no admin allowed" : true,
              noFuck: (value) =>
                value.includes("fuck") ? "no fuck allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Last Name is required" })}
          placeholder="Last Name"
        />
        <span>{errors.lastName?.message}</span>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: 10,
          })}
          placeholder="Username"
        />
        <span>{errors.username?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors.password?.message}</span>
        <input
          {...register("password1", {
            required: "Passowrd is required",
            minLength: { value: 5, message: "Your password is too short" },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
