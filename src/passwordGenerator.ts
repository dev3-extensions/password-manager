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
  generatePassword(): string {
    let password: string = ''
    const array: Uint32Array = new Uint32Array(this.CHARS.length)
    let randomValues: Uint32Array = crypto.getRandomValues(array)

    for (let i = 0; i < PASSWORD_LENGTH.MEDIUM; i++) {
      let random: number = randomValues[i] % this.CHARS.length
      password += this.CHARS.substring(random, random + 1)
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
