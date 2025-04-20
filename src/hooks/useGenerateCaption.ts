import { useState } from "react";
import { toast } from "sonner";

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
      // Simulated API call – replace this with your real API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const platformTag = platform === 'instagram' ? '#InstaLife' : platform === 'linkedin' ? '#LinkedInTips' : '#SocialMedia';
      const caption = `Here's a ${tone.toLowerCase()} caption for ${platform}: "${topic}" ${platformTag} #AI #ContentCreator`;
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
    platform,
    setPlatform,
    generatedCaption,
    loading,
    handleGenerate,
  };
};

export default useGeneratedCaption;
