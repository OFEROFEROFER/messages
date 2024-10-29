describe('template spec', () => {
  beforeEach(() => {
    // Start from the login page
    cy.visit('http://localhost:4200/login');
  });

it('should successfully submit login', () => {
    // Fill in the form fields
    cy.get('input[formControlName="userName"]').type('testuser');
    cy.get('input[formControlName="password"]').type('password123');

  //   // Intercept the login API request to simulate a successful response
  //   cy.intercept('POST', '/api/login', {
  //     statusCode: 200,
  //     body: { token: 'fakeToken123' }, // Replace with the expected response
  //   }).as('loginRequest');

  //   // Click the submit button
  //   cy.get('button[type="submit"]').click();

  //   // Assert loading indicator is shown
  //   cy.get('.loader').should('exist');

  //   // Wait for the API request to complete
  //   cy.wait('@loginRequest');

  //   // Assert the loader is hidden after the response
  //   cy.get('.loader').should('not.exist');

  //   // Check if the store action was dispatched (verify using API response or URL redirection)
  //   cy.location('pathname').should('eq', '/dashboard'); // Adjust to the expected post-login route
  // });

  // Submit the form
  cy.get('button[type="submit"]').click();

  // Check for successful login
  cy.url().should('include', '/main'); // Adjust based on the expected route after login

  cy.get('button').click()

  cy.url().should('include', '/messages');
  // cy.get('.welcome-message').should('contain', 'Welcome'); // Check for a specific success message

  cy.get('.input-wrapper > .ng-untouched').type("ofer")

  cy.get('.drop-down > :nth-child(3)').click()

  cy.get('.input-wrapper > .ng-valid').should('have.value', 'Ofer3');
});

})