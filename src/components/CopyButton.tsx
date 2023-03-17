import { Check, Copy } from 'lucide-react'
import React from 'react'
import { encrypt } from '../EncrypHandler'

/**
 * Type for the props of the CopyButton component
 */
<<<<<<< HEAD
type CopyButtonProps = {
  password: string
}

const CopyButton = ({ password }: CopyButtonProps) => {
=======
interface CopyButtonProps {
  password: string
}

function CopyButton({ password }: CopyButtonProps) {
>>>>>>> main
  const [copyStatus, setCopyStatus] = React.useState(false)

  /**
   *
   * Function to copy the password to the clipboard
   */
<<<<<<< HEAD
  const copyPassword = () => {
    navigator.clipboard.writeText(encrypt(password))
=======
  function copyPassword() {
    navigator.clipboard.writeText(password)
>>>>>>> main

    // Set the copy status to true and then set it to false after 1 second
    setCopyStatus(true)

    setTimeout(() => {
      setCopyStatus(false)
    }, 1000)
  }

  return (
    <button
<<<<<<< HEAD
      className="ml-auto rounded-lg border border-[#404040] bg-[#313131] px-3 py-2 shadow-lg hover:bg-[#254262]"
=======
      type="button"
      aria-label="Copy Password"
      className={clsx(
        'ml-auto rounded-lg border px-3 py-2 shadow-lg hover:bg-blue-500/25',
        'border-neutral-400/50 bg-neutral-300/50',
        'dark:border-neutral-600/50 dark:bg-neutral-700/50'
      )}
>>>>>>> main
      onClick={copyPassword}
    >
      {/* Conditionally render the copy or check icon */}
      {copyStatus ? <Check size={18} /> : <Copy size={18} />}
    </button>
  )
}

export default CopyButton
