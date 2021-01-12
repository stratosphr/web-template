describe('Sample e2e test', () => {
    it('Sample 1', () => {
        cy.visit('http://localhost:3000')
        cy.get('.v-text-field').type('Hello, world!', { delay: 50 })
        cy.contains('Hello, world!')
    })
    it('Sample 2', () => {
        cy.visit('http://localhost:3000')
        for (let i = 0; i < 5; i++) {
            cy.get('.v-btn').click({})
            cy.contains(`Test button was clicked ${i + 1} times !`)
            cy.wait(700)
        }
    })
})
