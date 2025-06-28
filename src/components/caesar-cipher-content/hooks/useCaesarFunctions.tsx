import { ALPHABET, ALPHABET_LENGTH } from "@/app/lib/constants";

export const useCaesarFunctions = () => {
  const getLetterIndex = (letter: string) => ALPHABET.indexOf(letter);
  const getIndexOfLetter = (index: number) => ALPHABET[index];

  const getText = (
    text: string,
    type: "encrypt" | "decrypt",
    privatKey: number
  ) => {
    return text
      .toUpperCase()
      .split("")
      .map((letter) => {
        const index = getLetterIndex(letter);
        //if not from alphabet
        if (index === -1) return letter;

        let newIndex =
          (type === "encrypt" ? index + privatKey : index - privatKey) %
          ALPHABET_LENGTH;

        //if newIndex is negative
        if (newIndex < 0) newIndex += ALPHABET_LENGTH;

        return getIndexOfLetter(newIndex);
      })
      .join("");
  };

  const encrypt = (
    text: string,
    privateKey: number,
    onEncrypt?: (text: string) => void
  ) => {
    const encryptedText = getText(text, "encrypt", privateKey);
    onEncrypt?.(encryptedText);
    return encryptedText;
  };

  const decrypt = (
    text: string,
    privateKey: number,
    onDecrypt?: (text: string) => void
  ) => {
    const decryptedText = getText(text, "decrypt", privateKey);
    onDecrypt?.(decryptedText);
    return decryptedText;
  };

  return {
    getText,
    encrypt,
    decrypt,
    getLetterIndex,
    getIndexOfLetter,
  };
};
