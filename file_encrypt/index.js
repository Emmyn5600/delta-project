const crypto = require("crypto");
const fs = require("fs");

// Encrypt file function
function encryptFile(inputPath, outputPath, password) {
	const input = fs.createReadStream(inputPath);
	const output = fs.createWriteStream(outputPath);
	const cipher = crypto.createCipher("aes-256-cbc", password);

	input.pipe(cipher).pipe(output);
}

// Decrypt file function
function decryptFile(inputPath, outputPath, password) {
	const input = fs.createReadStream(inputPath);
	const output = fs.createWriteStream(outputPath);
	const decipher = crypto.createDecipher("aes-256-cbc", password);

	input.pipe(decipher).pipe(output);
}

// Example usage
const inputPath = "plaintext.txt";
const encryptedPath = "encrypted.txt";
const decryptedPath = "decrypted.txt";
const password = "mySecretPassword";

// encryptFile(inputPath, encryptedPath, password);
decryptFile(encryptedPath, decryptedPath, password);
