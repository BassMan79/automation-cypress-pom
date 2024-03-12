import { LoginElements } from "./login.elements";
import { CommonPageHelpers } from "../common-page/common-page.helpers";

export class LoginHelpers{
    static insertUsername(username){
        LoginElements.elements.username.type(username);
    }

    static insertPassword(password){
        LoginElements.elements.password.type(password);
    }

    static clickOnLoginBtn(){
        LoginElements.elements.signUpBtn.click();
    }

    static login(username, password){
        CommonPageHelpers.clickOnLoginBtn();
        cy.wait(1000)
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnLoginBtn();
    }
}