/// <reference types="Cypress" />

describe("WeatherPage", () => {
  it("select a city and show weather of that selected city", () => {
    cy.visit("http://localhost:3000/weather")
    cy.get("#citySelector-cy").type('sanandaj{enter}').then(() => {
      cy.get("#cityDetail-cy").find('h5').should('not.be.empty')
      cy.get("#cityDetail-cy").find('p').should('not.be.empty')
    })
  });
});
