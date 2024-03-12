export class CartElements{
    static get elements(){
        return{
            get placeOrderBtn(){
                return cy.contains('.btn', 'Place Order')
            },
            get tableWithProducts(){
                return cy.get('.success')
            }
        }
    }
}