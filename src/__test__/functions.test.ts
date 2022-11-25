import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

describe("addTodo", () => {
  test("should add new todo", () => {
    //Arrange
    let todoText: string = "buy tickets";
    let newList: Todo[] = [];
    //Act
    let result = addTodo(todoText, newList);
    //Assert
    expect(newList.length).toBe(1);
    expect(result.success).toBe(true);
  });

  test("should not add new todo", () => {
    //Arrange
    let todoText: string = "oj";
    let newList: Todo[] = [];

    //Act

    let result = addTodo(todoText, newList);

    //Assert

    expect(newList.length).toBe(0);
    expect(result.success).toBe(false);
  });
});

describe("changeTodo", () => {
  test("should change property of done", () => {
    //Arrange
    let testTodo = new Todo("drive to Florida", true);
    //Act
    changeTodo(testTodo);
    //Assert
    expect((testTodo.done = false));
  });
});

describe("removeAllTodos", () => {
  test("should remove all todos", () => {
    //Arrange
    let listToEmpty: Todo[] = [
      { text: "go to work", done: true },
      { text: "buy flowers", done: false },
    ];
    //Act
    removeAllTodos(listToEmpty);
    //Assert
    expect(listToEmpty.length).toBe(0);
  });
});
