describe('Find transaction',()=>{
    beforeEach(()=>{
        cy.open_index_page()
        cy.click_on_signin_button()
        cy.fixture('data_login').then((data_login)=>{
            cy.fill_out_account(data_login.username,data_login.password)
            cy.click_on_sign_in()
            cy.visit('http://zero.webappsecurity.com/')
            cy.check_login_correctly(data_login.username)
            cy.open_tab('Online Banking')
            cy.open_tab_online_banking('Account Activity')
        })
    })

    it('Fill out information to find transaction',()=>{
        cy.check_account_activity_page()
        cy.click_find_transaction_tab()
        cy.check_find_transaction_tab()
        cy.fill_out_info_for_finding_transactions('CHECK','2012-09-06','2012-09-07',50,200,'Deposit')
        cy.click_find_to_find_transactions()
        cy.check_no_results()
    })
})