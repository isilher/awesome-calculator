import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Calculator from '../Calculator'

// Mock theme for testing
const mockTheme = createTheme()

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      {component}
    </ThemeProvider>
  )
}

describe('Calculator', () => {
  beforeEach(() => {
    renderWithTheme(<Calculator />)
  })

  describe('Basic Functionality', () => {
    test('renders calculator with initial display of 0', () => {
      expect(screen.getByText('0 ✨')).toBeInTheDocument()
    })

    test('displays numbers when clicked', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '5' }))
      expect(screen.getByText('5 ✨')).toBeInTheDocument()
      
      await user.click(screen.getByRole('button', { name: '3' }))
      expect(screen.getByText('53 ✨')).toBeInTheDocument()
    })

    test('handles decimal input correctly', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: '.' }))
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '4' }))
      
      expect(screen.getByText('3.14 ✨')).toBeInTheDocument()
    })

    test('prevents multiple decimal points', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: '.' }))
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '.' })) // Should be ignored
      await user.click(screen.getByRole('button', { name: '4' }))
      
      expect(screen.getByText('3.14 ✨')).toBeInTheDocument()
    })
  })

  describe('Clear Functions', () => {
    test('C button clears all', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '5' }))
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: 'C' }))
      
      expect(screen.getByText('0 ✨')).toBeInTheDocument()
    })

    test('CE button clears entry', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '2' }))
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: 'CE' }))
      
      expect(screen.getByText('0 ✨')).toBeInTheDocument()
    })
  })

  describe('Arithmetic Operations', () => {
    test('performs addition correctly', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '5' }))
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('8 ✨')).toBeInTheDocument()
    })

    test('performs subtraction correctly', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '0' }))
      await user.click(screen.getByRole('button', { name: '-' }))
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('7 ✨')).toBeInTheDocument()
    })

    test('performs multiplication correctly', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '6' }))
      await user.click(screen.getByRole('button', { name: '×' }))
      await user.click(screen.getByRole('button', { name: '7' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('42 ✨')).toBeInTheDocument()
    })

    test('performs division correctly', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '8' }))
      await user.click(screen.getByRole('button', { name: '÷' }))
      await user.click(screen.getByRole('button', { name: '2' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('4 ✨')).toBeInTheDocument()
    })

    test('handles chain calculations', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '2' }))
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: '×' }))
      expect(screen.getByText('5 ✨')).toBeInTheDocument() // Should show intermediate result
      
      await user.click(screen.getByRole('button', { name: '4' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      expect(screen.getByText('20 ✨')).toBeInTheDocument()
    })
  })

  describe('Sign Toggle', () => {
    test('toggles positive to negative', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '5' }))
      await user.click(screen.getByRole('button', { name: '±' }))
      
      expect(screen.getByText('-5 ✨')).toBeInTheDocument()
    })

    test('toggles negative to positive', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '5' }))
      await user.click(screen.getByRole('button', { name: '±' }))
      await user.click(screen.getByRole('button', { name: '±' }))
      
      expect(screen.getByText('5 ✨')).toBeInTheDocument()
    })
  })

  describe('Prime Number Detection', () => {
    test('detects prime numbers and updates badge count', async () => {
      const user = userEvent.setup()
      
      // Calculate 2 (prime)
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('Prime Badges: 1 🏆')).toBeInTheDocument()
    })

    test('shows prime badges dialog', async () => {
      const user = userEvent.setup()
      
      // First generate a prime
      await user.click(screen.getByRole('button', { name: '2' }))
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      // Click on badge count to open dialog
      await user.click(screen.getByText('Prime Badges: 1 🏆'))
      
      expect(screen.getByText('🏆 Prime Number Badges 🏆')).toBeInTheDocument()
      expect(screen.getByText('Prime 3 🌟')).toBeInTheDocument()
    })

    test('shows empty state when no primes found', async () => {
      const user = userEvent.setup()
      
      // Click on badge count to open dialog (should be 0)
      await user.click(screen.getByText('Prime Badges: 0 🏆'))
      
      expect(screen.getByText('No prime badges yet! 😢')).toBeInTheDocument()
    })

    test('collects multiple prime numbers', async () => {
      const user = userEvent.setup()
      
      // Calculate 2 (prime)
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '1' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      // Clear and calculate 5 (prime)
      await user.click(screen.getByRole('button', { name: 'C' }))
      await user.click(screen.getByRole('button', { name: '2' }))
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '3' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('Prime Badges: 2 🏆')).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    test('handles division by zero', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '5' }))
      await user.click(screen.getByRole('button', { name: '÷' }))
      await user.click(screen.getByRole('button', { name: '0' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('Infinity ✨')).toBeInTheDocument()
    })

    test('handles starting with operation', async () => {
      const user = userEvent.setup()
      
      await user.click(screen.getByRole('button', { name: '+' }))
      await user.click(screen.getByRole('button', { name: '5' }))
      await user.click(screen.getByRole('button', { name: '=' }))
      
      expect(screen.getByText('5 ✨')).toBeInTheDocument()
    })
  })
})