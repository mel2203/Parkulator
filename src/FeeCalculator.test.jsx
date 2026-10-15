import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import FeeCalculator from './FeeCalculator.jsx'

test('calculates RM 5.00 for entry at 09:00 and exit at 10:20', () => {
  render(<FeeCalculator />)

  fireEvent.change(screen.getByLabelText('Entry time'), {
    target: { value: '09:00' },
  })
  fireEvent.change(screen.getByLabelText('Exit time'), {
    target: { value: '10:20' },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Calculate fee' }))

  expect(screen.getByText('RM 5.00')).toBeTruthy()
})

test('shows an error when exit time is before entry time', () => {
  render(<FeeCalculator />)

  fireEvent.change(screen.getByLabelText('Entry time'), {
    target: { value: '10:00' },
  })
  fireEvent.change(screen.getByLabelText('Exit time'), {
    target: { value: '09:00' },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Calculate fee' }))

  expect(screen.getByText('Exit time must be after entry time')).toBeTruthy()
})
