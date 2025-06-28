import CaesarCipher from "@/app/components/caesar-cipher";

export default function Home() {
  return (
    <div className="min-h-screen p-4 gap-16  font-[family-name:var(--font-geist-sans)] text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mx-auto">Cryptography and Hashing</h1>
        <CaesarCipher />
      </main>
    </div>
  );
}
