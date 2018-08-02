describe('Basic features', () => {
  it('visits the home page', () => {
    cy.visit('/');
  });

  it('should NOT show the search box', () => {
    cy.get('#search').should('not.be.visible', true);
  });

  it('should NOT show the add box', () => {
    cy.get('#add').should('not.be.visible', true);
  });

  it('should show the search box after clicking on the search icon', () => {
    cy.get('label[for=search]').click();
    cy.get('#search').should('be.visible', true);
  });

  it('should show one result when searching for `aguacate`', () => {
    cy.get('#search').type('aguacate');
    cy.get('tbody').children().should('have.length', 1);
  });

  it('should continue showing the search box after clicking outside of the input text if NOT empty', () => {
    cy.get('tbody').children().first().click();
    cy.get('#search').should('be.visible', true);
  });

  it('should show all the results when the search box is empty', () => {
    cy.get('#search').clear();
    cy.get('tbody').children().should('have.length.greaterThan', 1);
  });

  it('should NOT show the search box after clicking outside of the input text if empty', () => {
    cy.get('tbody').children().first().click();
    cy.get('#search').should('not.be.visible', true);
  });

  it('should show the add box after clicking on the add icon', () => {
    cy.get('#add-button').click();
    cy.get('#add').should('be.visible', true);
  });

  it('should add `nutella` to the rows', () => {
    cy.get('#add').type('nutella{enter}');
    cy.get('tbody').children().contains('nutella').should('have.length', 1);
  });

  it('should show one result when searching for `nutella`', () => {
    cy.get('label[for=search]').click();
    cy.get('#search').type('nutella');
    cy.get('tbody').children().should('have.length', 1);
    cy.get('#search').clear();
    cy.get('tbody').children().should('have.length.greaterThan', 1);
    cy.get('tbody').children().first().click();
  });
});
