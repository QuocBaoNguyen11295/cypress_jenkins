describe('Search keyword',()=>{
    beforeEach(()=>{
        cy.open_index_page()
    })

    it('Find the item besed on the keyword',()=>{
        cy.check_the_item_after_searching('Bank')
    })
})