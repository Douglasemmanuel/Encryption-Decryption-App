




// Encrypts a string using a Caesar cipher with a numeric key



// Encrypt function
export const encrypt = (input: string, key: number): string => {
    let encrypted = '';
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let charCode = input.charCodeAt(i);

        // Check if character is a letter
        if (char.match(/[a-zA-Z]/)) {
            const baseCode = (char >= 'a' && char <= 'z') ? 97 : 65;  // ASCII code for 'a' or 'A'
            const offset = charCode - baseCode;
            const encryptedChar = String.fromCharCode(baseCode + (offset + key) % 26);
            encrypted += encryptedChar;
        } else {
            // For non-alphabetic characters, don't change them
            encrypted += char;
        }
        console.log(`the input is:${input} and the key is:${key} ,the ENCRYPTED TEXT:${encrypted}`)
    }
    return encrypted;
}

// Decrypt function
export const decrypt = (input: string, key: number): string => {
    let decrypted = '';
    
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let charCode = input.charCodeAt(i);

        // Check if character is a letter
        if (char.match(/[a-zA-Z]/)) {
            const baseCode = (char >= 'a' && char <= 'z') ? 97 : 65;  // ASCII code for 'a' or 'A'
            const offset = charCode - baseCode;

            // Correct decryption calculation (ensure positive modulo result)
            const decryptedChar = String.fromCharCode(baseCode + (offset - key + 26) % 26);
            decrypted += decryptedChar;
        } else {
            // For non-alphabetic characters, don't change them
            decrypted += char;
        }
    }
    console.log(`the input is:${input} and the key is:${key} , the DECRYPTED TEXT:${decrypted}`)
    return decrypted;
}

  


