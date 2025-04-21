import { useState } from "react";
import { toast } from "sonner";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const useGeneratedCaption = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [platform, setPlatform] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
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

  return {
    topic,
    setTopic,
    tone,
    setTone,
    platform,
    setPlatform,
    generatedCaption,
    loading,
    handleGenerate,
  };
};

export default useGeneratedCaption;