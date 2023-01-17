/// <reference types="Cypress" />
import LoginPage from "./PageObjects/LoginPage";

it('Caso de prueba objetos', () => {
    
    cy.fixture("example.json").then((data)=>{
        const loginPage = new LoginPage();
        cy.visit('https://www.demoblaze.com/index.html');
    
        //con objetos
        loginPage.getLinkLogin().click();
        cy.wait(2000);
        //sin objetos
        /* cy.get('#login2').click();//Obtener el link de acceso del login -> getLinkLogin()
        cy.wait(2000); */
        /*************************/
        loginPage.getUserName().type(data.userName[1]);//obtener e ingresar el usuario a loguearse -> getUserName()
        cy.wait(2000);
        loginPage.getPassword().type(data.password[1]);//obtener e ingresar el password -> getPassword()
        cy.wait(2000);
        cy.get("[type='button']").contains('Log in').click();// Click en el botón de login -> getClickLoginButton()


    });
    
})