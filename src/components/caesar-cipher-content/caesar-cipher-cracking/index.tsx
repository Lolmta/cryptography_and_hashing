import CaesarCipherBrutForce from "@/components/caesar-cipher-content/caesar-cipher-brut-force";

const CaesarCipherCracking = () => {
  return (
    <div className="border-t border-green-400 border-dashed">
      <h2 className="text-2xl font-bold py-4">Cracking the Caesar Cipher</h2>
      <CaesarCipherBrutForce />
      <h3 className="text-xl font-bold border-t border-green-400 border-dashed py-4">
        Frequency Analysis
      </h3>
    </div>
  );
};

export default CaesarCipherCracking;
