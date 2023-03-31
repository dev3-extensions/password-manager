import { ArrowLeft, ChevronLeft } from 'lucide-react'
import { Link } from 'react-chrome-extension-router'
import App from './App'

const SavedPasswords = () => {
  return (
    <div className="min-h-[500px] w-[370px] bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col gap-4 p-4">
        <p className="my-1.5 text-3xl font-bold">Saved Passwords</p>
        <div className="flex flex-col gap-2">
          <Link component={App}>
            <button className="flex rounded bg-neutral-700 px-4 py-2 hover:bg-neutral-800">
              <ArrowLeft />
              <p className="pl-2">Go back</p>
            </button>
          </Link>
          <div className="flex items-center justify-between">
            <h1>Facebook</h1>
            <button className="rounded-lg bg-neutral-600 px-4 py-1 text-xs">View Details</button>
          </div>
          <div className="flex items-center justify-between">
            <h1>Google</h1>
            <button className="rounded-lg bg-neutral-600 px-4 py-1 text-xs">View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedPasswords
