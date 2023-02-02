import { Copy, RefreshCw, Save } from 'lucide-react'

function App() {
  return (
    <>
      <div className="min-h-[500px] w-[350px] bg-[#262626] text-white">
        <div className="m-4 flex flex-col gap-4">
          <p className="text-2xl font-semibold">Password Manager</p>
          <div className="flex gap-2">
            <button className="flex items-center justify-center gap-2 rounded-lg border border-[#404040] bg-[#0570eb] px-4 py-2 font-medium shadow-lg hover:bg-[#0465d3]">
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
            // readOnly={true} // Make this readonly later
            className="w-full rounded-lg border border-[#404040] bg-[#262626] p-2.5 text-sm shadow-lg outline-none hover:ring-1 hover:ring-[#0465d3] focus:ring-2 focus:ring-[#0570eb]"
          />
        </div>
      </div>
    </>
  )
}

export default App
