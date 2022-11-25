/**
 *@jest-environment jsdom
 */

import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

import * as functions from "../ts/main";

import * as functions2 from "../ts/functions";

describe("createNewTodo", () => {
  test("should create HTML for todo", () => {
    //Arrange
    //Act
    //Assert
  });
  test("should call displayError", () => {
    //Arrange
    //Act
    //Assert
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
    //Act
    //Assert
  });
  test("should call createHTML", () => {
    //Arrange
    //Act
    //Assert
  });
});

describe("clearTodos", () => {
  test("should call removeAllTodos", () => {
    //Arrange
    //Act
    //Assert
  });
  test("should call createHtml", () => {
    //Arrange
    //Act
    //Assert
  });
});

describe("init", () => {
  test("should be able to click", () => {
    //Arrange
    let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
    document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;
    functions.init();

    //Act

    document.getElementById("clearTodos")?.click();
    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call createNewTodo", () => {
    //Arrange
    //Act
    //Assert
  });
});
