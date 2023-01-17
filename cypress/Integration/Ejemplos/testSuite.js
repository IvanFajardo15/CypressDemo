describe('Test Suite 1', ()=>{

    before(()=>{

        cy.log("Este hook se inicia antes que todos una sola vez");

    })

    beforeEach(()=>{

        cy.log("Este hook se repite al inicio de cada caso de prueba");

    })

    afterEach(()=>{

        cy.log('Este Hook se repite al final de cada caso de prueba');

    })
    after(()=>{

        cy.log("Este hook se inicia después que todos una sola vez");

    })

    it('Caso de prueba 1',()=>{

    })

    it('Caso de prueba 2',()=>{
        
    })
})