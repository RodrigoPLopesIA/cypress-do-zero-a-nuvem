Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  let textLong = Cypress._.repeat("text long!", 20);
  cy.get("#firstName").type("rodrigo").should("have.value", "rodrigo");
  cy.get("#lastName").type("lopes").should("have.value", "lopes");
  cy.get("#email")
    .type("rodrigo@email,com")
    .should("have.value", "rodrigo@email,com");
  cy.get("#open-text-area")
    .type(textLong)
    .should("have.value", textLong, { delay: 0 });

  cy.get("button[type=submit]").click();

  cy.get(".success").should("be.visible");
});
