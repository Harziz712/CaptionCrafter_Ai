import { useState } from "react";
import { toast } from "sonner";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const useGeneratedCaption = () => {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [platform, setPlatform] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);


  const handleGenerate = async () => {
  if (!topic || !tone || !platform) {
    toast.error("Please fill in topic, tone, and platform");
    return;
  }

  const lowerTopic = topic.toLowerCase().trim();
  const identityTriggers = [
    "what is your name",
    "who are you",
    "your name?",
    "tell me about yourself",
    "who is nooria",
    "are you nooria",
    "what's your name",
  ];

  const isIdentityQuestion = identityTriggers.some((q) => lowerTopic.includes(q));

  if (isIdentityQuestion) {
    const personalResponse =
      "I'm Nooria — your intelligent AI assistant. 💡 I help you think faster, write better, and stay inspired. *Nooria — Illuminate Your Curiosity.*";
    setGeneratedCaption(personalResponse);
    return;
  }

  setLoading(true);
  try {
    const prompt = `Write one engaging, ${tone.toLowerCase()} social media caption for ${platform} about "${topic}". The caption should be 100 words or less. Do not include explanations, options, or formatting—just the caption text. Add at least 5 related hashtags to make the caption trend.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const caption =
      response.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate caption.";

    setGeneratedCaption(caption);
  } catch (error) {
    console.error("Gemini API error:", error);
    toast.error("Failed to generate caption. Try again.");
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
    copied,
    setCopied,
    drawerOpen,
    setDrawerOpen,
    isExpanded,
    setIsExpanded
  };
};

export default useGeneratedCaption;