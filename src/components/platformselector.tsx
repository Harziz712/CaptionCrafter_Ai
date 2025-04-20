import { Label } from "./ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";

const platforms = ["Instagram", "LinkedIn", "Twitter"];

interface PlatformSelectorProps {
  platform: string;
  setPlatform: (value: string) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({ platform, setPlatform }) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-bold">Select Platform</Label>
      <Select onValueChange={setPlatform} value={platform}>
        <SelectTrigger className="w-full py-6 text-base">
          <SelectValue placeholder="Choose platform..." />
        </SelectTrigger>
        <SelectContent>
          {platforms.map((platformOption, i) => (
            <SelectItem key={i} value={platformOption}>
              {platformOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PlatformSelector;
