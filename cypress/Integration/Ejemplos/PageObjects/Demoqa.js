class Forms{
 
    getFirstName(){
        return cy.get('#firstName');
    }
    
    getLastName(){
        return cy.get('#lastName');
    }
    getHobbies2(){
        return cy.get('#hobbies-checkbox-2');
    }
    getPhoneNumber(){
        return cy.get('#userNumber');
    }
    getDireccion(){
        return cy.get('#currentAddress');
    }
    getGenero(){
        return cy.get('#gender-radio-1');
    }
    getAdjuntar(){
        return cy.get('#uploadPicture');
    }
    getEstado(){
        return cy.get('#react-select-3-input');
    }
    getCiudad(){
        return cy.get('#react-select-4-input');
    }
    getSubmitButton(){
        return cy.get('#submit');
    }
    getCloseButton(){
        return  cy.get('#closeLargeModal');
    }
    }
    
    export default Forms;