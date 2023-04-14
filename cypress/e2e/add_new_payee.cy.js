describe('Add new payee',()=>{
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

    it('Submit to add new payee',()=>{
        cy.check_online_banking_tab_is_active('Pay Bills','Add New Payee')
        cy.fill_out_info_for_add_new_payee('Who are you paying?','Payee test','Payee address','Payee account','Payee details')
        cy.click_on_add()
        cy.check_message_for_adding_new_payee_successfully('Payee test')
    })
})