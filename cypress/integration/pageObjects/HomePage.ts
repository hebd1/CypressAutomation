export class HomePage {

    // default constructor 
    // constructor() {

    // }

    getEditBox() {
        return cy.get('input[name="name"]:nth-hild(2)');
    }

    getTwoWayDataBind() {
        return cy.get(':nth-child(4) > .ng-untouched');
    }

    getEntrepreneur() {
        //...
    }

    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link');
    }
}
