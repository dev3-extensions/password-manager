import CryptoJS from 'crypto-js'
import { PasswordGenerator } from './passwordGenerator'

let pg = new PasswordGenerator()

// The passphrase used to generate the key
let passphrase = pg.generatePassword(32, true, true)

// Salt generated from random wordarray
let salt = CryptoJS.lib.WordArray.random(256)

/**
 * Generating a key using PBKDF2 to not have a plain text passphrase
 */
let key256Bit: string = CryptoJS.PBKDF2(passphrase, salt, {
  keySize: 256,
  iterations: 10000,
}).toString()

// Encoding the key
let key: string = CryptoJS.enc.Hex.parse(key256Bit).toString()

/**
 * It encrypts a string using AES-256 bit encryption
 * @param input The password to encrypt
 * @returns an encrypted string
 */
const encrypt = (input: string) => {
  const encryptedText = CryptoJS.AES.encrypt(input, key, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Iso97971,
  })
  return encryptedText
}

/**
 * It decrypts a string using the cipher provided
 * @param ciphertext the cipher to decrypt the password
 * @returns a plain string with original password
 */
const decrypt = (ciphertext: string | CryptoJS.lib.CipherParams) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Iso97971,
  })
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}

export { encrypt, decrypt }
