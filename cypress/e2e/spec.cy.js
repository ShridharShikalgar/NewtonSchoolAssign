describe('App', () => {
  it('should focus the input when the button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.get('input')
      .should('not.be.focused')
      .then(input => {
        cy.get('button').click();
        expect(input).to.be.focused;
      });
  });
});