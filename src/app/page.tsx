"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("");

  const [todoList, setTodoList] = useState([
    { todo: "Apple", id: 0 },
    { todo: "Bat", id: 1 },
  ]);

  const AddTodo = () => {
    if (state.length >= 1 && state) {
      setTodoList([...todoList, { todo: state, id: todoList.length + 1 }]);
      setState("");
    } else alert("Please Add Todo");
  };

  const UpdateTodo = (todoId: number) => {
    if (state.length >= 1 && state) {
      // setTodoList((prevTodos: any[]) =>
      //   prevTodos.map((todo) =>
      //     todo.id === todoId ? { ...todo, todo: state } : todo
      //   )
      // );

      const update = todoList.map((item) =>
        item.id === todoId ? { ...item, todo: state } : item
      );
      setTodoList(update);
      setState("");
    } else alert("Please Select Todo");
  };

  const DeleteTodo = (todoId: number) => {
    // console.log("todoID", todoId);
    // const deleteTodos = todoList?.map((item, index) => {
    //   if (item.id === todoId) {
    //     todoList.splice(todoId, 1);
    //   }
    // });

    // const newTodos = [...todoList];
    // newTodos.splice(todoId, 1);

    setTodoList(function (todoList: any) {
      return todoList.filter((item: any) => item.id !== todoId);
    });
    // setTodoList((todoList) => todoList.filter((task) => task.id !== todoId));
  };

  return (
    <main className="">
      <h1 className="flex justify-center font-bold text-lg mt-5">Todo App</h1>
      <p className="flex justify-center ">
        Tech: Next.js, Typescript, Tailwind{" "}
      </p>

      <div className="flex justify-center mt-5">
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="rounded bg-slate-200 border border-blue-400 me-2 outline-none px-3 "
        />

        <button
          type="button"
          onClick={AddTodo}
          className="rounded bg-blue-500 text-white p-2"
        >
          Add Todo
        </button>
      </div>

      <div className="mx-auto mt-3 flex w-1/2 justify-center flex-wrap ">
        {todoList &&
          todoList?.map((item, i) => (
            <div key={i} className=" bg-gray-400 rounded m-2 px-2">
              <p className="text-center">
                <span
                  className="ms-2 cursor-pointer"
                  onClick={() => setState(item.todo)}
                >
                  {item?.todo}
                </span>
                {/* <input
                  className="text-white bg-gray-400 min-w-min outline-none py-1 px-2"
                  type="text"
                  value={item?.todo}
                  onChange={(e) => e.target.value}
                  // onClick={() => UpdateTodo(item.id)}
                  // disabled
                /> */}
                <span
                  className="ms-2 cursor-pointer"
                  onClick={() => UpdateTodo(item?.id)}
                >
                  &#9998;
                </span>
                <span
                  className="ms-2 cursor-pointer"
                  onClick={() => DeleteTodo(item?.id)}
                >
                  &#10060;
                </span>
              </p>
            </div>
          ))}
      </div>
    </main>
  );
}
