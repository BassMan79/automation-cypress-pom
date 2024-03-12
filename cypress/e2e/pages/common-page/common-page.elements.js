export class CommonPageElements{
    static get topMenu(){
        return {
            get signUp(){
                return cy.get('a[data-target="#signInModal"]');
            },
            get logIn(){
                return cy.get('a[data-target="#logInModal"]');
            },
            get logedUser(){
                return cy.get('#nameofuser');
            },
            get home(){
                return cy.contains('a', 'Home');
            },
            get cart(){
                return cy.contains('a', 'Cart');
            }
        };
    }
}

