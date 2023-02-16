import { RefreshCw } from 'lucide-react'
import React, { useState } from 'react'
import { PasswordGenerator } from '../passwordGenerator'

function GenerateButton({ generatePassword }: { generatePassword: () => void }) {
  return (
    <button
      onClick={generatePassword}
      id="generate"
      className="flex items-center justify-center gap-2 rounded-lg border border-[#404040] bg-[#0570eb] px-4 py-2 font-medium shadow-lg hover:bg-[#0465d3]"
    >
      <RefreshCw size={18} />
      Generate
    </button>
  )
}

export default GenerateButton
