/// <reference types="cypress" />

describe('First test suite',()=>{

    it('first test',()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by Tag name
        cy.get('input')
        //by ID 
        cy.get('#inputEmail1')
        //by Class value
        cy.get('.input-full-width')
        //by Attribute name
        cy.get('[fullwidth]')
        //by Attribute and value
        cy.get('[placeholder="Email"]')
        //by entire class value (it's kind of attribute)
        cy.get('[class="input-full-width size-medium shape-rectangle"')
        //by combining few attributes
        cy.get('[placeholder="Email"][fullwidth]')
        //by combining tag,id,class,attribute
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        //by cypress test ID
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second test',()=>{
        // code of the test
    })

    it('third test',()=>{
        // code of the test
    })
    
})

// describe('Second test suite',()=>{

//     it('first test',()=>{
//         // code of the test
//     })

//     it('second test',()=>{
//         // code of the test
//     })

//     it('third test',()=>{
//         // code of the test
//     })
    
// })