it('Caso de prueba select', () => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator.html');
    cy.get('#selectBuild').select('1');
    // realizar 4 casos de prueba para esta página que contenga validaciones
    //1 suma de dos números
    cy.get('#number1Field').type('1100');
    cy.get('#number2Field').type('3254');
    cy.get('#selectOperationDropdown').should('have.value', 0);
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 4354);
    //2 mutiplicación de dos números
    cy.get('#clearButton').click();
    cy.get('#numberAnswerField').should('have.value', '');
    cy.get('#number1Field').clear().should('have.value', '');
    cy.get('#number2Field').clear().should('have.value', '');
    cy.get('#number1Field').type('7');
    cy.get('#number2Field').type('8');
    cy.get('#selectOperationDropdown').select('2');
    cy.get('#calculateButton').click();
    cy.get('#numberAnswerField').should('have.value', 56);
    //3 división de dos números
    cy.get('#clearButton').click();
    cy.get('#numberAnswerField').should('have.value', '');
    cy.get('#number1Field').clear().should('have.value', '');
    cy.get('#number2Field').clear().should('have.value', '');
    cy.get('#number1Field').type('7');
    cy.get('#number2Field').type('8');
    cy.get('#selectOperationDropdown').select('3');
    cy.get('#calculateButton').click();
    cy.get('#integerSelect').should('not.be.checked');
    cy.get('#numberAnswerField').should('have.value', 0.875);
    //4 división con la opción de solo enteros marcada
    cy.get('#clearButton').click();
    cy.get('#numberAnswerField').should('have.value', '');
    cy.get('#number1Field').clear().should('have.value', '');
    cy.get('#number2Field').clear().should('have.value', '');
    cy.get('#number1Field').type('8');
    cy.get('#number2Field').type('7');
    cy.get('#selectOperationDropdown').select('3');
    cy.get('#calculateButton').click();
    cy.get('#integerSelect').check().should('be.checked');
    cy.get('#numberAnswerField').should('have.value', 1);
})
