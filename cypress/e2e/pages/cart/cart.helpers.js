import { CartElements } from "./cart.elements";

export class CartHelpers{
    static checkProductsInCart(product){
        CartElements.elements.tableWithProducts.contains(product);
    }

    static clickOnPlaceOrderBtn(){
        CartElements.elements.placeOrderBtn.click();
    }
}