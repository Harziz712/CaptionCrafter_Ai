import { tones } from "../data/dict";
import { Label } from "./ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";


interface ToneSelectorProps {
  tone: string;
  setTone: (value: string) => void;
}

const ToneSelector: React.FC<ToneSelectorProps> = ({ tone, setTone }) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-bold text-purple-600">Select a Tone</Label>
      <Select onValueChange={setTone} value={tone}>
        <SelectTrigger className="w-full py-6 text-sm border-2 border-purple-800">
          <SelectValue placeholder="Choose tone..." />
        </SelectTrigger>
        <SelectContent className="bg-purple-50 font-sans ">
          {tones.map((toneOption, i) => (
            <SelectItem key={i} value={toneOption} className="border-2 border-blue-100 bg-blue-100">
              {toneOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ToneSelector;
