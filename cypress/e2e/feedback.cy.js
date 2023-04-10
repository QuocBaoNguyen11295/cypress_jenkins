describe('Feedback',()=>{
    beforeEach(()=>{
        cy.open_index_page()
    })

    it('Submit feedback',()=>{
        cy.open_tab('Feedback')
        cy.get('h3').should('have.text','Feedback')
        cy.check_feedback_page()
        cy.fixture('data_feedback').then(function(data_feedback){
            this.data_feedback=data_feedback
            cy.fill_out_info_for_feedback(this.data_feedback.name,this.data_feedback.email,this.data_feedback.subject,this.data_feedback.message)
        })
        cy.click_on_send_message()
        cy.check_the_feedback_sent('Quoc Bao')
    })

    it('clear all information for feedback',()=>{
        cy.open_tab('Feedback')
        cy.get('h3').should('have.text','Feedback')
        cy.check_feedback_page()
        cy.fixture('data_feedback').then(function(data_feedback){
            this.data_feedback=data_feedback
            cy.fill_out_info_for_feedback(this.data_feedback.name,this.data_feedback.email,this.data_feedback.subject,this.data_feedback.message)
        })
        cy.click_on_clear()
        cy.check_empty_field_after_clearing()
    })
})