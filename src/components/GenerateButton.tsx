<<<<<<< HEAD
=======
import clsx from 'clsx'
>>>>>>> main
import { RefreshCw } from 'lucide-react'

/**
 * Type for the props of the GenerateButton component
 */
<<<<<<< HEAD
type GenerateButtonProps = {
=======
interface GenerateButtonProps {
>>>>>>> main
  handler: () => void
}

function GenerateButton({ handler }: GenerateButtonProps) {
  return (
    <button
<<<<<<< HEAD
      onClick={handler}
      id="generate"
      className="flex items-center justify-center gap-2 rounded-lg border border-[#404040] bg-[#0570eb] px-4 py-2 font-medium shadow-lg hover:bg-[#0465d3]"
=======
      type="button"
      aria-label="Generate Password"
      onClick={handler}
      id="generate"
      className={clsx(
        'flex items-center gap-2 rounded-lg border px-4 py-2 font-semibold text-white shadow-lg ',
        'bg-blue-600 hover:bg-blue-600/90 active:bg-blue-700',
        'border-neutral-300/50 dark:border-neutral-700'
      )}
>>>>>>> main
    >
      <RefreshCw size={18} />
      Generate
    </button>
  )
}

export default GenerateButton
