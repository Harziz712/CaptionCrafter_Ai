import CaptionForm from './CaptionForm';
import GeneratedCaption from './GeneratedCaption';
import useGeneratedCaption from '../hooks/useGenerateCaption';

const Captionarea = () => {
  const {
    topic,
    setTopic,
    tone,
    setTone,
    platform,
    setPlatform,
    generatedCaption,
    loading,
    handleGenerate,
  } = useGeneratedCaption();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] space-y-8 px-4 py-10 md:px-10 md:py-16 lg:px-20 lg:py-24 rounded-lg shadow-md">
        <CaptionForm
          topic={topic}
          setTopic={setTopic}
          tone={tone}
          setTone={setTone}
          platform={platform}
          setPlatform={setPlatform}
          onGenerate={handleGenerate}
          loading={loading}
        />

        <GeneratedCaption generatedCaption={generatedCaption} />
      </div>
    </div>
  );
};

export default Captionarea;
