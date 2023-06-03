/// <reference types="Cypress" />

describe("WeatherPage", () => {
  it("select a city and show weather of that selected city", () => {
    cy.visit("http://localhost:3000/weather")
    cy.get("#city-selector-cy").type('sanandaj{enter}').then(() => {
      cy.get("#city-detail-cy").find('h5').should('not.be.empty')
      cy.get("#city-detail-cy").find('p').should('not.be.empty')
    })
  });
});
