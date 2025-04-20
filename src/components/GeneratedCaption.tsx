import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { ClipboardCopy } from "lucide-react";

interface GeneratedCaptionProps {
  generatedCaption: string;
}

const GeneratedCaption: React.FC<GeneratedCaptionProps> = ({ generatedCaption }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCaption);
    toast.success("Caption copied to clipboard");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!generatedCaption) return null;

  return (
    <Card className="mt-6 p-2">
      <CardContent className="p-6 text-lg text-gray-800 space-y-4">
        <p>{generatedCaption}</p>
      </CardContent>
      <div className="flex justify-end items-end mt-4">
         <Button
           onClick={handleCopy}
           variant="outline"
           className="p-2 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none"

        >
          <ClipboardCopy className="w-3 h-3" />
          <span className="text-xs" >{copied ? "Copied!" : "Copy Caption"}</span>
        </Button>
        </div>
    </Card>
  );
};

export default GeneratedCaption;
