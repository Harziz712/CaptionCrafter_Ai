import { Input } from "./ui/input"; 
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Sparkles, Loader2 } from "lucide-react";
import ToneSelector from './ToneSelector';
import PlatformSelector from './platformselector';

interface CaptionFormProps {
  topic: string;
  setTopic: (value: string) => void;
  tone: string;
  setTone: (value: string) => void;
  platform: string;
  setPlatform: (value: string) => void;
  loading: boolean;
  onGenerate: () => void;
}

const CaptionForm = ({
  topic,
  setTopic,
  tone,
  setTone,
  platform,
  setPlatform,
  loading,
  onGenerate,
}:(CaptionFormProps)) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="topic" className="text-sm font-bold text-purple-600">Enter Topic or Idea</Label>
        <Input
          id="topic"
          placeholder="e.g. Boost my portfolio visibility"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="mt-2 py-6 px-4 text-sm rounded-xl border-2 border-purple-800 "
        />
      </div>

        <div className="flex grid-col  flex-col md:grid md:grid-cols-2 gap-4 ">  
        <ToneSelector tone={tone} setTone={setTone} />
        <PlatformSelector platform={platform} setPlatform={setPlatform} />
        </div>

      <Button
        type="submit"
        className="w-full py-6 text-base font-semibold bg-purple-600 hover:bg-purple-500"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-5 w-5" />
            Generate Caption
          </>
        )}
      </Button>
    </form>
  );
};

export default CaptionForm;
