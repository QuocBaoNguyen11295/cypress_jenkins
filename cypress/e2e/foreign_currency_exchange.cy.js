describe('Foreign Currency Exchange',()=>{
    beforeEach(()=>{
        cy.open_index_page()
        cy.click_on_signin_button()
        cy.fixture('data_login').then((data_login)=>{
            cy.fill_out_account(data_login.username,data_login.password)
            cy.click_on_sign_in()
            cy.visit('http://zero.webappsecurity.com/')
            cy.check_login_correctly(data_login.username)
            cy.open_tab('Online Banking')
            cy.open_tab_online_banking('Pay Bills')
        })
    })

    it('Exhange the currency',()=>{
        cy.check_online_banking_tab_is_active('Pay Bills','Purchase Foreign Currency')
        cy.fill_out_info_for_purchasing('Australia (dollar)','1 dollar (AUD) = 1.0987 U.S. dollar (USD)',123213,'U.S. dollar (USD)','112144.35 dollar (AUD) = 123213.00 U.S. dollar (USD)')
        cy.click_purchase()
        cy.purchase_currency_message()
    })
})