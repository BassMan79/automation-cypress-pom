export class LoginElements{
    static get elements(){
        return{
            get username(){
                return cy.get('#loginusername')
            },
            get password(){
                return cy.get('#loginpassword')
            },
            get signUpBtn(){
                return cy.contains("button", "Log in")
            }
        }
    }
}