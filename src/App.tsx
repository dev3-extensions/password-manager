import { Check, Copy, RefreshCw, Save } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [copyStatus, setCopyStatus] = useState(false)

  const PASSWORD_LENGTH = {
    SMALL: 8,
    MEDIUM: 16,
    LONG: 25,
  }

  const generatePassword = () => {
    let password = ''
    const chars = '0123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < PASSWORD_LENGTH.MEDIUM; i++) {
      let randomChar = Math.random() * chars.length
      password += chars.substring(randomChar, randomChar + 1)
    }
    setPassword(password)
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password)

    setCopyStatus(true)

    setTimeout(() => {
      setCopyStatus(false)
    }, 1000)
  }

  return (
    <>
      <div className="min-h-[500px] w-[350px] bg-[#262626] text-white">
        <div className="m-4 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Password Manager</h1>
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center gap-2 rounded-lg border border-[#404040] bg-[#0570eb] px-4 py-2 font-medium shadow-lg hover:bg-[#0465d3]"
              onClick={generatePassword}
            >
              <RefreshCw size={18} />
              Generate
            </button>
            <button
              className="ml-auto rounded-lg border border-[#404040] bg-[#313131] px-3 py-2 shadow-lg hover:bg-[#254262]"
              onClick={copyPassword}
            >
              {copyStatus ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <button className="rounded-lg border border-[#404040] bg-[#313131] px-3 py-2 shadow-lg hover:bg-[#254262]">
              <Save size={18} />
            </button>
          </div>
          <input
            type="text"
            value={password}
            readOnly={true}
            className="text-md w-full rounded-lg border border-[#404040] bg-[#262626] p-2.5 font-mono font-medium shadow-lg outline-none hover:ring-1 hover:ring-[#0465D3] focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>
    </>
  )
}

export default App
