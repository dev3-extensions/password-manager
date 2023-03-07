import { RefreshCw } from 'lucide-react'

/**
 * Type for the props of the GenerateButton component
 */
interface GenerateButtonProps {
  handler: () => void
}

function GenerateButton({ handler }: GenerateButtonProps) {
  return (
    <button
      type="button"
      aria-label="Generate Password"
      onClick={handler}
      id="generate"
      className="flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-blue-600 px-4 py-2 font-semibold shadow-lg hover:bg-blue-600/90"
    >
      <RefreshCw size={18} />
      Generate
    </button>
  )
}

export default GenerateButton
