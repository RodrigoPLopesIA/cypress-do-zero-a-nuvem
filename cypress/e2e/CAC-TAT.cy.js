describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("../../src/index.html");
  });
  it("deve verificar o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("Deve digitar no campo de texto", () => {
    let textLong = Cypress._.repeat("text long!", 20);
    cy.get("#firstName").type("rodrigo").should("have.value", "rodrigo");
    cy.get("#lastName").type("lopes").should("have.value", "lopes");
    cy.get("#email")
      .type("rodrigo@email,com")
      .should("have.value", "rodrigo@email.com");
    cy.get("#phone").type("21996041143").should("have.value", "21996041143");
    cy.get("#open-text-area").type(textLong).should("have.value", textLong);
    cy.get("button[type=submit]").click();

    cy.get(".success").should("be.visible");
  });

  it("deve retornar mensagem de erro caso digite email invalido", () => {
    let textLong = Cypress._.repeat("text long!", 20);
    cy.get("#firstName").type("rodrigo").should("have.value", "rodrigo");
    cy.get("#lastName").type("lopes").should("have.value", "lopes");
    cy.get("#email")
      .type("rodrigo@email,com")
      .should("have.value", "rodrigo@email,com");
    cy.get("#phone").type("21996041143").should("have.value", "21996041143");
    cy.get("#open-text-area")
      .type(textLong)
      .should("have.value", textLong, { delay: 0 });
    cy.get("button[type=submit]").click();

    cy.get("button[type=submit]").click();
    cy.get(".error").should("be.visible");
  });

  it("deve ficar vazio o campo telefone quando digitado por valor não numerico", () => {
    cy.get("#phone").type("asdfasdf").should("have.value", "");
  });

  it("deve ficar vazio o campo telefone quando digitado por valor não numerico", () => {
    let textLong = Cypress._.repeat("text long!", 20);
    cy.get("#firstName").type("rodrigo").should("have.value", "rodrigo");
    cy.get("#lastName").type("lopes").should("have.value", "lopes");
    cy.get("#email")
      .type("rodrigo@email,com")
      .should("have.value", "rodrigo@email,com");
    cy.get("#open-text-area")
      .type(textLong)
      .should("have.value", textLong, { delay: 0 });
    cy.get("#phone-checkbox").click();

    cy.get("button[type=submit]").click();
    cy.get(".error").should("be.visible");
  });

  it("deve preencher e limpar os campos de texto", () => {
    let textLong = Cypress._.repeat("text long!", 20);
    cy.get("#firstName").type("rodrigo").should("have.value", "rodrigo");
    cy.get("#lastName").type("lopes").should("have.value", "lopes");
    cy.get("#email")
      .type("rodrigo@email,com")
      .should("have.value", "rodrigo@email,com");
    cy.get("#open-text-area")
      .type(textLong)
      .should("have.value", textLong, { delay: 0 });
    cy.get("#firstName").clear().should("have.value", "");
    cy.get("#lastName").clear().should("have.value", "");
    cy.get("#email").clear().should("have.value", "");
    cy.get("#open-text-area").clear().should("have.value", "");
  });

  it("Deve retornar mensagem de erro quando não preencher campos", () => {
    cy.get("button[type=submit]").click();
    cy.get(".error").should("be.visible");
  });

  it("Deve retornar mensagem de sucesso ao enviar dados com função customizada", () => {
    cy.fillMandatoryFieldsAndSubmit();
  });

  it.only("Deve selecionar um valor e preencher todos os valores e enviar", () => {
    let textLong = Cypress._.repeat("text long!", 20);
    cy.select("#product").select("youtube").should("have.value", "youtube");
    cy.get("#firstName").type("rodrigo").should("have.value", "rodrigo");
    cy.get("#lastName").type("lopes").should("have.value", "lopes");
    cy.get("#email")
      .type("rodrigo@email,com")
      .should("have.value", "rodrigo@email,com");
    cy.get("#open-text-area")
      .type(textLong)
      .should("have.value", textLong, { delay: 0 });
  });
});
