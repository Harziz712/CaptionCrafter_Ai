// import { useState } from "react";
// import { Card, CardContent } from "./ui/card";
// import { Button } from "./ui/button";
// import { toast } from "sonner";
// import { ClipboardCopy } from "lucide-react";

// interface GeneratedCaptionProps {
//   generatedCaption: string;
// }

// const GeneratedCaption = ({ generatedCaption }:(GeneratedCaptionProps)) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(generatedCaption);
//     toast.success("Caption copied to clipboard");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   if (!generatedCaption) return null;

//   return (
//     <Card className="mt-6 p-2">
//       <CardContent className="p-6 text-lg text-gray-800 space-y-4">
//         <p>{generatedCaption}</p>
//       </CardContent>
//       <div className="flex justify-end items-end mt-4">
//          <Button
//            onClick={handleCopy}
//            variant="outline"
//            className="p-2 rounded bg-gray-200 hover:bg-gray-300 focus:outline-none"

//         >
//           <ClipboardCopy className="w-3 h-3" />
//           <span className="text-xs" >{copied ? "Copied!" : "Copy Caption"}</span>
//         </Button>
//         </div>
//     </Card>
//   );
// };

// export default GeneratedCaption;

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "./ui/drawer";
import { CopyButton } from "./ui/ui";
import useGeneratedCaption from "../hooks/useGenerateCaption";
import { useState } from "react";
import { toast } from "sonner";

interface GeneratedCaptionProps {
  generatedCaption: string;
}

const GeneratedCaption = ({ generatedCaption }: GeneratedCaptionProps) => {

  const [copied, setCopied] = useState(false);

  const {isExpanded, drawerOpen,setDrawerOpen} = useGeneratedCaption()
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCaption);
    toast.success("Caption copied to clipboard");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!generatedCaption) return null;

  const words = generatedCaption.split(" ");
  const shortCaption = words.length > 100 ? words.slice(0, 100).join(" ") + "..." : generatedCaption;

  return (
    <Card className="mt-6 p-2">
      <CardContent className="p-6 text-lg text-gray-800 space-y-4 relative">
        <p>{isExpanded ? generatedCaption : shortCaption}</p>
        <CopyButton 
              className="absolute  right-0 "
           handleCopy={handleCopy}
           copied={copied}
           />
        {words.length > 100 && (
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} >
            <DrawerTrigger asChild>
              <Button
                variant="link"
                className="text-purple-600  text-sm"
                onClick={() => setDrawerOpen(true)}
              >
                Explore full ...
              </Button>


            </DrawerTrigger>
            <DrawerContent className="w-full p-10 gap-2">

            
                <DrawerTitle className="">Full Caption</DrawerTitle>
                <DrawerDescription className="text-base text-gray-800 ">
                  {generatedCaption}

                </DrawerDescription>
           <CopyButton 
           handleCopy={handleCopy}
           copied={copied}
           />
            </DrawerContent>
          </Drawer>
        )}
      </CardContent>

    </Card>
  );
};

export default GeneratedCaption;