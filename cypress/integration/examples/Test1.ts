/// <reference types="Cypress" />
// loads methods for cypress code completion

describe('My first test suite', function()
{
    it('My first test case', function(){
        // test go to URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // gets element on web page
        cy.get('.search-keyword').type('ca')
        cy.wait(2000) // wait for load
        // verify 4 vegetables are displayed
        // should - assert
        cy.get('.products').as('products')
        cy.get('@products').children().should('have.length', 4)
        //parent child chaining
        // eq - get the nth element
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        // iterate over elements / products
        cy.get('@products').find('.product').each(($el, index, $list) => {
            let vegText = $el.find('h4.product-name').text()
            // get element only with cashews text
            if (vegText.includes('Cashews')) {
                $el.find('button').click()
                cy.get('div.container div.container div.cart div.cart-info:nth-child(4) table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) td:nth-child(3) > strong:nth-child(1)').should('include.text', '1')

            }
        })

        cy.get('.brand').should('have.text', 'GREENKART')
        // logoElement is the web element retreived by the get function
        cy.get('.brand').then(function(logoElement) {
            // cy.log print output
            cy.log(logoElement.text())
            // logs to browser log
            console.log('')
        })
    })
})