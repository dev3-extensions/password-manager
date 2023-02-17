import { PASSWORD_LENGTH } from './constants/passwordLength'

/**
 * String of data containing string for all password options
 */
const PASSWORD_OPTIONS = {
  NUMBERS: '0123456789',
  SYMBOLS: '!@#$%^&*()',
  CHARACTERS_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  CHARACTERS_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}

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
    // Initial empty password
    let password: string = ''

    // The characters pool
    const charPool = []

    if (numbers && symbols) {
      let availableChars =
        PASSWORD_OPTIONS.NUMBERS +
        PASSWORD_OPTIONS.SYMBOLS +
        PASSWORD_OPTIONS.CHARACTERS_LOWER +
        PASSWORD_OPTIONS.CHARACTERS_UPPER

      // Adding numbers and symbols
      //password += PASSWORD_OPTIONS.NUMBERS + PASSWORD_OPTIONS.SYMBOLS
      charPool.push(this.genRandomChar(availableChars))
    }
  }

  /**
   * It shuffles characters among random index
   * @param charArray the Array of string to shuffle
   * @returns a shuffled array
   */
  shuffleList(charArray: string[]) {
    for (let i = charArray.length - 1; i > 0; i--) {
      // Generating random index to swap
      const swapIndex = this.randomNumber(charArray.length)
      const charToSwap = charArray[i]
      charArray[i] = charArray[swapIndex]
      charArray[swapIndex] = charToSwap
    }
    return charArray
  }
  /**
   * It gets a truly-random character from a given string
   * @param string the string we would like to take a character from
   * @returns a random string representing a random character
   */
  genRandomChar(string: string): string {
    return string[this.randomNumber(string.length)]
  }

  /**
   * Method which generates a random integer between 0 and Max
   * Using Fisher-Yates algorithm
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

  /**
   * Empty constructor for the class
   */
  constructor() {}
}

export { PasswordGenerator }
