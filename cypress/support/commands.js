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

 Cypress.Commands.add('check_login_correctly',(username)=>{
    cy.get('li').contains(username).should('be.visible')
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
//----- Pay bills -----//
Cypress.Commands.add('open_tab_online_banking',(tab_name)=>{
   cy.get('h4 > span').contains(tab_name).click()
})

Cypress.Commands.add('check_online_banking_tab_is_active',(tab_name,item)=>{
   cy.get('li.active > a').contains(tab_name).should('exist')
   cy.get('#tabs > ul > li > a').contains(item).should('exist').click()
})

Cypress.Commands.add('fill_out_info_for_pay_saved_payee',(title,payee,account,amount,date,description)=>{
   cy.get('#ui-tabs-1 > h2').contains(title).should('be.visible')
   cy.get('select#sp_payee').select(payee)
   cy.get('select#sp_account').select(account)
   cy.get('#sp_amount').type(amount)
   cy.get('#sp_date').type(date).tab()
   cy.get('#sp_description').type(description)
})

Cypress.Commands.add('click_pay',()=>{
   cy.get('input[value="Pay"]').click()
})

Cypress.Commands.add('check_message_for_paying_successfully',(amount,payee)=>{
   cy.get('#alert_content > span').should('have.text','The payment was successfully submitted.')
   cy.get('#alert_content > span').should('have.attr','title',`$ `+amount+` payed to payee `+payee.toLowerCase())
})
Cypress.Commands.add('fill_out_info_for_add_new_payee',(title,payee_name,payee_address,account,payee_details)=>{
   cy.get('#ui-tabs-2 > h2').contains(title).should('be.visible')
   cy.get('#np_new_payee_name').type(payee_name)
   cy.get('#np_new_payee_address').type(payee_address)
   cy.get('#np_new_payee_account').type(account)
   cy.get('#np_new_payee_details').type(payee_details)
})

Cypress.Commands.add('click_on_add',()=>{
   cy.get('input[value="Add"]').click()
})

Cypress.Commands.add('check_message_for_adding_new_payee_successfully',(payee_name)=>{
   cy.get('#alert_content').should('have.text',`The new payee `+payee_name+` was successfully created.`)
})

Cypress.Commands.add('fill_out_info_for_purchasing',(currency,value_exchange,amount,select_currency_to_exchange,conversion_amount)=>{
   cy.get('#pc_currency').select(currency)
   cy.get('#sp_sell_rate').should('have.text',value_exchange)
   cy.get('#pc_amount').type(amount)
   if(select_currency_to_exchange === 'U.S. dollar (USD)'){
      cy.get('#pc_inDollars_true').click()
   }else{
      cy.get('#pc_inDollars_false').click()
   }
   cy.get('#pc_calculate_costs').click()
   cy.get('#pc_conversion_amount').should('contain',conversion_amount)
})

Cypress.Commands.add('click_purchase',()=>{
   cy.get('#purchase_cash').click()
})

Cypress.Commands.add('purchase_currency_message',()=>{
   cy.get('#alert_content').should('have.text','Foreign currency cash was successfully purchased.')
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