import { useState } from 'react'
import { Link } from 'react-chrome-extension-router'
import CopyButton from '../components/CopyButton'
import GenerateButton from '../components/GenerateButton'
import PasswordField from '../components/PasswordField'
import PasswordOptions from '../components/PasswordOptions'
import DialogRadix from '../components/ui/Dialog'
import { PasswordGenerator } from '../passwordGenerator'
import SavedPasswords from './SavedPasswords'

function App() {
  // State to store the password generated
  const [password, setPassword] = useState('')
  // State to store password options
  const [strengthOption, setStrengthOption] = useState(1)
  const [numbersOption, setNumbersOption] = useState(true)
  const [symbolsOption, setSymbolsOption] = useState(true)
  // Password state
  const [passwordInfo, setPasswordInfo] = useState({ name: '', password: '', url: '' })
  // Password name state
  const [passwordName, setPasswordName] = useState('')

  /**
   * Password handler to generate the password
   */
  function handlerGeneratePassword(): void {
    let generator = new PasswordGenerator()
    setPassword(generator.generatePassword(strengthOption, numbersOption, symbolsOption))
  }

  // setPasswordInfo({ name: 'ab', password: password, url: 'asda' })

  return (
    <>
      <div className="min-h-[500px] w-[370px] bg-neutral-100 dark:bg-neutral-900">
        <div className="flex flex-col gap-4 p-4">
          <p className="my-1.5 text-3xl font-bold">Password Manager</p>
          <div className="flex gap-2">
            <GenerateButton handler={handlerGeneratePassword} />
            <CopyButton password={password} />
            <DialogRadix
              buttonText="Save to Database"
              passwordName={passwordName}
              setPasswordName={setPasswordName}
            />
          </div>
          <PasswordField password={password} />
          <PasswordOptions
            setStrengthOption={setStrengthOption}
            setNumbersOption={setNumbersOption}
            setSymbolsOption={setSymbolsOption}
          />
          <Link component={SavedPasswords}>
            <button className="rounded bg-neutral-600 px-4 py-2 hover:bg-neutral-700">
              Saved Passwords
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default App
