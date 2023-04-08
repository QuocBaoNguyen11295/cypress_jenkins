describe('Login feature',()=>{
    beforeEach(()=>{
        cy.open_index_page()
    })

    it('Login to the page successfully',()=>{
        cy.click_on_signin_button()
        cy.check_header_in_login_page()
        cy.fill_out_account('username','password')
        cy.click_on_sign_in()
        cy.visit('http://zero.webappsecurity.com/')
        cy.check_login_correctly()
        cy.logout_page()
    })

    it('Login to the page unexisting account',()=>{
        cy.click_on_signin_button()
        cy.check_header_in_login_page()
        cy.fill_out_account('username1','password')
        cy.click_on_sign_in()
        cy.check_error_message()
    })

    afterEach(()=>{})
})