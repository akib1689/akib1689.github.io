import React from 'react'

import { story, timeline } from '@/lib/education'
import { Stepper } from '@/components/ui/stepper'
// card component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { Badge } from '@/components/ui/badge'


const Education = () => {
  return (
    <div className='flex flex-col gap-8 p-5'>
      <p className='text-xl md:text-2xl font-semibold'>Summary</p>
      <p className=' text-lg md:text-xl'>
        {story.paragraph.map((p, i) => (
          p.linkAvilability ? (
            <span key={i}>
              <a href={p.link} className='text-blue-500 hover:underline'>{p.text}</a>
            </span>
          ) : (
            p.text
          )
        ))}
      </p>
      <p className='text-xl md:text-2xl font-semibold'>Details</p>
      <div className='flex flex-col gap-6 p-2'>
        {timeline.map((item, i) => (
          <div key={i} className='flex gap-2'>
            <Stepper variant={i === 0 ? 'starter' : i === timeline.length - 1 ? 'stopper' : 'default'} orientation='vertical' />
            <Card className='flex-grow'>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.subtitle} | {item.date} </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
              <CardFooter>
                <div className='flex gap-2 flex-wrap'>
                  {item.tags.map((tag, i) => (
                    <Badge key={i} variant='secondary'>{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
