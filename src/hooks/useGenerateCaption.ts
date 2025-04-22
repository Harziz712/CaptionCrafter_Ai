import { useState } from "react";

export const useGeneratedCaption = () => {

  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [platform, setPlatform] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [loading, setLoading] = useState(false);

  return {
    topic,
    setTopic,
    tone,
    setTone,
    platform,
    setPlatform,
    generatedCaption,
    setGeneratedCaption,
    loading,
    setLoading,
  };
};

export default useGeneratedCaption;