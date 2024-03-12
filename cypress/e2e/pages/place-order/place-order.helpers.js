import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderHelpers{
    static fillFormToPurchase(name, country, city, creditCardNumber, month, year){
        PlaceOrderElements.elements.nameInput.type(name);
        PlaceOrderElements.elements.countryInput.type(country);
        PlaceOrderElements.elements.cityInput.type(city);
        PlaceOrderElements.elements.creditCardInput.type(creditCardNumber);
        PlaceOrderElements.elements.monthInput.type(month);
        PlaceOrderElements.elements.yearInput.type(year);
    }

    static clickOnPurchaseBtn(){
        PlaceOrderElements.elements.purchaseBtn.click();
    }

    static checkPlaceOrderSuccessMsg(){
        PlaceOrderElements.elements.succesfullMsg.should('be.visible');
    }

    static clickOnConfirmBtn(){
        PlaceOrderElements.elements.confirmBtn.click();
    }
}