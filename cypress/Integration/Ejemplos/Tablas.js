/// <reference types="Cypress" />

it('Caso de prueba de tablas', () => {

    cy.visit('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=DOGS');
    cy.get('td:nth-child(1)').each(($el, index, $list) => {
        const textoTabla = $el.text();

        if(textoTabla.includes('K9-RT-01')){

            cy.get('td:nth-child(1)').eq(index).next().then((namePerro)=>{

                const nombrePerro = namePerro.text();
                expect(nombrePerro).to.equal('Golden Retriever');
            })
        }

    })
})