import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelpers{
    static generateRandomString = () =>{
        // Caracteres posibles para el nombre de usuario
       const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
       let randomstring = '';

       // Generar el nombre de usuario con 10 dígitos
       for (let i = 0; i < 10; i++) {
           const randomIndex = Math.floor(Math.random() * caracteres.length);
           randomstring += caracteres.charAt(randomIndex);
       }

       return randomstring;
   }

    static navigateToTheApplication(){
        cy.visit(CommonPageConstants.applicationUrl);
    }

    static clickOnSignUpBtn(){
        CommonPageElements.topMenu.signUp.click();
    }

    static clickOnLoginBtn(){
        CommonPageElements.topMenu.logIn.click();
    }

    static checkLogedUser(username){
        CommonPageElements.topMenu.logedUser.should('contain', `Welcome ${username}`);
    }

    static clickOnHomeBtn(){
        CommonPageElements.topMenu.home.click();
    }

    static clickOnCartBtn(){
        CommonPageElements.topMenu.cart.click();
    }
    
    static checkAlertMessage(message){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(message)
          })
    }
}