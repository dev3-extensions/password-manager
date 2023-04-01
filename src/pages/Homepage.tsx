import clsx from 'clsx'
import { List } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-chrome-extension-router'
import { PasswordGenerator } from '../backend/PasswordGenerator'
import CopyButton from '../components/CopyButton'
import GenerateButton from '../components/GenerateButton'
import PasswordField from '../components/PasswordField'
import PasswordOptions from '../components/PasswordOptions'
import DialogRadix from '../components/ui/Dialog'
import SavedPasswords from './SavedPasswords'

function Homepage() {
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
      <div className="text-neutral-950 min-h-[420px] w-[370px] bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-50">
        <div className="flex flex-col gap-4 p-4">
          <p className="my-1.5 text-3xl font-bold">Password Manager</p>
          <div className="flex gap-2">
            <GenerateButton handler={handlerGeneratePassword} />
            <CopyButton password={password} />
            <DialogRadix
              buttonText="Save"
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
          <div className="mt-2 flex items-center justify-center">
            <Link
              component={SavedPasswords}
              className={clsx(
                'flex w-fit items-center gap-2 rounded-lg border px-4 py-2 font-semibold shadow-md',
                'border-neutral-400/50 bg-neutral-600 bg-neutral-300/50 hover:bg-blue-500/25 dark:border-neutral-600/50 dark:bg-neutral-700/50',
                'outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
              )}
            >
              <List size={18} />
              Saved Passwords
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
