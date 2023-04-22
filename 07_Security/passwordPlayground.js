import bcrypt from "bcrypt";

const passwordPlaintext = "agent47";
const passwordPlaintext2 = "agent007";
const hashedPassword = "";

const encryptedPP1 = await bcrypt.hash(passwordPlaintext, 12);
console.log(encryptedPP1);

const isSame = await bcrypt.compare(passwordPlaintext, encryptedPP1);
console.log(isSame);

const isNOTSame = await bcrypt.compare(passwordPlaintext2, encryptedPP1);
console.log(isNOTSame);