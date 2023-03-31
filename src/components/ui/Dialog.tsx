import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import SaveButton from '../SaveButton'

interface DialogProps {
  buttonText: string
  passwordName: string
  setPasswordName: React.Dispatch<React.SetStateAction<string>>
}

const Dialog = ({ passwordName, setPasswordName }: DialogProps) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger>
        <SaveButton />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-neutral-600/50" />
        <DialogPrimitive.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 w-[90vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-neutral-800 p-6 shadow-2xl focus:outline-none">
          <div className="flex flex-col gap-4">
            <DialogPrimitive.Title className="text-xl font-semibold">
              Save Password
            </DialogPrimitive.Title>
            <DialogPrimitive.Description>Enter password details</DialogPrimitive.Description>
            <fieldset className="flex items-center gap-5">
              <label className="w-1/4 text-right" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded bg-neutral-700 py-2 px-3 outline-none"
                id="name"
                type="text"
                readOnly={false}
                placeholder="Enter name of website"
                onChange={(e) => setPasswordName(e.target.value)}
              />
            </fieldset>
            <div className="flex justify-end">
              <DialogPrimitive.Close asChild>
                <button className="mt-2 inline-flex items-center justify-center rounded bg-blue-500 px-5 py-3 font-medium leading-none text-white hover:bg-blue-600 focus:shadow-blue-700 focus:outline-none focus:ring focus:ring-blue-600">
                  Save changes
                </button>
              </DialogPrimitive.Close>
            </div>
            <DialogPrimitive.Close asChild>
              <button
                className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-600"
                aria-label="Close"
              >
                <X />
              </button>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export default Dialog
