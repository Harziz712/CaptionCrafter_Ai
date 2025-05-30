import { platforms } from "../data/dict";
import { Label } from "./ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";



interface PlatformSelectorProps {
  platform: string;
  setPlatform: (value: string) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ platform, setPlatform }) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-bold text-purple-600">Select Platform</Label>
      <Select onValueChange={setPlatform} value={platform} >
        <SelectTrigger className="w-full py-6 text-sm border-2 border-purple-800" >
          <SelectValue placeholder="Choose platform..."  />
        </SelectTrigger>
        <SelectContent className="bg-purple-50 font-sans">
          {platforms.map((platformOption, i) => (
            <SelectItem key={i} value={platformOption} className="border-2 border-blue-100 bg-blue-100">
              {platformOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PlatformSelector;
