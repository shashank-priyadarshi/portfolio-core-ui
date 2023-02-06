describe('Portfolio landing pages content header test', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.contains('articles');
    cy.contains('todos');
    cy.contains('GitHub Activity');
    cy.contains('Projects');
    cy.contains('Hobbies');
  });
  it('Visits the todos page', () => {
    cy.visit('/todos');
    cy.contains('articles');
    cy.contains('todos');
    cy.contains('TODO');
  });
});
