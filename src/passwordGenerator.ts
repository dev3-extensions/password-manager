import { PASSWORD_LENGTH } from './constants/passwordLength'

/**
 * Class representing a password generator.
 * It generates a random password based on the desired length
 */
class PasswordGenerator {
  // Readonly constant with all characters numbers and symbols
  readonly CHARS = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  readonly NUMBERS = '0123456789'
  readonly SYMBOLS = '!@#$%^&*()'
  readonly CHARACTERS_LOWER = 'abcdefghijklmnopqrstuvwxyz'
  readonly CHARACTERS_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

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

    if (numbers) {
      if (!this.checkComplexityElement(password, this.NUMBERS.split(''))) {
        // TODO: change a random character to a number
        password.replace(
          password.charAt(Math.random() * (password.length - 1)),
          this.NUMBERS.charAt(Math.random() * (this.NUMBERS.length - 1))
        )
      } else return password
    } else if (symbols) {
      if (!this.checkComplexityElement(password, this.SYMBOLS.split(''))) {
        // TODO: change a random character to a number
        password.replace(
          password.charAt(Math.random() * (password.length - 1)),
          this.SYMBOLS.charAt(Math.random() * (this.SYMBOLS.length - 1))
        )
      } else return password
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

  generateRandom(max: number) {}

  /**
   * Empty constructor for the class
   */
  constructor() {}
}

export { PasswordGenerator }
