import * as SliderPrimitive from '@radix-ui/react-slider'
import { clsx } from 'clsx'

interface SliderProps {
  setStrengthOption: React.Dispatch<React.SetStateAction<number>>
}

function Slider({ setStrengthOption }: SliderProps) {
  return (
    <SliderPrimitive.Root
      defaultValue={[50]}
      max={100}
      step={50}
      aria-label="value"
      onValueChange={(value: number[]) => {
        setStrengthOption(value[0] / 50) // Set the strength option to 0, 1 or 2
      }}
      className="relative flex h-5 w-36 touch-none items-center"
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-white dark:bg-neutral-700 hover:dark:bg-neutral-600">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-blue-500" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={clsx(
          'block h-5 w-5 rounded-full bg-neutral-600 dark:bg-white',
          'focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75'
        )}
      />
    </SliderPrimitive.Root>
  )
}

export default Slider
