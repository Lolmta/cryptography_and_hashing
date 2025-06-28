import { MOST_COMMON_LETTER } from "@/app/lib/constants";
import { frequencyAnalysis } from "@/app/lib/utils";
import ButtonInputBlock from "@/components/button-input-block";
import { useCaesarFunctions } from "@/components/caesar-cipher-content/hooks/useCaesarFunctions";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const CaesarCipherFrequencyAnalysis = () => {
  const [text, setText] = useState("");
  const [frequency, setFrequency] = useState<Map<string, number>>();

  const { decrypt, getLetterIndex } = useCaesarFunctions();

  const handleFrequencyAnalysis = () => {
    const result = frequencyAnalysis(text);
    setFrequency(result);
  };

  const predictedKeys = useMemo(() => {
    if (!frequency) return [];
    const firstThreeOptions = Array.from(frequency.entries()).slice(0, 3);
    const mostCommonIndex = getLetterIndex(MOST_COMMON_LETTER);
    return firstThreeOptions.map(([letter, _]) => {
      const letterIndex = getLetterIndex(letter);
      const key = (letterIndex - mostCommonIndex) % 26;
      return key;
    });
  }, [frequency, getLetterIndex]);

  const predictedValues = useMemo(() => {
    if (!predictedKeys) return [];
    return predictedKeys.map((key) => decrypt(text, key));
  }, [predictedKeys]);

  return (
    <div className="border-t border-green-400 border-dashed py-4 space-y-4">
      <h3 className="text-xl font-bold">Frequency Analysis</h3>
      <div className="space-y-4">
        <ButtonInputBlock
          value={text}
          onChange={setText}
          onClick={handleFrequencyAnalysis}
          buttonText="Analyze"
        />
        {frequency && (
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Frequency</h4>
            <div className="flex flex-wrap gap-2">
              {Array.from(frequency.entries()).map(([letter, count], index) => (
                <div
                  key={letter}
                  className={cn({
                    "text-green-400": index < 3,
                  })}
                >
                  {letter}: {count}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <p>
          The most common letter in the English language is{" "}
          <span className="font-bold text-green-400">E</span>.
        </p>
        <p>
          To predict the key, find the most common letter in the ciphertext and
          subtract its position from the position of E.
        </p>
        {!!predictedKeys.length && (
          <p>
            Predicted keys:{" "}
            <span className="font-bold text-green-400">
              {predictedKeys.join(", ")}
            </span>
          </p>
        )}
        {!!predictedValues.length && (
          <div>
            <p className="font-bold">Predicted values: </p>

            {predictedValues.map((value) => (
              <div key={value} className="py-4 font-bold text-green-400">
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaesarCipherFrequencyAnalysis;
