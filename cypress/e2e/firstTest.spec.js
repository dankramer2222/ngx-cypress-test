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
        //Theory
        //get() - find elements on the web page globally
        //find() - find child elements by locator
        //contains() - find Html text and by text and locator

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        //ex1
        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')
        //ex2 
        cy.contains('nb-card','Horizontal form').find('button')
        //ex3
        cy.contains('nb-card','Horizontal form').contains('Sign in')

        //cypress chains and DOM
        cy.get("#inputEmail3")
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

    })

    it.only('save subject of the command',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        // cy.contains('nb-card','Using the Grid').find('[class="label col-sm-3 col-form-label"]').should('contain','Password')

        // 1 Cypress Alias
        cy.contains('nb-card','Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain','Email')
        cy.get('@usingTheGrid').find('[class="label col-sm-3 col-form-label"]').should('contain','Password')
        // 2 Using the Cypress then() methods
        cy.contains('nb-card','Using the Grid').then(UsingTheGridForm =>{
            cy.wrap(UsingTheGridForm).find('[for="inputEmail1"]').should('contain','Email')
            cy.wrap(UsingTheGridForm).find('[class="label col-sm-3 col-form-label"]').should('contain','Password')
        })
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