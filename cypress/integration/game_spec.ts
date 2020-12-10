describe("Game", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3004/api/users", {
      fixture: "users.json",
    }).as("getUsers");
    cy.visit("/");
    cy.wait("@getUsers");
    cy.login("Aude");
  });

  it("should display username and credit", () => {
    cy.get("#current-user").contains("Aude");
    cy.get("h1").find("span").contains(100);
  });

  it("should default bet to £10", () => {
    cy.get("#bet-header > span").contains("10");
  });

  it("should not allow to bet less than 10", () => {
    cy.get("button").contains("-").should("have.attr", "disabled");
  });

  it("should not allow to bet more than current credit", () => {
    cy.get("button").contains("Bet MAX").click();
    cy.get("button").contains("Bet MAX").should("have.attr", "disabled");
    cy.get("button").contains("+").should("have.attr", "disabled");

    cy.get("button").contains("-").click();
    cy.get("button").contains("+").click();
    cy.get("button").contains("Bet MAX").should("have.attr", "disabled");
    cy.get("button").contains("+").should("have.attr", "disabled");
  });

  it("should be set to Sloth theme by default", () => {
    cy.get("img[id='sloth-theme']").should("have.class", "selected-theme");
  });

  it("should allow user to choose theme", () => {
    cy.get("img[id='cat-theme']").should("not.have.class", "selected-theme");
    cy.get("img[id='cat-theme']").click();
    cy.get("img[id='cat-theme']").should("have.class", "selected-theme");
  });

  it("should display a leaderboard", () => {
    cy.get("table > tbody > tr").contains("1");
    cy.get("table > tbody > tr").contains("Aude");
    cy.get("table > tbody > tr").contains("100");
  });
});
