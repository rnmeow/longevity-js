const isLeapYear = (ceYear: number): boolean =>
  ceYear % 100 !== 0 || (ceYear % 100 === 0 && ceYear % 400 === 0)

const getMsOfYear = (ceYear: number): number =>
  isLeapYear(ceYear) ? 31622400000 : 31536000000

export function calcAge(birthday: Date): number {
  const now = new Date()

  let ageYears: number

  // leftover days in the year of birth

  const endOfBirthYear = new Date(
    Date.UTC(birthday.getUTCFullYear(), 11, 31, 23, 59, 59, 999),
  )
  const birthYearLeftMs = endOfBirthYear.getTime() - birthday.getTime()

  ageYears = birthYearLeftMs / getMsOfYear(birthday.getUTCFullYear())

  // passed years

  ageYears += now.getUTCFullYear() - (birthday.getUTCFullYear() + 1)

  // days from this year

  const startOfThisYear = new Date(
    Date.UTC(now.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
  )

  ageYears +=
    (now.getTime() - startOfThisYear.getTime()) /
    getMsOfYear(now.getUTCFullYear())

  /*
   * Copyright (C) 2024 Connor Kuo, licensed under MIT.
   */

  return ageYears
}
