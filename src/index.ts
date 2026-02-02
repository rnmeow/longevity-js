const isLeapYear = (ceYear: number): boolean =>
  ceYear % 4 === 0 && (ceYear % 100 !== 0 || ceYear % 400 === 0)

const getMsInYear = (ceYear: number): number =>
  isLeapYear(ceYear) ? 31622400000 : 31536000000

export function calcAge(birthday: Date): number {
  const now = new Date(),
    curYear = now.getUTCFullYear(),
    birthYear = birthday.getUTCFullYear()

  const age =
    // leftover days in the year of birth
    (Date.UTC(birthYear, 11, 31, 23, 59, 59, 999) - +birthday) /
      getMsInYear(birthYear) +
    // passed years
    Math.max(0, curYear - birthYear - 1) +
    // days from this year
    (+now - Date.UTC(curYear, 0, 1, 0, 0, 0, 0)) / getMsInYear(curYear)

  /*
   * Copyright (C) 2024-2026, Yu-huan Kuo. Licensed under MIT.
   */

  return age
}
