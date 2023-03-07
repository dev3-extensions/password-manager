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
   *
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
      className="ml-auto rounded-lg border border-neutral-700 bg-neutral-700/50 px-3 py-2 shadow-lg hover:bg-blue-500/25"
      onClick={copyPassword}
    >
      {/* Conditionally render the copy or check icon */}
      {copyStatus ? <Check size={18} /> : <Copy size={18} />}
    </button>
  )
}

export default CopyButton
