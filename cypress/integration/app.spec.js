describe("testing with cypress", () => {
  it("visits the page", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/");
  });
});

describe("testing with cypress", () => {
  it("visits the cny page", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/cny");
    cy.contains("NYS Blues Festival").click();
  });
});

// describe("testing with cypress", () => {
//   it("visits the cny page and clicks blues fest button", () => {
//     cy.visit("https://smb-capstone-frontend.herokuapp.com/cny");
//     cy.get("button").contains("NYS Blues Festival").click();
//   });
// });

describe("testing with cypress", () => {
  it("visits the western ny page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/westernny");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the capital district page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/capitaldistrict");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the cny page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/cny");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the fingerlakes and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/fingerlakes");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the longisland page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/longisland");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the mohawk valley page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/mohawkvalley");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the north country page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/northcountry");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the nyc page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/nyc");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the southern tier page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/southerntier");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the hudson valley page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/hudsonvalley");
    cy.get("a").contains("Home").click();
  });
});

describe("testing with cypress", () => {
  it("visits the home page and clicks the home link", () => {
    cy.visit("https://smb-capstone-frontend.herokuapp.com/index");
    cy.get("a").contains("Home").click();
  });
});
