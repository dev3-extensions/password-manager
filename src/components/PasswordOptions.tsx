import { ChevronDown, Settings } from 'lucide-react'
import React, { useState } from 'react'

function PasswordOptions() {
  const [isOpen, setIsOpen] = useState(true)
  const [strengthOption, setStrengthOption] = useState(2)
  const [numbersOption, setNumbersOption] = useState(false)
  const [symbolsOption, setSymbolsOption] = useState(false)

  const toggleOptions = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex flex-col gap-3">
      <div onClick={toggleOptions} className="flex items-center gap-1.5 rounded hover:bg-[#1d3a5a]">
        <Settings size={18} />
        <p className="text-lg font-semibold text-white">Options</p>
        <ChevronDown size={18} className="ml-auto" />
      </div>
      {isOpen && (
        <>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#aaaaaa]">Strength</p>
            <input
              onClick={() => setStrengthOption(0)}
              type="radio"
              name="strength"
              className="ml-auto mr-2  h-4 w-4 rounded"
            />
            <input
              onClick={() => setStrengthOption(1)}
              type="radio"
              name="strength"
              className="mr-2 h-4 w-4 rounded"
            />
            <input
              onClick={() => setStrengthOption(2)}
              type="radio"
              name="strength"
              defaultChecked={true}
              className="mr-4 h-4 w-4 rounded"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#aaaaaa]">Numbers</p>
            <input
              onClick={() => setNumbersOption(!numbersOption)}
              type="checkbox"
              defaultChecked={true}
              className="ml-auto mr-4 h-4 w-4 rounded"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#aaaaaa]">Symbols</p>
            <input
              onClick={() => setSymbolsOption(!symbolsOption)}
              type="checkbox"
              defaultChecked={true}
              className="ml-auto mr-4 h-4 w-4 rounded"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default PasswordOptions
