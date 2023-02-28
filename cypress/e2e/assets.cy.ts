//@ts-ignore
describe('Assets test', () => {
  it('should be able to open the create asset form', () => {
    cy.visit('/assets');

    cy.get('#create-asset-button').click();

    cy.get('#create-asset-form').should('exist');
  });

  it('should be able to create an Asset', () => {
    cy.visit('/assets');

    cy.get('#create-asset-button').click();

    cy.get('#asset-model-input').type('Asset model test');
    cy.get('#asset-status-select').select('inAlert');
    cy.get('#asset-name-input').type('Asset name test');
    cy.get('#asset-image-input').type('test.png');
    cy.get('#asset-unit-id-input').type('1');
    cy.get('#asset-company-id-input').type('1');

    cy.get('#create-asset-submit-button').click();

    cy.wait(1000);

    cy.get('#create-asset-form').should('not.exist');
  });
});
