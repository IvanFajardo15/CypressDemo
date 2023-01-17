/// <reference types="Cypress" /> 

it('Caso de prueba Alerts', () => {
    cy.visit('https://demoqa.com/alerts');
    /* cy.get('#timerAlertButton').click();
    cy.on('window:alert',(textModal)=>{ //Solo para alertar que tienen como opción el OK únicamente
        cy.wait(6000);
        expect((textModal)).equal('This alert appeared after 5 seconds');
    }); */ 
    /* cy.get('#confirmButton').click();
    cy.on('window:confirm',(textModal)=>{ //Solo para alertar que tienen como opción el OK únicamente

        expect((textModal)).equal('Do you confirm action?');
        return false;
    }) */
    // Stubs
cy.window().then((win)=>{
    //cy.stub(win,'prompt').returns('Texto de prueba');
    cy.get('#promtButton').click();
    cy.stub(win,'prompt').callsFake(()=>{});
});

})