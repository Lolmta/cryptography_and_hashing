import { ALPHABET } from "@/app/lib/constants";
import ButtonInputBlock from "@/components/button-input-block";
import { useCaesarFunctions } from "@/components/caesar-cipher-content/hooks/useCaesarFunctions";
import { useMemo, useState } from "react";

const CaesarCipher = () => {
  const [privatKey, setPrivatKey] = useState(0);
  const [valueKey, setValueKey] = useState(0);

  console.log(privatKey);

  const [textForEncrypt, setTextForEncrypt] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const [valueD, setValueD] = useState("");
  const [plaintext, setPlaintext] = useState("");

  const { getText, encrypt, decrypt } = useCaesarFunctions();

  const handleEncrypt = () => encrypt(textForEncrypt, privatKey, setCiphertext);
  const handleDecrypt = () => decrypt(valueD, privatKey, setPlaintext);

  const handleSetPrivatKey = () => setPrivatKey(valueKey);

  const encryptedAlphabet = useMemo(
    () => getText(ALPHABET, "encrypt", privatKey),
    [privatKey]
  );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-10">
        <div className="space-y-2">
          <ButtonInputBlock
            value={valueKey}
            onChange={setValueKey}
            onClick={handleSetPrivatKey}
            inputType="number"
            buttonText="Set privat key"
          />
          <p>
            Privat Key:{" "}
            <span className="font-bold text-green-400">{privatKey}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-[600px]">
          <p>Plain Alphabet:</p>
          <p className="font-bold">{ALPHABET}</p>
          <p>Encrypted Alphabet:</p>
          <p className="font-bold">{encryptedAlphabet}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p>Enter your plaintext:</p>
        <ButtonInputBlock
          value={textForEncrypt}
          onChange={setTextForEncrypt}
          onClick={handleEncrypt}
          buttonText="Encrypt"
        />
        {ciphertext && (
          <p className="text-green-400">
            Ciphertext: <span className="font-bold">{ciphertext}</span>
          </p>
        )}
        <ButtonInputBlock
          value={valueD}
          onChange={setValueD}
          onClick={handleDecrypt}
          buttonText="Decrypt"
        />
        {plaintext && (
          <p className="text-green-400">
            Plaintext: <span className="font-bold">{plaintext}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default CaesarCipher;
