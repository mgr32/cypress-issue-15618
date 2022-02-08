describe("Test", () => {
  it("Smooth issue", () => {
    cy.visit("cypress-issue.html");
    cy.get("[data-testid=test-link]").click();
  });
});
