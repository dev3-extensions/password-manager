import { ChevronDown, ChevronUp, Settings } from 'lucide-react'
import React, { useState } from 'react'
import Slider from './ui/Slider'
import Switch from './ui/Switch'

interface PasswordOptionsProps {
  setStrengthOption: React.Dispatch<React.SetStateAction<number>>
  setNumbersOption: React.Dispatch<React.SetStateAction<boolean>>
  setSymbolsOption: React.Dispatch<React.SetStateAction<boolean>>
}

function PasswordOptions({
  setStrengthOption,
  setNumbersOption,
  setSymbolsOption,
}: PasswordOptionsProps) {
  const [isOpen, setIsOpen] = useState(true)

  function toggleOptions() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="flex flex-col gap-3">
      <div onClick={toggleOptions} className="flex items-center gap-2 rounded">
        <Settings size={18} />
        <p className="text-lg font-semibold">Options</p>
        {isOpen ? (
          <ChevronUp size={18} className="ml-auto" />
        ) : (
          <ChevronDown size={18} className="ml-auto" />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-1 font-medium text-neutral-700 dark:text-neutral-300">
          <div className="flex items-center justify-between">
            <p>Strength</p>
            <div>
              <Slider setStrengthOption={setStrengthOption} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Numbers</p>
            <div>
              <Switch onCheckedChange={setNumbersOption} defaultChecked={true} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Symbols</p>
            <div>
              <Switch onCheckedChange={setSymbolsOption} defaultChecked={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PasswordOptions
