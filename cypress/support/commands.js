// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('open_index_page', () => { 
    cy.visit('http://zero.webappsecurity.com/')
 })

 Cypress.Commands.add('click_on_signin_button',()=>{
    cy.get('button').contains('Signin').click()
 })

 Cypress.Commands.add('check_header_in_login_page',()=>{
    cy.get('h3').should('have.text','Log in to ZeroBank')
 })

 Cypress.Commands.add('fill_out_account',(username,password)=>{
    cy.get('input[name=user_login]').type(username)
    cy.get('input[name=user_password]').type(password)
    cy.get('label').contains('Keep me signed in').parent().get('input[name=user_remember_me]').click()
 })

 Cypress.Commands.add('click_on_sign_in',()=>{
    cy.get('input[value="Sign in"]').click()
 })

 Cypress.Commands.add('check_login_correctly',()=>{
    cy.get('li').contains('username').should('be.visible')
 })

 Cypress.Commands.add('logout_page',()=>{
    cy.get('li').contains('username').click()
    cy.get('li > a').contains('Logout').click()
    cy.get('button').contains('Signin').should('be.visible')
 })

 Cypress.Commands.add('check_error_message',()=>{
    cy.get('.alert-error').contains('Login and/or password are wrong.').should('be.visible')
 })

 Cypress.Commands.add('click_on_forget_password',()=>{
   cy.get('a').contains('Forgot your password ?').click()
 })
Cypress.Commands.add('check_forget_password_page',()=>{
   cy.get('h3').should('have.text','Forgotten Password')
   cy.get('h3').parent().parent().get('p').contains('So you forgot your password? Give us your email address and we will email it to you.').should('be.visible')
})

Cypress.Commands.add('fill_out_the_email',(email)=>{
   cy.get('label').contains('Email').parent().get('input[name="email"]').type(email)
})

Cypress.Commands.add('click_on_send_password',()=>{
   cy.get('input[value="Send Password"]').click()
})

Cypress.Commands.add('check_send_password_successfully',(email)=>{
   cy.get('h3').should('have.text','Forgotten Password')
   cy.get('.page-header').parent().contains(`Your password will be sent to the following email: `+email).should('be.visible')
})

Cypress.Commands.add('login_to_the_page',(email,password)=>{
   cy.click_on_signin_button()
   cy.check_header_in_login_page()
   cy.fill_out_account(email,password)
})
//----------//
Cypress.Commands.add('open_tab',(tab)=>{
   cy.get('strong').contains(tab).click()
})
//----- Feedback -----//
Cypress.Commands.add('check_feedback_page',()=>{
   cy.get('h3').should('have.text','Feedback')
   cy.get('#description > p').contains(`Our Frequently Asked Questions area will help you with many of your inquiries.`).should('be.visible')
   cy.get('#description > p').contains(`If you can't find your question, return to this page and use the e-mail form below.`).should('be.visible')
   cy.get('#description > p').parent().get('p').contains('IMPORTANT! This feedback facility is not secure. Please do not send any').should('be.visible')
   cy.get('#description > p').parent().get('p').contains('account information in a message sent from here.').should('be.visible')
})

Cypress.Commands.add('fill_out_info_for_feedback',(name,email,subject,message)=>{
   cy.get('input[placeholder="Your Name"]').type(name)
   cy.get('input[placeholder="Your email address"]').type(email)
   cy.get('input[placeholder="Subject"]').type(subject)
   cy.get('textarea[placeholder="Type your questions here..."]').type(message)
})

Cypress.Commands.add('click_on_send_message',()=>{
   cy.get('input[value="Send Message"]').click()
})

Cypress.Commands.add('check_the_feedback_sent',(name)=>{
   cy.get('h3').contains('Feedback').should('be.visible')
   cy.get('h3').parent().parent().contains(`Thank you for your comments, ${name}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`).should('be.visible')
})

Cypress.Commands.add('click_on_clear',()=>{
   cy.get('input[value="Clear"]').click()
})

Cypress.Commands.add('check_empty_field_after_clearing',()=>{
   cy.get('input[placeholder="Your Name"]').should('to.be.empty')
   cy.get('input[placeholder="Your email address"]').should('to.be.empty')
   cy.get('input[placeholder="Subject"]').should('to.be.empty')
   cy.get('textarea[placeholder="Type your questions here..."]').should('to.be.empty')
})
//----- Search keyword -----//
Cypress.Commands.add('check_the_item_after_searching',(keyword)=>{
   cy.get('input[name="searchTerm"]').type(keyword+'{enter}')
   cy.get('.top_offset > ul > li > a').each(($a) => {
      cy.get($a).should('contain.text',keyword)
   })
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })