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
  const [strengthOption, setStrengthOption] = useState(1)
  const [numbersOption, setNumbersOption] = useState(true)
  const [symbolsOption, setSymbolsOption] = useState(true)

  /**
   * Password handler to generate the password
   */
  function handlerGeneratePassword(): void {
    let generator = new PasswordGenerator()
    setPassword(generator.generatePassword(strengthOption, numbersOption, symbolsOption))
  }

  return (
    <>
      <div className="min-h-[500px] w-[370px] bg-neutral-100 dark:bg-neutral-900">
        <div className="flex flex-col gap-4 p-4">
          <p className="my-1.5 text-3xl font-bold">Password Manager</p>
          <div className="flex gap-2">
            <GenerateButton handler={handlerGeneratePassword} />
            <CopyButton password={password} />
            <SaveButton />
          </div>
          <PasswordField password={password} />
          <PasswordOptions
            setStrengthOption={setStrengthOption}
            setNumbersOption={setNumbersOption}
            setSymbolsOption={setSymbolsOption}
          />
        </div>
      </div>
    </>
  )
}

export default App
