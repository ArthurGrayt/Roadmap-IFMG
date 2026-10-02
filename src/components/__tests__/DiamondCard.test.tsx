import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { DiamondCard } from '../diamond-card'

// Mock simples para não depender do Lucide React nos testes unitários
const MockIcon = () => <svg data-testid="mock-icon" />

describe('DiamondCard Component', () => {
  it('renderiza corretamente com o título fornecido', () => {
    // Para contornar limitações do AnimatePresence/framer-motion em testes, forçamos isExpanded true para o texto ficar visível de imediato no DOM
    render(<DiamondCard title="Algoritmos" icon={MockIcon} isExpanded={true} />)
    
    expect(screen.getByText('Algoritmos')).toBeInTheDocument()
  })

  it('dispara onStatusChange quando clicado no modo interativo', () => {
    const mockOnStatusChange = jest.fn()
    const { container } = render(
      <DiamondCard 
        title="Estrutura de Dados" 
        icon={MockIcon} 
        interactive={true} 
        isExpanded={true}
        onStatusChange={mockOnStatusChange} 
      />
    )
    
    // O onClick fica na div raiz do componente
    const cardElement = container.firstChild as HTMLElement
    
    expect(cardElement).toBeInTheDocument()
    fireEvent.click(cardElement)
    
    expect(mockOnStatusChange).toHaveBeenCalledTimes(1)
  })
})
