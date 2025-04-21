import { Toaster } from 'sonner'
import Index from './pages'

const App = () => {
  console.log(import.meta.env.VITE_OPENAI_API_KEY);

  return (
  <div className="m-0 p-0 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
    <Index/>
    <Toaster position="bottom-center" /> 
  </div>
  
  )
}

export default App