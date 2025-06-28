import CaesarCipherBrutForce from "@/components/caesar-cipher-content/caesar-cipher-brut-force";
import CaesarCipherFrequencyAnalysis from "@/components/caesar-cipher-content/caesar-cipher-frequency-analysis";

const CaesarCipherCracking = () => {
  return (
    <div className="border-t border-green-400 border-dashed">
      <h2 className="text-2xl font-bold py-4">Cracking the Caesar Cipher</h2>
      <CaesarCipherBrutForce />
      <CaesarCipherFrequencyAnalysis />
    </div>
  );
};

export default CaesarCipherCracking;
