import('cypress-iframe');
/// <reference types="Cypress" /> 

it('Caso de prueba frames', () => {
    cy.visit('https://demoqa.com/frames');
    cy.frameLoaded('#frame1');
    cy.iframe('#frame1').find("h1[id = 'sampleHeading']").should('have.text','This is a sample page');
})