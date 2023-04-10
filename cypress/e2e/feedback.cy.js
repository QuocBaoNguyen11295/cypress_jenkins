describe('Feedback',()=>{
    beforeEach(()=>{
        cy.open_index_page()
    })

    it('Submit feedback',()=>{
        cy.open_tab('Feedback')
        cy.get('h3').should('have.text','Feedback')
        cy.check_feedback_page()
        cy.fill_out_info_for_feedback('Quoc Bao','bao@gmail.com','test 12132','message 1232')
        cy.click_on_send_message()
        cy.check_the_feedback_sent('Quoc Bao')
    })

    it('clear all information for feedback',()=>{
        cy.open_tab('Feedback')
        cy.get('h3').should('have.text','Feedback')
        cy.check_feedback_page()
        cy.fill_out_info_for_feedback('Quoc Bao','bao@gmail.com','test 12132','message 1232')
        cy.click_on_clear()
        cy.check_empty_field_after_clearing()
    })
})