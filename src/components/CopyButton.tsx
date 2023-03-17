import { Check, Copy } from 'lucide-react'
import React from 'react'
import { encrypt } from '../EncrypHandler'

/**
 * Type for the props of the CopyButton component
 */
type CopyButtonProps = {
  password: string
}

const CopyButton = ({ password }: CopyButtonProps) => {
  const [copyStatus, setCopyStatus] = React.useState(false)

  /**
   *
   * Function to copy the password to the clipboard
   */
  const copyPassword = () => {
    navigator.clipboard.writeText(encrypt(password))

    // Set the copy status to true and then set it to false after 1 second
    setCopyStatus(true)

    setTimeout(() => {
      setCopyStatus(false)
    }, 1000)
  }

  return (
    <button
      className="ml-auto rounded-lg border border-[#404040] bg-[#313131] px-3 py-2 shadow-lg hover:bg-[#254262]"
      onClick={copyPassword}
    >
      {/* Conditionally render the copy or check icon */}
      {copyStatus ? <Check size={18} /> : <Copy size={18} />}
    </button>
  )
}

export default CopyButton
