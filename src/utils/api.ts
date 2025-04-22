import { toast } from "sonner";
import { GoogleGenerativeAI } from "@google/generative-ai";
import useGeneratedCaption from "../hooks/useGenerateCaption";


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });



const handleGenerate = async () => {

   const {
     topic,
     tone,
     platform,
     setLoading,
     setGeneratedCaption,
   } = useGeneratedCaption();


    if (!topic || !tone || !platform) {
      toast.error("Please fill in topic, tone, and platform");
      return;
    }
    setLoading(true);
    try {
      const prompt = `Generate a ${tone} social media caption for ${platform} about: "${topic}"`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const caption = response.candidates?.[0]?.content?.parts?.[0]?.text || '';
      setGeneratedCaption(caption);

    } catch (error) {
      console.error("Gemini API error:", error);
      toast.error("Failed to generate caption with Gemini. Try again.");
    } finally {
      setLoading(false);
    }
  };

  export default handleGenerate;