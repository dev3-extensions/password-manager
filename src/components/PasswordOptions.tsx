<<<<<<< HEAD
import { ChevronDown, Settings } from 'lucide-react'
import React, { useState } from 'react'

type PasswordOptionsProps = {
  strengthOption: number
  setStrengthOption: React.Dispatch<React.SetStateAction<number>>
  numbersOption: boolean
  setNumbersOption: React.Dispatch<React.SetStateAction<boolean>>
  symbolsOption: boolean
=======
import { ChevronDown, ChevronUp, Settings } from 'lucide-react'
import React, { useState } from 'react'
import Slider from './ui/Slider'
import Switch from './ui/Switch'

interface PasswordOptionsProps {
  setStrengthOption: React.Dispatch<React.SetStateAction<number>>
  setNumbersOption: React.Dispatch<React.SetStateAction<boolean>>
>>>>>>> main
  setSymbolsOption: React.Dispatch<React.SetStateAction<boolean>>
}

function PasswordOptions({
<<<<<<< HEAD
  strengthOption,
  numbersOption,
  symbolsOption,
=======
>>>>>>> main
  setStrengthOption,
  setNumbersOption,
  setSymbolsOption,
}: PasswordOptionsProps) {
  const [isOpen, setIsOpen] = useState(true)

<<<<<<< HEAD
  const toggleOptions = () => {
    setIsOpen(!isOpen)
=======
  function toggleOptions() {
    setIsOpen((prev) => !prev)
>>>>>>> main
  }

  return (
    <div className="flex flex-col gap-3">
<<<<<<< HEAD
      <div onClick={toggleOptions} className="flex items-center gap-1.5 rounded hover:bg-[#1d3a5a]">
        <Settings size={18} />
        <p className="text-lg font-semibold text-white">Options</p>
        <ChevronDown size={18} className="ml-auto" />
=======
      <div onClick={toggleOptions} className="flex items-center gap-2 rounded">
        <Settings size={18} />
        <p className="text-lg font-semibold">Options</p>
        {isOpen ? (
          <ChevronUp size={18} className="ml-auto" />
        ) : (
          <ChevronDown size={18} className="ml-auto" />
        )}
>>>>>>> main
      </div>
      {isOpen && (
        <>
          <div className="flex items-center justify-center">
<<<<<<< HEAD
            <p className="font-medium text-[#aaaaaa]">Strength</p>
            <input
              onChange={() => setStrengthOption(0)}
              type="radio"
              name="strength"
              className="ml-auto mr-2  h-4 w-4 rounded"
            />
            <input
              onChange={() => setStrengthOption(1)}
              type="radio"
              name="strength"
              className="mr-2 h-4 w-4 rounded"
            />
            <input
              onChange={() => setStrengthOption(2)}
              type="radio"
              name="strength"
              defaultChecked={true}
              className="mr-4 h-4 w-4 rounded"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#aaaaaa]">Numbers</p>
            <input
              onChange={() => setNumbersOption(!numbersOption)}
              type="checkbox"
              defaultChecked={true}
              className="ml-auto mr-4 h-4 w-4 rounded"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#aaaaaa]">Symbols</p>
            <input
              onChange={() => setSymbolsOption(!symbolsOption)}
              type="checkbox"
              defaultChecked={true}
              className="ml-auto mr-4 h-4 w-4 rounded"
            />
=======
            <p className="font-medium text-neutral-700 dark:text-neutral-300">Strength</p>
            <div className="ml-auto">
              <Slider setStrengthOption={setStrengthOption} />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-medium text-neutral-700 dark:text-neutral-300">Numbers</p>
            <div className="ml-auto">
              <Switch onCheckedChange={setNumbersOption} defaultChecked={true} />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-medium text-neutral-700 dark:text-neutral-300">Symbols</p>
            <div className="ml-auto">
              <Switch onCheckedChange={setSymbolsOption} defaultChecked={true} />
            </div>
>>>>>>> main
          </div>
        </>
      )}
    </div>
  )
}

export default PasswordOptions
