describe("Наш перший блок тестів", () => {
  it("Тест відвідування сайту LMS", () => {
    // cypress code
    cy.visit("https://www.edu.goit.global/account/login");
    // first test
    cy.login("user888@gmail.com", "1234567890");

    cy.get('.eckniwg2').click();

    cy.get('#open-navigation-menu-mobile').click();

    cy.get(':nth-child(11) > .next-bve2vl').click();
    // second test
    cy.login("testowyqa@qa.team","QA!automation-1");

    cy.get('.eckniwg2').click();

    cy.get('#open-navigation-menu-mobile').click();

    cy.get(':nth-child(8) > .next-bve2vl').click();
  });
});