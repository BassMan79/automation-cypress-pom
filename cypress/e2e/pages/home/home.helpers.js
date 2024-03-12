import { HomeElements } from "./home.elements";

export class HomeHelpers{
    static clickOnProductLink(productName){
        HomeElements.elements.productLink(productName).click();
    }
}