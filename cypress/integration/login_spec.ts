describe("Login", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3004/api/users", {
      fixture: "users.json",
    }).as("getUsers");
    cy.visit("/");
    cy.wait("@getUsers");
  });

  it("should allow existing user to login", () => {
    cy.get("input[name='username']").type("Aude");
    cy.get("input[value='PLAY']").click();
  });

  // TODO: implement test on creating user

  it("should logout user", () => {
    cy.login("Aude");
    cy.get("button").contains("LOGOUT").click();
    cy.get("h1").contains("Welcome to the Lucky Sloth!");
  });
});
