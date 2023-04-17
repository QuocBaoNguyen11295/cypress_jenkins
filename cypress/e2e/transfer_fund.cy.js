describe('Transfer fund',()=>{
    beforeEach(()=>{
        cy.open_index_page()
        cy.click_on_signin_button()
        cy.fixture('data_login').then((data_login)=>{
            cy.fill_out_account(data_login.username,data_login.password)
            cy.click_on_sign_in()
            cy.visit('http://zero.webappsecurity.com/')
            cy.check_login_correctly(data_login.username)
            cy.open_tab('Online Banking')
            cy.open_tab_online_banking('Transfer Funds')
        })
    })
    it('Fill out info for transfer fund',()=>{
        cy.check_transfer_fund_tab_is_navigated()
        cy.fill_out_info_for_transfer_fund('Savings(Avail. balance = $ 1548)','Credit Card(Avail. balance = $ -265)',1000,'transfer money')
        cy.click_continue()
        cy.check_fields_disabled('Savings','Credit Card',1000,'transfer money')
        cy.click_submit()
        cy.check_transaction_after_transferring('Savings','Credit Card',1000)
    })
})