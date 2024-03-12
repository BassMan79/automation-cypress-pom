import { SignUpElements } from "./sign-up.elements";
import { CommonPageHelpers } from "../common-page/common-page.helpers";

export class SignUpHelpers{
    static insertUsername(username){
        SignUpElements.elements.username.type(username);
    }

    static insertPassword(password){
        SignUpElements.elements.password.type(password);
    }

    static clickOnSignUpBtn(){
        SignUpElements.elements.signUpBtn.click();
    }

    static createAccount(username, password){
        CommonPageHelpers.clickOnSignUpBtn();
        cy.wait(1000)
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignUpBtn();
    }
}