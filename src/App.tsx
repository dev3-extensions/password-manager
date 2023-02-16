import { Check, ChevronDown, Copy, RefreshCw, Save, Settings } from 'lucide-react'
import { useState } from 'react'
import CopyButton from './components/CopyButton'
import GenerateButton from './components/GenerateButton'
import PasswordDisplayInput from './components/PasswordDisplayInput'
import PasswordOptions from './components/PasswordOptions'
import SaveButton from './components/SaveButton'
import { PasswordGenerator } from './passwordGenerator'

function App() {
  /**
   * State to store the password generated
   */
  const [password, setPassword] = useState('')

  /**
   * Password handler to generate the password
   */
  const handlerGenPassword = () => {
    let generator = new PasswordGenerator()
    setPassword(generator.generatePassword())
  }

  return (
    <>
      <div className="min-h-[500px] w-[350px] bg-[#262626] text-white">
        <div className="m-4 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Password Manager</p>
          <div className="flex gap-2">
            <GenerateButton generatePassword={handlerGenPassword} />
            <CopyButton password={password} />
            <SaveButton />
          </div>
          <PasswordDisplayInput password={password} />
        </div>
      </div>
    </>
  )
}

export default App
