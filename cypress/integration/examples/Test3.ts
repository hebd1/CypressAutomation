/// <reference types="Cypress" />
// import home page module
import {HomePage} from '../pageObjects/HomePage';

describe ('My Third Test Suite', function() {

    // when loading fixtures, have to use before each because fixtures are 
    // cleared between tests
    this.beforeEach (() => {
        const url: string = 'https://rahulshettyacademy.com/AutomationPractice/'
        cy.visit(url)
        // load fixtures
        cy.fixture('example').as('example')
        cy.get('@example')
    })

    it ('Test navigating to URLs by grabbing href', () => {
        
        cy.get('#opentab').then((el) => {
            let url = el.prop('href')
            cy.log(url)
            // can't visit this url in the same test because its in a different domain
            // have to visit this url in a different test case
            //cy.visit(url)
        })
        
    })

    it ('Testing Using Fixtures', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // get data from fixture
        cy.get('@example').then((user:any) => {
            cy.get(':nth-child(1) > .form-control').type(user.name)
            cy.get('select').select(user.gender)
            // test attribute has value
            //cy.get('...').should('have.attr', 'minlength', 2)
        })
        
    })

    it ('Test custom commands', () => {
        // create new homepage object
        const homepage = new HomePage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // use homepage object to get shop tab
        homepage.getShopTab().click()
        cy.get('@example').then((products:any) => {
            products.ProductNames.forEach((product: string) => {
                cy.selectProduct(product)
            });
        })
    })

})