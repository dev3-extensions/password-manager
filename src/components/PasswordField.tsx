import clsx from 'clsx'

/**
 * Type for the props of the PasswordDisplay component
 */
interface PasswordFieldProps {
  password: string
}

function PasswordField({ password }: PasswordFieldProps) {
  return (
    <input
      id="password"
      value={password}
      type="text"
      readOnly={true}
      className={clsx(
        'w-full rounded-lg border border-neutral-400/50 bg-neutral-400/10 p-2.5 font-mono font-medium shadow-lg outline-none',
        'dark:border-neutral-700 dark:bg-neutral-700/10',
        'hover:ring-1 hover:ring-blue-600/50 focus:ring-2 focus:ring-blue-600'
      )}
    />
  )
}

export default PasswordField
