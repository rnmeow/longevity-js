const isLeapYear = (ceYear: number): boolean =>
  ceYear % 100 !== 0 || (ceYear % 100 === 0 && ceYear % 400 === 0)

const getMsOfYear = (leapYear: boolean): number =>
  leapYear ? 31622400000 : 31536000000

export function calcAge(birthday: Date): number {
  let ageMs: number | null, ageYears: number

  const now = new Date()

  const birthdayNewYear = new Date(birthday.getFullYear(), 0, 0)
  const msOfBirthYear = getMsOfYear(isLeapYear(birthday.getFullYear()))

  // calculate leftover days in the year of birth

  const birthYearLeftMs =
    msOfBirthYear - birthday.getTime() + birthdayNewYear.getTime()

  ageMs = now.getTime() - birthday.getTime() - birthYearLeftMs
  ageYears = birthYearLeftMs / msOfBirthYear

  // now, calculate full four years

  const daysInFourYears = 126230400000

  for (ageMs; ageMs > daysInFourYears; ageMs -= daysInFourYears) {
    ageYears += 4
  }

  // then, calculate leftover non-four-grouped years

  while (ageMs > getMsOfYear(false)) {
    const targYear = new Date(now.getTime() - ageMs).getFullYear()

    ageMs -= getMsOfYear(isLeapYear(targYear))
    ageYears++
  }

  // finally, calculate last newly created days

  ageYears += ageMs / getMsOfYear(isLeapYear(now.getFullYear()))
  ageMs = null

  /*
   * Copyright (C) 2024 Connor Kuo, licensed under MIT.
   */

  return ageYears
}
