/// <reference types="Cypress" />

describe("WeatherPage", () => {
  it("select a city and show weather of that selected city", () => {
    cy.visit("http://localhost:3000/profile")
    cy.get('input').first().focus().type("test name")
    cy.get("#theme-selector-cy").type('dark{enter}')
    cy.get("#lang-selector-cy").type('english{enter}')
    cy.get("button").click()
  });
});
