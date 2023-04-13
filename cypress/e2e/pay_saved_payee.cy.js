describe('Pay Saved Payee',()=>{
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

    it('Submit Pay Saved Payee',()=>{
        cy.check_online_banking_tab_is_active('Pay Bills','Pay Saved Payee')
        cy.fill_out_info_for_pay_saved_payee('Apple','Loan',1000,'2023-04-24','Test')
        cy.click_pay()
        cy.check_message_for_paying_successfully(1000,'Apple')
    })
})