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
<<<<<<< HEAD
  const [strengthOption, setStrengthOption] = useState(2)
=======
  const [strengthOption, setStrengthOption] = useState(1)
>>>>>>> main
  const [numbersOption, setNumbersOption] = useState(true)
  const [symbolsOption, setSymbolsOption] = useState(true)

  /**
   * Password handler to generate the password
   */
<<<<<<< HEAD
  const handlerGeneratePassword = () => {
=======
  function handlerGeneratePassword(): void {
>>>>>>> main
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
<<<<<<< HEAD
            strengthOption={strengthOption}
            setStrengthOption={setStrengthOption}
            numbersOption={numbersOption}
            setNumbersOption={setNumbersOption}
            symbolsOption={symbolsOption}
=======
            setStrengthOption={setStrengthOption}
            setNumbersOption={setNumbersOption}
>>>>>>> main
            setSymbolsOption={setSymbolsOption}
          />
        </div>
      </div>
    </>
  )
}

export default App
