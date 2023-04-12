/// <reference types="Cypress" />

const URL = 'http://localhost:5173'

// Start with the tests
describe('Pokedex test', () => {
  it('Visit the page and check that the fetch of pokeapi is ok', () => {
    cy.visit(URL)
    // Not error
    cy.contains('bulbasaur')

    // Error
    // cy.contains('pikachu')
  })

  it('Visit the page and load more pokemons', () => {
    cy.visit(URL)

    // Check if exists 14 cards
    cy.get('div > article').should('have.length', 14)

    // Click an element. Load more pokemons
    cy.contains('More pokemons').click()

    // Check if exists 28 cards
    cy.get('div > article').should('have.length', 28)
  })

  it('Visit the page, go to a specific pokemon page and check that this page is working correctly', () => {
    cy.visit(URL)

    cy.contains('Ver Pokemon').click()

    // Good
    cy.url().should('include', '/bulbasaur')

    // Error
    // cy.url().should('include', '/charizard')

    cy.contains('Stats')
  })

  it('Visit the Bulbasaur page and go to the Home', () => {
    cy.visit(`${URL}/pokemon/bulbasaur`)

    cy.get("a").click()

    cy.url().should("contain", URL)
  })

  it('Visit the home page and check if the button up running', () => {
    cy.visit(URL)

    cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0)

    cy.get("span button").click()

    // Check if the window is in the 0 position
    cy.window().its('scrollY').should('equal', 0)
  })

  // Check if the light or dark theme is running correctly. Search the button, click and check if the body has the class.
  // Get the page, delete the dark theme, click the dark button for change the dark theme and check if the page is dark
  it('Check if the dark theme works correctly', () => {
    cy.visit(URL)

    cy.get('html').should('have.class', 'dark')

    const themeDarkButton = cy.get('[data-theme="dark"]')

    themeDarkButton.click()
    // cy.get('html').invoke('toggleClass', 'dark')

    cy.get('html').should('not.have.class', 'dark')

    themeDarkButton.click()

    cy.get('html').should('have.class', 'dark')
  })

  it('Check if the light theme works correctly', () => {
    cy.visit(URL)

    cy.get('html').should('have.class', 'dark')

    const themeLightButton = cy.get('[data-theme="light"]')

    themeLightButton.click()
    // cy.get('html').invoke('toggleClass', 'dark')

    cy.get('html').should('not.have.class', 'dark')

    themeLightButton.click()

    cy.get('html').should('have.class', 'dark')
  })
})
