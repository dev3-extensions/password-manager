import { Copy, RefreshCw, Save } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [password, setPassword] = useState('')

  const PASSWORD_LENGTH = {
    SMALL: 8,
    MEDIUM: 16,
    LONG: 30,
  }

  const generatePassword = () => {
    let password = ''
    const chars = '0123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < PASSWORD_LENGTH.LONG; i++) {
      let randomChar = Math.random() * chars.length
      password += chars.substring(randomChar, randomChar + 1)
    }
    setPassword(password)
  }

  return (
    <>
      <div className="min-h-[500px] w-[350px] bg-[#262626] text-white">
        <div className="m-4 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Password Manager</p>
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center gap-2 rounded-lg border border-[#404040] bg-[#0570eb] px-4 py-2 font-medium shadow-lg hover:bg-[#0465d3]"
              onClick={generatePassword}
            >
              <RefreshCw size={18} />
              Generate
            </button>
            <button className="ml-auto rounded-lg border border-[#404040] bg-[#313131] px-3 py-2 font-medium shadow-lg hover:bg-[#254262]">
              <Copy size={18} />
            </button>
            <button className="rounded-lg border border-[#404040] bg-[#313131] px-3 py-2 font-medium shadow-lg hover:bg-[#254262]">
              <Save size={18} />
            </button>
          </div>
          <input
            type="text"
            value={password}
            readOnly={true}
            className="text-md w-full rounded-lg border border-[#404040] bg-[#262626] p-2.5 font-medium shadow-lg outline-none hover:ring-1 hover:ring-[#0465d3] focus:ring-2 focus:ring-[#0570eb]"
          />
        </div>
      </div>
    </>
  )
}

export default App
