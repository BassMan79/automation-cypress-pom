import { CartHelpers } from "../pages/cart/cart.helpers";
import { CommonPageConstants } from "../pages/common-page/common-page.constants";
import { CommonPageHelpers } from "../pages/common-page/common-page.helpers";
import { HomeConstants } from "../pages/home/home.constants";
import { HomeHelpers } from "../pages/home/home.helpers";
import { LoginHelpers } from "../pages/login/login.helpers";
import { PlaceOrderHelpers } from "../pages/place-order/place-order.helpers";
import { PlaceOrderConstants } from "../pages/place-order/place-order.constants";
import { ProductConstants } from "../pages/product/product.constant";
import { ProductHelpers } from "../pages/product/product.helpers";
import { SignUpHelpers } from "../pages/sign-up/sign-up.helpers";

describe('Place order', ()=>{
    it('Place order with newly created user', () =>{
        const username = CommonPageHelpers.generateRandomString();
        const password = CommonPageHelpers.generateRandomString();
        //const signUpAlertMessage = CommonPageConstants.loginAlertMessage;
        const productName = HomeConstants.testData.productName;
        //const productAddedAlertMessage = ProductConstants.productAddedAlertMessage;
        const name = PlaceOrderConstants.testData.name;
        const country = PlaceOrderConstants.testData.country;
        const city = PlaceOrderConstants.testData.city;
        const creditCardNumber = PlaceOrderConstants.testData.creditCardNumber;
        const month = PlaceOrderConstants.testData.month;
        const year = PlaceOrderConstants.testData.year;

        CommonPageHelpers.navigateToTheApplication();

        SignUpHelpers.createAccount(username, password);
        //CommonPageHelpers.checkAlertMessage(signUpAlertMessage);

        LoginHelpers.login(username, password);

        CommonPageHelpers.checkLogedUser(username);

        HomeHelpers.clickOnProductLink(productName);
        ProductHelpers.clickOnaddToCartBtn();
        //CommonPageHelpers.checkAlertMessage(productAddedAlertMessage);

        CommonPageHelpers.clickOnCartBtn();
        CartHelpers.checkProductsInCart(productName);
        CartHelpers.clickOnPlaceOrderBtn();

        PlaceOrderHelpers.fillFormToPurchase(name, country, city, creditCardNumber, month, year);
        PlaceOrderHelpers.clickOnPurchaseBtn();

        PlaceOrderHelpers.checkPlaceOrderSuccessMsg();
        PlaceOrderHelpers.clickOnConfirmBtn();
    });
});