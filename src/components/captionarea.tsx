import CaptionForm from './CaptionForm'
import GeneratedCaption from './GeneratedCaption'
import ToneSelector from './ToneSelector'

const Captionarea = () => {
  return (
    <div className="h-full w-full">
        <CaptionForm/>
        <ToneSelector/>
        <GeneratedCaption/>
    </div>
  )
}

export default Captionarea