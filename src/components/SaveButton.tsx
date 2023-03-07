import clsx from 'clsx'
import { Save } from 'lucide-react'

function SaveButton() {
  return (
    <button
      type="button"
      aria-label="Save Password"
      className={clsx(
        'rounded-lg border px-3 py-2 font-medium shadow-lg hover:bg-blue-500/25',
        'border-neutral-400/50 bg-neutral-300/50',
        'dark:border-neutral-600/50 dark:bg-neutral-700/50'
      )}
    >
      <Save size={18} />
    </button>
  )
}

export default SaveButton
