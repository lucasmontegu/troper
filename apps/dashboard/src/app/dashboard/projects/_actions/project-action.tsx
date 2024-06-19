'use server'

import { prisma } from '@/lib/db'
import { currentUser } from "@clerk/nextjs/server";

export const onCreateProject = async (name: string, description: string) => {
  const user = await currentUser()
  
  if (user) {
    //create new project
    const project = await prisma.project.create({
      data: {
        userId: user.id,
        name,
        description
      }
    })

    if (project) return { message: 'project created' }
    return { message: 'Oops! try again' }
  }
}