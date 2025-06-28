import { frequencyAnalysis } from "@/app/lib/utils";
import ButtonInputBlock from "@/components/button-input-block";
import { useState } from "react";

const CaesarCipherFrequencyAnalysis = () => {
  const [text, setText] = useState("");
  const [frequency, setFrequency] = useState<Map<string, number>>();

  const handleFrequencyAnalysis = () => {
    const result = frequencyAnalysis(text);
    setFrequency(result);
  };

  return (
    <div className="border-t border-green-400 border-dashed py-4 space-y-4">
      <h3 className="text-xl font-bold">Frequency Analysis</h3>
      <div className="space-y-4">
        <ButtonInputBlock
          value={text}
          onChange={setText}
          onClick={handleFrequencyAnalysis}
          buttonText="Encrypt"
        />
        {frequency && (
          <div className="space-y-2">
            <h4 className="text-lg font-bold">Frequency</h4>
            <div className="flex flex-wrap gap-2">
              {Array.from(frequency.entries()).map(([letter, count]) => (
                <div key={letter}>
                  {letter}: {count}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaesarCipherFrequencyAnalysis;
