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

    it('save subject of the command',()=>{
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
    it('extract text values',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then( label =>{
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
            // also we can use cy wrap 
            cy.wrap(labelText).should('contain','Email address')
        })
        
        // 3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })
        // 4
        cy.get('[for="exampleInputEmail1"]').invoke('attr','class').then(classValue =>{
            expect(classValue).to.equal('label')
        })

        // 5 invoke property

        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop','value').should('contain','test@test.com')

})
    it('radio buttons',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click() 

        cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButtons =>{
            //select first radioButton by index and we need do force true because its visually hidden
            cy.wrap(radioButtons).eq(0).check({force:true}).should('be.checked')
            cy.wrap(radioButtons).eq(1).check({force:true})
            cy.wrap(radioButtons).eq(0).should('not.be.checked')
            cy.wrap(radioButtons).eq(2).should('be.disabled')
        })
    })
    it('check boxes',()=>{
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click() 

        cy.get('[type="checkbox"]').check({force:true})
       // cy.get('[type="checkbox"]').uncheck({force:true})
        
        cy.get('[type="checkbox"]').eq(0).click({force:true})
    })
    it.only('Date picker',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click() 

        // js object to pick always 5 day later
        let date = new Date()
        date.setDate(date.getDate() + 5)
        let futureDate = date.getDate()
        let dateToAssert = `May ${futureDate}, 2024`


        cy.contains('nb-card','Common Datepicker').find('input').then(input =>{
            cy.wrap(input).click()
            cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
            cy.wrap(input).invoke('prop','value').should('contain',dateToAssert)
            //second option for assertion this date and its much easier
            cy.wrap(input).should('have.value',dateToAssert)

        })
    })
