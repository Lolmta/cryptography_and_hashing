import { useCaesarFunctions } from "@/components/caesar-cipher-content/hooks/useCaesarFunctions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CaesarCipherBrutForce = () => {
  const [alphabetLength, setAlphabetLength] = useState(0);
  const [ciphertext, setCiphertext] = useState("");
  const [plaintextVariants, setPlaintextVariants] = useState<string[]>([]);

  const { encrypt } = useCaesarFunctions();

  const handleVariantSet = (text: string) => {
    setPlaintextVariants((prev) => [...prev, text]);
  };

  const handleDecrypt = () => {
    for (let i = 0; i < alphabetLength; i++) {
      encrypt(ciphertext, i, handleVariantSet);
    }
  };

  return (
    <div className="border-t border-green-400 border-dashed py-4 space-y-4">
      <h3 className="text-xl font-bold">Brut Force</h3>

      <div className="flex gap-4 items-end">
        <div className="space-y-2">
          <p>Alphabet Length:</p>
          <Input
            value={alphabetLength}
            onChange={(e) => setAlphabetLength(Number(e.target.value))}
            type="number"
          />
        </div>
        <div className="space-y-2">
          <p>Ciphertext:</p>
          <Input
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
          />
        </div>
        <Button onClick={handleDecrypt} variant="secondary">
          Decrypt
        </Button>
      </div>
      {!!plaintextVariants.length && (
        <div>
          {plaintextVariants.map((variant) => (
            <p key={variant} className="text-sm">
              {variant}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaesarCipherBrutForce;
