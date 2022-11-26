/**
 *@jest-environment jsdom
 */

import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

import * as functionsDom from "../ts/main";

import * as functions from "../ts/functions";

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

describe("displayError", () => {
  test("should add class to errorContainer", () => {
    //Arrange
    //Act
    //Assert
  });
  test("should remove class from errorContainer", () => {
    //Arrange
    //Act
    //Assert
  });
});

describe("createHtml", () => {
  test("should put todos to localStorage", () => {
    //Arrange
    //Act
    //Assert
  });
  test("should create HTML for each todo", () => {
    //Arrange
    //Act
    //Assert
  });
  test("should add class to li element", () => {
    //Arrange
    //Act
    //Assert
  });
  test("should be able to click", () => {
    //Arrange
    //document.body.innerHTML=``
    //let spy = jest.spyOn(functions, "toggleTodo").mockReturnValue();
    //Act
    //functions.createHtml();
    //Assert
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
