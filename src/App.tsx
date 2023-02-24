import { useState } from 'react'
import CopyButton from './components/CopyButton'
import GenerateButton from './components/GenerateButton'
import PasswordField from './components/PasswordField'
import PasswordOptions from './components/PasswordOptions'
import SaveButton from './components/SaveButton'
import { PasswordGenerator } from './passwordGenerator'

function App() {
  // State to store the password generated
  const [password, setPassword] = useState('')
  // State to store password options
  const [strengthOption, setStrengthOption] = useState(2)
  const [numbersOption, setNumbersOption] = useState(true)
  const [symbolsOption, setSymbolsOption] = useState(true)

  /**
   * Password handler to generate the password
   */
  const handlerGeneratePassword = () => {
    let generator = new PasswordGenerator()
    setPassword(generator.generatePassword(strengthOption, numbersOption, symbolsOption))
  }

  return (
    <>
      <div className="min-h-[500px] w-[350px] bg-[#262626] text-white">
        <div className="m-4 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Password Manager</p>
          <div className="flex gap-2">
            <GenerateButton handler={handlerGeneratePassword} />
            <CopyButton password={password} />
            <SaveButton />
          </div>
          <PasswordField password={password} />
          <PasswordOptions
            strengthOption={strengthOption}
            setStrengthOption={setStrengthOption}
            numbersOption={numbersOption}
            setNumbersOption={setNumbersOption}
            symbolsOption={symbolsOption}
            setSymbolsOption={setSymbolsOption}
          />
        </div>
      </div>
    </>
  )
}

export default App
