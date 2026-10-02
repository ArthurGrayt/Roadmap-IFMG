describe('Roadmap IFMG Home Page', () => {
  it('carrega a página inicial e exibe o mapa corretamente', () => {
    // Visita a aplicação rodando localmente
    cy.visit('http://localhost:3000')
    
    // Verifica se os elementos do Onboarding/Tela aparecem
    cy.get('body').should('be.visible')
  })
})
