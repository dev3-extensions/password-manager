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
  readonly CHARACTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  /**
   * Function used to generate random password using Crypto Library
   * @returns a randomly generated password.
   */
  generatePassword(length: number, numbers: boolean, symbols: boolean): string {
    let password: string = ''
    let chars = this.CHARACTERS
    if (numbers) {
      chars += this.NUMBERS
    }
    if (symbols) {
      chars += this.SYMBOLS
    }

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

    for (let i = 0; i < passwordLength; i++) {
      let random: number = randomValues[i] % chars.length
      password += chars.substring(random, random + 1)
    }
    return password
  }

  /**
   * It checks the complexity the user wants for the password.
   */
  checkComplexity(): boolean {
    // TODO: Implementing this feature
    return false
  }

  /**
   * Empty constructor for the class
   */
  constructor() {}
}

export { PasswordGenerator }
