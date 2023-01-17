describe('Test suite 1', () => {

    before(() => {

        cy.visit('https://demoqa.com');
        cy.url().should('contain', 'demoqa');

    })

    beforeEach(() => {

        cy.visit('https://demoqa.com/text-box');

    })

    afterEach(() => {

        cy.url().should('eq', 'https://demoqa.com/text-box');
    })
    
    after(() => {
    cy.get('#output').should('contain','Name:Test');
        
    })

    it('Caso de prueba 1', () => {

        cy.log("Hola soy el caso de prueba 1");
    })
    it('Caso de prueba 2', () => {
        //cy.log("Hola soy el caso de prueba 2");
        cy.get('#userName').type('Test');
        cy.get('#userEmail').type('Test@test.com');
        cy.get('#currentAddress').type('dirección1');
        cy.get('#permanentAddress').type('dirección2');
        cy.get('#submit').click();
    })
})