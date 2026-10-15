import { test, expect } from 'vitest'
import { parkingFee } from './fee.js'

test('15 minutes is free', () => {
  expect(parkingFee(15)).toBe(0)
})

test('16 minutes costs RM 3 for the first hour', () => {
  expect(parkingFee(16)).toBe(3)
})

test('60 minutes costs RM 3', () => {
  expect(parkingFee(60)).toBe(3)
})

test('61 minutes costs RM 5 because an extra hour has started', () => {
  expect(parkingFee(61)).toBe(5)
})

test('a long stay is capped at RM 15', () => {
  expect(parkingFee(1440)).toBe(15)
})
