/// <reference types="Cypress" />

it('Caso de prueba con excel', () => {


    cy.fixture('datosFromExcel').then((data) => {
        data.forEach(key => {
            const fullName = key['email'];
            console.log(fullName);
            cy.visit('https://demoqa.com/text-box');

            cy.get('#userName').type(key['fullName']);
            cy.get('#userEmail').type(key['email']);
            cy.get('#currentAddress').type(key['currentAddress']);
            cy.get('#permanentAddress').type(key['permanentAddress']);
            cy.get('#submit').click();
        });

    });

})