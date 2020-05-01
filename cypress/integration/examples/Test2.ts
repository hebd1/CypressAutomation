/// <reference types="Cypress" />

describe('My Second Test Suite', function() {

    it('Test Check Boxes', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // verify checkboxes are checked
        cy.get('#checkBoxOption1').check().should('be.checked', true).and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked', true)
        // get all checkboxes and only check selected boxes based on their values
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    })

    it('Test Dropdowns', function() {
        // static dropdown - select option
        // pass in value attribute to select option
        cy.get('select').select('option2').should('have.value', 'option2')

        // dynamic dropdown - type input
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if ($el.text() == 'India') {
                $el.click()
               
            }
        })
        // verify india was selected
        cy.get('#autocomplete').should('have.value', 'India')
    })

    it ('Test visibility of elements', function() {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
    })

    it ('Test radio buttons', function() {
        cy.get('input[value="radio2"').should('not.be.checked').click().should('be.checked')
    })

    it ('Test popup functionality', function() {
        // cypress automatically clicks ok on alerts
        cy.get('#alertbtn').click()
        // listen for browser events
        // window:alert
        cy.on('window:alert', (string) => {
            // mocha assertion
            expect(string).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()

        //window:confirm
        cy.on('window:confirm', (string) => {
            expect(string).to.equal('Hello , Are you sure you want to confirm?')
        })
        
    })

    it ('Test href functionality', function() {
        // must delete target attribute so that links don't open another tab
        // invoke jquery function to remove attribute on the target
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })
})