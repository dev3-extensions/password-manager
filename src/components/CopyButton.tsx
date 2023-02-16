import { Check, Copy } from 'lucide-react'
import React from 'react'

type CopyButtonProps = {
  password: string
}

const CopyButton = ({ password }: CopyButtonProps) => {
  const [copyStatus, setCopyStatus] = React.useState(false)

  const copyPassword = () => {
    navigator.clipboard.writeText(password)

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
      {copyStatus ? <Check size={18} /> : <Copy size={18} />}
    </button>
  )
}

export default CopyButton
