'use client'

import { getPrimeMedian } from '@/app/actions'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

const findPrimeMedianNumbersFormSchema = z.object({
  numberInput: z.coerce.number().min(3),
})

type FindPrimeMedianNumbersFormSchema = z.infer<
  typeof findPrimeMedianNumbersFormSchema
>

export function FindPrimeMedianNumbersForm() {
  const { register } = useForm<FindPrimeMedianNumbersFormSchema>()

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      action={getPrimeMedian}
    >
      <Input
        type="number"
        placeholder="Enter a number"
        {...register('numberInput')}
      />
      <Button type="submit">Send</Button>
    </form>
  )
}
