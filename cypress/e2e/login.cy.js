describe('Login feature',()=>{
    beforeEach(()=>{
        cy.open_index_page()
    })

    it('Login to the page successfully',()=>{
        cy.login_to_the_page('username','password')
        cy.click_on_sign_in()
        cy.visit('http://zero.webappsecurity.com/')
        cy.check_login_correctly('username')
        cy.logout_page()
    })

    it('Login to the page unexisting account',()=>{
        cy.login_to_the_page('username1','password')
        cy.click_on_sign_in()
        cy.check_error_message()
    })

    afterEach(()=>{})
})