export class SignUpElements{
    static get elements(){
        return{
            get username(){
                return cy.get('#sign-username')
            },
            get password(){
                return cy.get('#sign-password')
            },
            get signUpBtn(){
                return cy.contains("button", "Sign up")
            }
        }
    }
}