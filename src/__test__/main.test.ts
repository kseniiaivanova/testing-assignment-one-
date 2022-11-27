/**
 *@jest-environment jsdom
 */

import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

import * as functionsDom from "../ts/main";

import * as functions from "../ts/functions";

describe("displayError", () => {
  test("should add class to errorContainer", () => {
    //Arrange
    // create div with id error
    document.body.innerHTML = `<div id="error"> </div>`;

    //Act
    functionsDom.displayError("Du måste ange minst två bokstäver", true);

    //Assert
    // get elements
    let divElem: HTMLElement | null = document.getElementById("error");
    let text = divElem?.textContent;
    console.log(text);

    // check does div have same text as in function call displayError
    expect(text).toEqual("Du måste ange minst två bokstäver");

    // check does div have class "show"
    expect(divElem?.classList.contains("show")).toBe(true);
  });

  test("should remove class from errorContainer", () => {
    //Arrange
    document.body.innerHTML = `<div id="error" class="show"> </div>`;

    //Act
    functionsDom.displayError("Du måste ange minst två bokstäver", false);

    //Assert
    let divElem: HTMLElement | null = document.getElementById("error");
    expect(divElem?.classList.contains("show")).toBe(false);
  });
});

describe("createNewTodo", () => {
  test("should call createHtml", () => {
    //Arrange
    let textTodo: string = "go to school";
    let todos: Todo[] = [];
    let spy = jest.spyOn(functionsDom, "createHtml").mockReturnValue();

    //Act
    functionsDom.createNewTodo(textTodo, todos);

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call displayError", () => {
    //Arrange
    let textTodo: string = "mm";
    let todos: Todo[] = [];
    let spy = jest.spyOn(functionsDom, "displayError").mockReturnValue();
    //Act
    functionsDom.createNewTodo(textTodo, todos);
    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

describe("toggleTodo", () => {
  test("should call changeTodo", () => {
    //Arrange
    let spy = jest.spyOn(functions, "changeTodo").mockReturnValue();
    let todo = new Todo("write an essay", false);
    //Act
    functionsDom.toggleTodo(todo);
    //Assert
    expect(spy).toHaveBeenCalled();
  });
  test("should call createHTML", () => {
    //Arrange
    let spy = jest.spyOn(functionsDom, "createHtml").mockReturnValue();
    let todo = new Todo("buy food", false);

    //Act
    functionsDom.toggleTodo(todo);
    document.getElementById("clearTodos")?.click();
    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

describe("createHtml", () => {
  beforeEach(() => {
    jest.resetModules();

    jest.restoreAllMocks();
  });

  test("should change class of li element", () => {
    //Arrange
    let todos: Todo[] = [new Todo("buy some food", false)];
    let todo = todos[0];
    todo.done = true;
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let ul = document.getElementById("todos") as HTMLUListElement;
    //Act
    functionsDom.createHtml(todos);
    //Assert
    expect(ul.innerHTML).toBe(
      `<li class=\"todo__text--done todo__text\">buy some food</li>`
    );
  });

  test("should create HTML for each todo", () => {
    //Arrange
    let todos: Todo[] = [new Todo("buy some food", false)];
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let ul = document.getElementById("todos") as HTMLUListElement;
    //Act
    functionsDom.createHtml(todos);
    //Assert

    expect(ul.innerHTML).toBe(`<li class=\"todo__text\">buy some food</li>`);
  });

  test("should be able to call ToggleTodo", () => {
    //Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let todos: Todo[] = [{ text: "go to work", done: false }];
    let li: HTMLLIElement = document.createElement("li");
    let todo = todos[0];
    todo.done = true;
    let spy = jest.spyOn(functionsDom, "toggleTodo").mockReturnValue();
    functionsDom.createHtml(todos);
    //Act

    document.querySelector("li")?.click();

    //Assert

    expect(spy).toHaveBeenCalled();
  });
});

describe("clearTodos", () => {
  test("should call removeAllTodos", () => {
    //Arrange
    let spy = jest.spyOn(functions, "removeAllTodos").mockReturnValue();
    let todos: Todo[] = [new Todo("buy some bread", false)];

    //Act
    functionsDom.clearTodos(todos);
    //Assert
    expect(spy).toHaveBeenCalled();
  });
  test("should call createHtml", () => {
    //Arrange
    let spy = jest.spyOn(functionsDom, "createHtml").mockReturnValue();
    let todos: Todo[] = [new Todo("drink some tea", false)];
    //Act
    functionsDom.clearTodos(todos);
    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

describe("init", () => {
  test("should be able to click", () => {
    //Arrange
    let spy = jest.spyOn(functionsDom, "clearTodos").mockReturnValue();
    document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;
    functionsDom.init();
    //Act
    document.getElementById("clearTodos")?.click();
    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call createNewTodo", () => {
    //Arrange
    let spy = jest.spyOn(functionsDom, "createNewTodo").mockReturnValue();
    document.body.innerHTML = `<form id="newTodoForm">
    <div>
      <input type="text" id="newTodoText" />
      <button>Skapa</button>
      <button type="button" id="clearTodos">Rensa lista</button>
    </div>
    <div id="error" class="error"></div>
  </form>`;
    functionsDom.init();
    //Act

    document.querySelector("button")?.click();

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});
