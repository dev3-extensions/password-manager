import { PASSWORD_LENGTH } from './constants/passwordLength'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*()'
const CHARACTERS_LOWER = 'abcdefghijklmnopqrstuvwxyz'
const CHARACTERS_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
/**
 * Class representing a password generator.
 * It generates a random password based on the desired length
 */
class PasswordGenerator {
  readonly caseNumber = 4

  /**
   *  Function used to generate random password using Crypto Library
   * @returns a randomly generated password.
   * @param length the length value of the password
   * @param numbers using numbers flag
   * @param symbols using symbols flag
   * @returns the password generated
   */
  generatePassword(length: number, numbers: boolean, symbols: boolean): string {
    let password: string = ''

    // TODO: Change this
    let chars = this.CHARACTERS_LOWER + this.CHARACTERS_UPPER
    if (numbers) {
      chars += this.NUMBERS
    }
    if (symbols) {
      chars += this.SYMBOLS
    }

    // TODO: refactor into different functions

    const array: Uint32Array = new Uint32Array(chars.length)
    let randomValues: Uint32Array = crypto.getRandomValues(array)

    let passwordLength: number
    if (length == 0) {
      passwordLength = PASSWORD_LENGTH.SMALL
    } else if (length == 1) {
      passwordLength = PASSWORD_LENGTH.MEDIUM
    } else {
      passwordLength = PASSWORD_LENGTH.LONG
    }

    // TODO: Bug - Forcing symbol or numbers when flag is on
    for (let i = 0; i < passwordLength; i++) {
      let random: number = randomValues[i] % chars.length
      password += chars.substring(random, random + 1)
    }
    return password
  }

  /**
   * It checks the complexity the user wants for the password.
   */
  checkComplexityElement(password: string, array): boolean {
    let passwordArray = password.split('')
    return passwordArray.some((r) => array(r))
  }

  /**
   * Method which generates a random integer between 0 and Max
   * @param maxValue the maximum value randomly generated
   * @returns a random integer between 0 and maxValue
   */
  randomNumber(maxValue: number) {
    const noBytes = Math.ceil(Math.log2(maxValue / 8))

    const maxNum = Math.pow(256, noBytes)
    const bufferArray = new Uint8Array(noBytes)

    while (true) {
      crypto.getRandomValues(bufferArray)
      let value = 0
      for (let i = 0; i < noBytes; i++) {
        value = (value << 8) + bufferArray[i]
      }
      if (value < maxNum - (maxNum % maxValue)) {
        return value % maxValue
      }
    }
  }

  generateRandom(max: number) {}

  /**
   * Empty constructor for the class
   */
  constructor() {}
}

export { PasswordGenerator }
