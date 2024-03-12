export class PlaceOrderElements{
    static get elements(){
        return{
            get nameInput(){
                return cy.get('#name');
            },
            get countryInput(){
                return cy.get('#country');
            },
            get cityInput(){
                return cy.get('#city');
            },
            get creditCardInput(){
                return cy.get('#card');
            },
            get monthInput(){
                return cy.get('#month');
            },
            get yearInput(){
                return cy.get('#year');
            },
            get purchaseBtn(){
                return cy.contains('.btn-primary', 'Purchase');
            },
            get succesfullMsg(){
                return cy.contains('h2', 'Thank you for your purchase!');
            },
            get confirmBtn(){
                return cy.get('.confirm');
            },
        }
    }
}