import { Play } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center px-4 py-16 text-center">
      <Badge variant="outline" className="bg-white/80 text-gray-800 px-4 py-2 rounded-full text-sm mb-8 border-2 border-purple-400">
        Allows customization and optimization for different job roles
      </Badge>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
        AI-Powered Resumes
        <br />
        & Cover Letters
      </h1>

      <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-12">
        Stand Out from the Crowd with AI-Generated Resumes &
        <br />
        Cover Letters - Fast, Smart, and Professional!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          className="bg-purple-500 hover:bg-purple-400 text-black font-medium px-8 py-6 rounded-full"
        >
          Start With 7 Days Free Trial
        </Button>
        
        <Button 
          variant="outline" 
          className="bg-white/80 hover:bg-white text-black font-medium px-8 py-6 rounded-full"
        >
          <Play className="mr-2 h-4 w-4" /> View Demo
        </Button>
      </div>
    </div>
  );
};

export default Hero;