import { cy } from "date-fns/locale"

describe("Index page", () => {
  /* visits this page before each test */
  beforeEach(() =>{
    cy.log('Visiting http://localhost:3000');
    cy.visit("/");
  });
});