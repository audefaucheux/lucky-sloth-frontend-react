describe("Login", () => {
  beforeEach(() => {
    cy.server();
    cy.fixture("users.json").as("users");
    cy.route({ method: "GET", url: "/users", response: "@users" }).as(
      "getUsers"
    );
    cy.visit("/");
    cy.wait("@getUsers");
  });

  it("should allow existing user to login", () => {
    cy.get("input[name='username']").type("Aude");
    cy.get("input[value='PLAY']").click();
    cy.contains("Your current credit is £100");
  });

  it("should create new user and login", () => {
    const newUser = { id: 2, username: "Jane", credit: 100 };
    cy.route({ method: "POST", url: "/users", response: newUser }).as(
      "createUser"
    );
    cy.get("input[name='username']").type("Jane");
    cy.get("input[value='PLAY']").click();
    cy.wait("@createUser");
    cy.contains("Your current credit is £100");
  });

  it("should logout user", () => {
    cy.login("Aude");
    cy.get("button").contains("LOGOUT").click();
    cy.get("h1").contains("Welcome to the Lucky Sloth!");
  });
});
