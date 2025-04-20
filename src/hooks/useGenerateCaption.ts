import { useState } from "react";
import { toast } from "sonner";

export const useGeneratedCaption = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic || !tone) {
      toast.error("Please fill in both topic and tone");
      return;
    }

    setLoading(true);

    try {
      // Simulated API call – replace this with your real API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const caption = `Here's a ${tone.toLowerCase()} caption for: "${topic}" #AI #ContentCreator`;
      setGeneratedCaption(caption);
    } catch (error) {
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
    generatedCaption,
    loading,
    handleGenerate,
  };
};

export default useGeneratedCaption;