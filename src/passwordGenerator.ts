import { PASSWORD_LENGTH } from "./constants/passwordLength";

/**
 * Class representing a password generator.
 * It generates a random password based on the desired length
 */
class PasswordGenerator {
    // Readonly constant with all characters numbers and symbols
    readonly CHARS = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /**
     * Function used to generate random password using Math.Random
     * TODO: implementing Crypto for better security
     * @returns a randomly generated password.
     */
    generatePassword() {
        let password = "";

        for (let i = 0; i < PASSWORD_LENGTH.MEDIUM; i++) {
            let randomChar = Math.random() * this.CHARS.length;
            password += this.CHARS.substring(randomChar, randomChar + 1);
        }
        return password;
    }

    /**
     * Empty constructor for the class
     */
    constructor() {}
}

export { PasswordGenerator };
