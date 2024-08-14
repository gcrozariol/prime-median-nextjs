import { z } from 'zod'
import { zfd } from 'zod-form-data'

export const formSchema = zfd.formData({
  numberInput: zfd.text(z.number().min(3)),
})
