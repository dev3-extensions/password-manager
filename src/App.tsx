import { Check, Copy, RefreshCw, Save } from 'lucide-react'
import { useState } from 'react'
import { PasswordGenerator } from './passwordGenerator'

function App() {
  /**
   * State to store the password generated
   */
  const [password, setPassword] = useState('')
  const [copyStatus, setCopyStatus] = useState(false)

  /**
   * Password handler to generate the password
   */
  const handlerGenPassword = () => {
    let generator = new PasswordGenerator()
    setPassword(generator.generatePassword())
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
          <p className="text-2xl font-semibold">Password Manager</p>
          <div className="flex gap-2">
            <button
              onClick={handlerGenPassword}
              id="generate"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#404040] bg-[#0570eb] px-4 py-2 font-medium shadow-lg hover:bg-[#0465d3]"
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
            <button className="rounded-lg border border-[#404040] bg-[#313131] px-3 py-2 font-medium shadow-lg hover:bg-[#254262]">
              <Save size={18} />
            </button>
          </div>
          <input
            id="password"
            value={password}
            type="text"
            readOnly={true}
            className="w-full rounded-lg border border-[#404040] bg-[#262626] p-2.5 font-medium shadow-lg outline-none hover:ring-1 hover:ring-[#0465d3] focus:ring-2 focus:ring-[#0570eb]"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center">
              <p className="font-medium text-[#aaaaaa]">Characters</p>
              <input
                type="text"
                defaultValue={16}
                className="ml-auto w-12 rounded-lg border border-[#404040] bg-[#1b1b1b] py-1 px-2 text-center text-white"
              />
            </div>
            <hr className="h-px border-0 bg-[#3d3d3d]" />
            <div className="flex items-center justify-center">
              <p className="font-medium text-[#aaaaaa]">Numbers</p>
              <input
                type="checkbox"
                defaultChecked={true}
                className="ml-auto mr-4 h-4 w-4 rounded"
              />
            </div>
            <hr className="h-px border-0 bg-[#3d3d3d]" />
            <div className="flex items-center justify-center">
              <p className="font-medium text-[#aaaaaa]">Symbols</p>
              <input
                type="checkbox"
                defaultChecked={true}
                className="ml-auto mr-4 h-4 w-4 rounded"
              />
            </div>
          </div>
          <p className="text-2xl font-semibold">Saved Passwords</p>
        </div>
      </div>
    </>
  )
}

export default App
