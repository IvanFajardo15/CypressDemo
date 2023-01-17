/// <reference types="Cypress" /> 
require('cypress-file-upload');
import 'cypress-iframe';
import Forms from './PageObjects/Demoqa';

it('Caso de prueba PageObjects', () => {
    cy.viewport(1200, 1000);
    const forms = new Forms();
    cy.visit('https://demoqa.com/automation-practice-form');
    
    forms.getFirstName().type('Ivan'); //first name
    cy.addLastName('Fajardo'); //last name
    forms.getHobbies2().check({ force: true }).should('be.checked');//hobbies 
    forms.getPhoneNumber().type('3212534148');//numero de teléfono
    forms.getDireccion().type('Prueba');//current address
    forms.getGenero().check({ force: true }).should('have.value', 'Male').and('be.checked');//seleccionar gender
    /* cy.get('#hobbies-checkbox-1').check({ force: true }).should('be.checked');
    cy.get('#hobbies-checkbox-1').uncheck({ force: true }).should('not.be.checked'); */

    //choose file o sube tu imagen --> upload
    forms.getAdjuntar().attachFile('Contrato duplicado.png');
    forms.getEstado().type('NCR{enter}', { force: true });
    forms.getCiudad().type('Delhi{enter}', { force: true });
    forms.getSubmitButton().contains('Submit').click({ force: true });
    cy.wait(4000);
    forms.getCloseButton().click({ force: true });
    // pasar esto a PageObject

})