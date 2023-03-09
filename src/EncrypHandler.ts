import { getRandomValues, subtle } from 'crypto'

const encoder = new TextEncoder()

/**
 * It gets a PBKDF2 key to be used to derive an AES-CBC key
 * @param secret the string to encode to generate the key from
 */
const getPasswordKey = (secret: string) => {
  subtle.importKey('raw', encoder.encode(secret), 'PBKDF2', false, ['deriveKey'])
}

// TODO: Implement these methods - to derive the key using AES from master password
// Documentation here -> https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey
const deriveKey = (passwordKey: CryptoKey, salt, keyUsage) => {
  window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    passwordKey,
    { name: 'AES-CBC', length: 256 },
    false,
    keyUsage
  )
}

/**
 * Encodes the password using UTF-8
 * @param password the password to encode
 * @returns a buffer array from password encoded
 */
const getPasswordEncoding = (password: string) => {
  return encoder.encode(password)
}

const encrypt = () => {
  // TODO: Implement this method
  const iv = crypto.getRandomValues(new Uint16Array(16))
}

const decrypt = (hashed: string) => {
  // TODO: implement the decryption method
}

export {}
