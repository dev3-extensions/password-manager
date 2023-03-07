import { Save } from 'lucide-react'

function SaveButton() {
  return (
    <button
      type="button"
      aria-label="Save Password"
      className="rounded-lg border border-neutral-700 bg-neutral-700/50 px-3 py-2 font-medium shadow-lg hover:bg-blue-500/25"
    >
      <Save size={18} />
    </button>
  )
}

export default SaveButton
