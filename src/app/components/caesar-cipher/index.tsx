"use client";

import {
  ALPHABET,
  ALPHABET_LENGTH,
  PRIVAT_KEY,
} from "@/app/components/caesar-cipher/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

const CaesarCipher = () => {
  const [textForEncrypt, setTextForEncrypt] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const [valueD, setValueD] = useState("");
  const [plaintext, setPlaintext] = useState("");

  const getLetterIndex = (letter: string) => ALPHABET.indexOf(letter);
  const getIndexOfLetter = (index: number) => ALPHABET[index];

  const handleGetText = (text: string, type: "encrypt" | "decrypt") => {
    return text
      .toUpperCase()
      .split("")
      .map((letter) => {
        const index = getLetterIndex(letter);
        //if not from alphabet
        if (index === -1) return letter;

        let newIndex =
          (type === "encrypt" ? index + PRIVAT_KEY : index - PRIVAT_KEY) %
          ALPHABET_LENGTH;

        //if newIndex is negative
        if (newIndex < 0) newIndex += ALPHABET_LENGTH;

        return getIndexOfLetter(newIndex);
      });
  };

  const handleEncrypt = () => {
    const encryptedText = handleGetText(textForEncrypt, "encrypt");
    setCiphertext(encryptedText.join(""));
  };

  const handleDecrypt = () => {
    const decryptedText = handleGetText(valueD, "decrypt");
    setPlaintext(decryptedText.join(""));
  };

  const encryptedAlphabet = useMemo(
    () => handleGetText(ALPHABET, "encrypt"),
    []
  );

  return (
    <section className="border border-green-400 border-dashed p-4 rounded-lg w-full space-y-2">
      <h1 className="text-2xl font-bold">Caesar Cipher</h1>
      <div className="grid grid-cols-2 gap-2 w-[700px]">
        <p>Plain Alphabet:</p>
        <p className="font-bold">{ALPHABET}</p>
        <p>Encrypted Alphabet:</p>
        <p className="font-bold">{encryptedAlphabet}</p>
        <p>
          Privat Key: <span className="font-bold">{PRIVAT_KEY}</span>
        </p>
      </div>

      <div className="space-y-2">
        <p>Enter your plaintext:</p>
        <div className="flex gap-2 w-[400px]">
          <Input
            value={textForEncrypt}
            onChange={(e) => setTextForEncrypt(e.target.value)}
            type="text"
            placeholder="Enter text to encrypt"
          />
          <Button variant="secondary" onClick={handleEncrypt}>
            Encrypt
          </Button>
        </div>
        {ciphertext && (
          <p className="text-green-400">
            Ciphertext: <span className="font-bold">{ciphertext}</span>
          </p>
        )}
        <div className="flex gap-2 w-[400px]">
          <Input
            value={valueD}
            onChange={(e) => setValueD(e.target.value)}
            type="text"
            placeholder="Enter text to encrypt"
          />
          <Button variant="secondary" onClick={handleDecrypt}>
            Decrypt
          </Button>
        </div>
        {plaintext && (
          <p className="text-green-400">
            Plaintext: <span className="font-bold">{plaintext}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default CaesarCipher;
