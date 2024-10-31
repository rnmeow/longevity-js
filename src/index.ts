const isLeapYear = (ceYear: number): boolean =>
  ceYear % 100 !== 0 || (ceYear % 100 === 0 && ceYear % 400 === 0)

const getMsOfYear = (ceYear: number): number =>
  isLeapYear(ceYear) ? 31622400000 : 31536000000

export function calcAge(birthday: Date): number {
  const now = new Date()

  const endOfBirthYear = new Date(
      Date.UTC(birthday.getUTCFullYear(), 11, 31, 23, 59, 59, 999),
    ),
    birthYearLeftMs = endOfBirthYear.getTime() - birthday.getTime(),
    birthYearTotalMs = getMsOfYear(birthday.getUTCFullYear())

  const startOfThisYear = new Date(
      Date.UTC(now.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
    ),
    thisYearPassedMs = now.getTime() - startOfThisYear.getTime(),
    thisYearTotalMs = getMsOfYear(now.getUTCFullYear())

  const ageYears =
    // leftover days in the year of birth
    birthYearLeftMs / birthYearTotalMs +
    // passed years
    now.getUTCFullYear() -
    birthday.getUTCFullYear() +
    // days from this year
    thisYearPassedMs / thisYearTotalMs -
    // shísuì
    1

  /*
   * Copyright (C) 2024 Connor Kuo, licensed under MIT.
   */

  return ageYears
}
