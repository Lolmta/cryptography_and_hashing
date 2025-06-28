import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ButtonInputBlockProps<T extends string | number> = {
  buttonText: string;
  value: T;
  inputType?: "text" | "number";
  onChange: (value: T) => void;
  onClick: () => void;
};

const ButtonInputBlock = <T extends string | number>(
  props: ButtonInputBlockProps<T>
) => {
  const { buttonText, value, inputType = "text", onChange, onClick } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const parsed = inputType === "number" ? (Number(raw) as T) : (raw as T);
    onChange(parsed);
  };

  return (
    <div className="flex gap-2 w-[400px]">
      <Input
        value={value}
        onChange={(e) => handleInputChange(e)}
        type={inputType}
        placeholder="Enter value"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
      />
      <Button variant="secondary" className="w-[140px]" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default ButtonInputBlock;
