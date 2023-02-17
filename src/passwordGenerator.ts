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
    const arrayBuffer = new Uint8Array(1)

    for (let i = 0; i < length; i++) {
      // Select the pool MAX 4
      let selectPool = crypto.getRandomValues(arrayBuffer)[0] % this.caseNumber
      switch (selectPool) {
        case 0:
        // TODO: forcing numbers with Up and Lower

        case 1:
        // TODO: forcing symbols with Up and Lower

        default:
        // TODO: Just characters
      }
    }
    return password
    /*
    let chars = this.CHARS
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
    */
  }

  /**
   * It checks the complexity the user wants for the password.
   */
  checkComplexity(): boolean {
    // TODO: Implementing this feature
    return false
  }

  generateRandom(max: number) {}

  /**
   * Empty constructor for the class
   */
  constructor() {}
}

export { PasswordGenerator }
