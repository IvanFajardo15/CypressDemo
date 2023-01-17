/// <reference types="Cypress" /> 

it('Primer caso de prueba', ()=>{
cy.visit('https://demoqa.com/automation-practice-form');
cy.get("#firstName").type("Ivan");
cy.get("#lastName").type("Fajardo");
cy.get("#userEmail").type("iafajardoc@gmail.com");
/* cy.get("#hobbies-checkbox-1").check({force:true}).should("be.checked");
cy.get("#hobbies-checkbox-2").check({force:true}).should("be.checked");
cy.get("#hobbies-checkbox-3").check({force:true}).should("be.checked"); */
cy.get("input[type = 'checkbox']").check(['1','2','3'],{force:true});// buscar la forma de que funcione el force para los 3 checks

})


//Mocha

/*it('Segundo caso de prueba', ()=>{
    cy.visit('www.google.com');
    cy.wait(4000);
    })*///Mocha


    //Locators