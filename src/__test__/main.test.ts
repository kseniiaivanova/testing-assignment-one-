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
    functionsDom.displayError("error happened", true);

    //Assert
    // get elements
    const divElem: HTMLElement | null = document.getElementById("error");
    const text = divElem?.textContent;
    console.log(text);

    // check does div have same text as with we call function displayError
    expect(text).toEqual("error happened");

    // check does div have class "show"
    expect(divElem?.classList.contains("show")).toBe(true);
  });

  test("should remove class from errorContainer", () => {
    //Arrange
    document.body.innerHTML = `<div id="error" class="show"> </div>`;

    //Act
    functionsDom.displayError("error happened", false);

    //Assert
    const divElem: HTMLElement | null = document.getElementById("error");
    expect(divElem?.classList.contains("show")).toBe(false);
  });
});

/* test("should show error message", () => {
    //Assert
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    let container: HTMLElement | null = document.getElementById("error");
    let text = container?.textContent;

    //Act
    functionsDom.displayError("Du måste ange minst två bokstäver", true);

    //Assert

    //expect(text).toEqual("Du måste ange minst två bokstäver");
    expect(container?.classList.contains("show")).toBe(true);
  }); */
/* test("should add class to errorContainer", () => {
    //Arrange
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    let show: boolean = true;

    let error: string = "Du måste ange minst två bokstäver";
    let container: HTMLDivElement = document.getElementById(
      "error"
    ) as HTMLDivElement;

    //Act
    functionsDom.displayError(error, show);
    //Assert
    expect(container.innerHTML).toBe(
      `<div id="error" class="error show"></div>`
    );
  });

  test("should remove class from errorContainer", () => {
    //Arrange
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "error"
    ) as HTMLDivElement;

    let error: string = "Du måste ange minst två bokstäver";
    let show: boolean = false;

    //Act
    functionsDom.displayError(error, show);
    //Assert
    expect(container.innerHTML).toBe("");
  }); */
//}); */

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
    /*  document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let todos: Todo[] = [{ text: "go to work", done: false }];
    let li: HTMLLIElement = document.createElement("li");
    let todo = todos[1];
    todo.done = true;
    let spy = jest.spyOn(functionsDom, "toggleTodo").mockReturnValue();
    functionsDom.createHtml(todos);
    //Act

    document.querySelector("li")?.click();

    //Assert

    expect(spy).toHaveBeenCalled(); */
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
