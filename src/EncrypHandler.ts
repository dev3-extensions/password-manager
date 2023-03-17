import CryptoJS from 'crypto-js'

// Salt generated from random wordarray
let salt = CryptoJS.lib.WordArray.random(256)

/**
 * Generating a key using PBKDF2 to not have a plain text passphrase
 * TODO: Implement safer and more complex way
 */
let key256Bit = CryptoJS.PBKDF2('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', salt, {
  keySize: 256,
  iterations: 10000,
}).toString()

/**
 * It encrypts a string using AES-256 bit encryption
 * @param input The password to encrypt
 * @returns an encrypted string
 */
const encrypt = (input: string) => {
  const encryptedText = CryptoJS.AES.encrypt(input, key256Bit)
  console.log(encryptedText.toString())
  console.log(key256Bit)
  return encryptedText.toString()
}

/**
 * It decrypts a string using the cipher provided
 * @param ciphertext the cipher to decrypt the password
 * @returns a plain string with original password
 */
const decrypt = (ciphertext: string | CryptoJS.lib.CipherParams) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key256Bit)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  return originalText
}

export { encrypt, decrypt }
