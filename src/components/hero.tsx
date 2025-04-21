import { Sparkles, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Homebtn } from "./ui/ui";

const Hero = () => {
  return (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center px-4 py-16 text-center">
      {/* <Badge variant="outline" className="bg-blue-50/40 text-gray-800 px-4 py-2 rounded-full text-sm mb-8 border-2 border-blue-400"> */}
   <Badge variant="outline" className="animatedButton rounded-full">
   <h2 className="animatedButtonText rounded-full bg-blue-50/40 text-gray-800 "> Powered by AI — Built for Creators & Marketers</h2>
      </Badge>


      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
        Create Viral Captions & Content
        <br />
        in Seconds with AI
      </h1>

      <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-12">
        CaptionCrafter_AI helps you generate scroll-stopping social media captions,
        <br className="hidden sm:block" />
        with the right tone, hashtags, and hooks — instantly.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-6 rounded-full"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          use CaptionCrafter Free
        </Button>
        
        <Button 
          variant="outline" 
          className="bg-white/80 hover:bg-white text-black font-medium px-8 py-6 rounded-full"
        >
          <Play className="mr-2 h-5 w-5" />
          Watch Demo
        </Button>
      </div>
    </div>
  );
};

export default Hero;
