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