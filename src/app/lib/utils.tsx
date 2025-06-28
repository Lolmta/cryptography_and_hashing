import { ALPHABET } from "@/app/lib/constants";

const frequencyAnalysis = (text: string) => {
  const frequencyMap = new Map<string, number>();

  text
    .toUpperCase()
    .split("")
    .forEach((char) => {
      if (!ALPHABET.includes(char)) return;
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    });

  const sortedFrequencyMap = new Map(
    [...frequencyMap.entries()].sort((a, b) => b[1] - a[1])
  );

  return sortedFrequencyMap;
};

export { frequencyAnalysis };
