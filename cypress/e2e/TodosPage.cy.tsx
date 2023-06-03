/// <reference types="Cypress" />

describe("WeatherPage", () => {
  it("select a city and show weather of that selected city", () => {
    cy.visit("http://localhost:3000/todos")
    cy.get("#insert-todo-text-cy").type('do homework')
    cy.get("#submit-todo-cy").click()
    cy.get("#edit-todo-cy").click()
    cy.get("#update-todo-text-cy").clear().type('do homework edited')
    cy.get("#update-todo-cy").click()
    cy.get("#complete-todo-cy").click()
    cy.get("#delete-todo-cy").click()
  });
});
