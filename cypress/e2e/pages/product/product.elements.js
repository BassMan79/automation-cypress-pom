export class ProductElements{
    static get elements(){
        return{
            get addCartBtn(){
                return cy.contains('.btn', 'Add to cart')
            },
        }
    }
}