// the page component for the experience page
import React from 'react'

// the experience data
import { experience } from '@/lib/experience'

// the button component
import { Button } from '@/components/ui/button'

// the right top arrow icon
import { ArrowTopRightIcon, PaperPlaneIcon } from '@radix-ui/react-icons'

// the card components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"



const Experience = () => {
  return (
    <div className='flex flex-col gap-6 h-fit'>
      <p className='text-xl md:text-2xl font-semibold'>&gt; My Experience</p>
      <div>
        {experience.map((exp, i) => (
          <Card key={i} className='group flex flex-col overflow-hidden m-2 p-2'>
            <CardHeader className='py-4'>
              <CardTitle>
                {exp.title},
                <Button variant='link' className='px-2'>
                  <a href={exp.company.url} target='_blank' rel='noreferrer' className=' text-base'>
                    {exp.company.name}
                  </a> 
                  <ArrowTopRightIcon />
                </Button>
              </CardTitle>
              <CardDescription className='text-base'>{exp.location} , {exp.job_type} </CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <p className='text-sm text-muted-foreground'>{exp.startDate} - {exp.endDate}</p>
              <ul className='space-y-2 px-6'>
                {exp.description.map((desc, i) => (
                  <li key={i} className='list-disc'>{desc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Experience
