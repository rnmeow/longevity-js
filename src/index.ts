const isLeapYear = (ceYear: number): boolean =>
  ceYear % 100 !== 0 || ceYear % 400 === 0

const getMsOfYear = (ceYear: number): number =>
  isLeapYear(ceYear) ? 31622400000 : 31536000000

export function calcAge(birthday: Date): number {
  const now = new Date(),
    thisYear = now.getUTCFullYear()

  const birthYear = birthday.getUTCFullYear()

  const startOfThisYear = new Date(Date.UTC(thisYear, 0, 1, 0, 0, 0, 0))
  const thisYearPassedMs = now.getTime() - startOfThisYear.getTime()
  const thisYearTotalMs = getMsOfYear(thisYear)

  const endOfBirthYear = new Date(Date.UTC(birthYear, 11, 31, 23, 59, 59, 999))
  const birthYearLeftMs = endOfBirthYear.getTime() - birthday.getTime()
  const birthYearTotalMs = getMsOfYear(birthYear)

  const ageYears =
    // leftover days in the year of birth
    birthYearLeftMs / birthYearTotalMs +
    // passed years
    thisYear -
    (birthYear + 1) +
    // days from this year
    thisYearPassedMs / thisYearTotalMs

  /*
   * Copyright (C) 2024, 2025, Yu-huan Kuo. Licensed under MIT.
   */

  return ageYears
}
