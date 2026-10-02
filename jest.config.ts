import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Fornece o caminho para o app Next.js para carregar next.config.ts e .env no ambiente de teste
  dir: './',
})
 
// Adiciona qualquer configuração customizada a ser passada pro Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
 
export default createJestConfig(config)
