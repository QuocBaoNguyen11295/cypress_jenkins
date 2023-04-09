describe('Forgot password',()=>{
    beforeEach(()=>{
        cy.open_index_page()
    })

    it('Fill out the email to get back the password',()=>{
        cy.click_on_signin_button()
        cy.click_on_forget_password()
        cy.check_forget_password_page()
        cy.fill_out_the_email('bao@gmail.com')
        cy.click_on_send_password()
        cy.check_send_password_successfully('bao@gmail.com')
    })
})