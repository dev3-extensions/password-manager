import clsx from 'clsx'
import { Check, Copy } from 'lucide-react'
import React from 'react'

/**
 * Type for the props of the CopyButton component
 */
interface CopyButtonProps {
  password: string
}

function CopyButton({ password }: CopyButtonProps) {
  const [copyStatus, setCopyStatus] = React.useState(false)

  /**
   * Function to copy the password to the clipboard
   */
  function copyPassword() {
    navigator.clipboard.writeText(password)
    // Set the copy status to true and then set it to false after 1 second
    setCopyStatus(true)

    setTimeout(() => {
      setCopyStatus(false)
    }, 1000)
  }

  return (
    <button
      type="button"
      aria-label="Copy Password"
      className={clsx(
        'ml-auto rounded-lg border px-3 py-2 shadow-md hover:bg-blue-500/25',
        'border-neutral-400/50 bg-neutral-300/50',
        'dark:border-neutral-600/50 dark:bg-neutral-700/50',
        'outline-none focus:ring-offset-2 focus:ring-offset-neutral-100 focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 dark:focus:ring-offset-neutral-900'
      )}
      onClick={copyPassword}
    >
      {/* Conditionally render the copy or check icon */}
      {copyStatus ? <Check size={18} /> : <Copy size={18} />}
    </button>
  )
}

export default CopyButton
