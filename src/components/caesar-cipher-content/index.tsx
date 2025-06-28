"use client";

import CaesarCipher from "@/components/caesar-cipher-content/caesar-cipher";
import CaesarCipherCracking from "@/components/caesar-cipher-content/caesar-cipher-cracking";

const CaesarCipherContent = () => {
  return (
    <section className="border border-green-400 border-dashed p-4 rounded-lg w-full space-y-4">
      <h1 className="text-2xl font-bold">Caesar Cipher</h1>
      <CaesarCipher />
      <CaesarCipherCracking />
    </section>
  );
};

export default CaesarCipherContent;
