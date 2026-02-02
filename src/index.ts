const isLeapYear = (ceYear: number): boolean =>
  ceYear % 4 === 0 && (ceYear % 100 !== 0 || ceYear % 400 === 0)

const getMsOfYear = (ceYear: number): number =>
  isLeapYear(ceYear) ? 31622400000 : 31536000000

export function calcAge(birthday: Date): number {
  const now = new Date(),
    thisYear = now.getUTCFullYear(),
    birthYear = birthday.getUTCFullYear()

  const age =
    // leftover days in the year of birth
    (+new Date(Date.UTC(birthYear, 11, 31, 23, 59, 59, 999)) -
      birthday.getTime()) /
      getMsOfYear(birthYear) +
    // passed years
    thisYear -
    (birthYear + 1) +
    // days from this year
    (now.getTime() - +new Date(Date.UTC(thisYear, 0, 1, 0, 0, 0, 0))) /
      getMsOfYear(thisYear)

  /*
   * Copyright (C) 2024, 2025, Yu-huan Kuo. Licensed under MIT.
   */

  return age
}
