import { ClipboardCopy } from "lucide-react";
import { Button } from "./button";

export const Glassmorphism = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
      <div className={`backdrop-blur-md shadow-md ${className}`}>{children}</div>
    )
  }
  interface CopyProps{
    handleCopy: () => void;
    copied: boolean;
    className?: string;
  }
  export const CopyButton = ({handleCopy, copied, className}: (CopyProps)) => {
    // const  {handleCopy, copied} = useGeneratedCaption()
    return (
      <div className={`flex justify-end items-end mt-4 ${className}`}>
      <Button
        onClick={handleCopy}
        variant="outline"
        className="p-2 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none"
      >
        <ClipboardCopy className="w-3 h-3" />
        <span className="text-xs">{copied ? "Copied!" : "Copy Caption"}</span>
      </Button>
    </div>
    );
  };
