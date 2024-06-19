"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@troper/ui/components/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@troper/ui/components/form'
import { Input } from '@troper/ui/components/input'
import { Button } from '@troper/ui/components/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useModal } from '@/components/modal-provider'

type Props = {
  title?: string
  subTitle?: string
}

/* model Project {
  id            String                @id @default(cuid())
  user          User               @relation(fields: [userId], references: [id])
  userId        String              @map("user_id")
  name          String
  description   String?
  apiKey        String             @unique @map("api_key")
  channels      Channel[]
  scanConfigs   ScanConfiguration[]
  scannedFiles  ScannedFile[]

  createdAt DateTime @default(now())

  @@map(name: "projects")
} */

const ProjectFormSchema = z.object({
  name: z.string({
    message: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(3),
  description: z.string().optional(),
})



const ProjectForm = ({ title, subTitle }: Props) => {
  const { setClose } = useModal()


  const form = useForm<z.infer<typeof ProjectFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const handleSubmit = async (values: z.infer<typeof ProjectFormSchema>) => {
    const workflow = await onCreateWorkflow(values.name, values.description)
    if (workflow) {
      toast.message(workflow.message)
      router.refresh()
    }
    setClose()
  }

  const isLoading = form.formState.isLoading
  const router = useRouter()
}

export default ProjectForm
