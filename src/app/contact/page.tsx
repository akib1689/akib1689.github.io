import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

// icon
import { PaperPlaneIcon } from '@radix-ui/react-icons'

// card component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

const Contact = () => {
  return (
    <div className='flex flex-col gap-8 p-5 w-full'>
      
      <Card>
        <CardHeader>
          <CardTitle className='text-lg md:text-xl'>
          &gt; Want to have a chat? 
          </CardTitle>
          <CardDescription className='px-4 py-2'>
            Send me an email. Knock me up in the available social media. Or you can submit via the form below.
          </CardDescription>
          <CardContent>
            <CardDescription className='w-full h-fit flex flex-col'>
              <div className='flex'>
                <div className='flex flex-col gap-2 p-2 w-full'>
                  <Label htmlFor='first_name' className='py-1 px-2'>
                    First Name
                  </Label>
                  <Input id='first_name' placeholder='Jane'/>
                </div>
                <div className='flex flex-col gap-2 p-2 w-full'>
                  <Label htmlFor='last_name' className='py-1 px-2'>
                    Last Name
                  </Label>
                  <Input id='last_name' placeholder='doe'/>
                </div>
              </div>
              <div className='flex flex-col gap-2 p-2 w-full'>
                  <Label htmlFor='last_name' className='py-1 px-2'>
                    Email Address
                  </Label>
                  <Input id='email' placeholder='janedoe@example.com'/>
              </div>
              <div className='flex flex-col gap-2 p-2 w-full'>
                  <Label htmlFor='message' className='py-1 px-2 h-fit'>
                    Message
                  </Label>
                  <Textarea id='message' className='h-64' placeholder='Your Message'/>
              </div>
            </CardDescription>
            <CardFooter className='flex justify-end py-5'>
              <Button className='px-6 gap-4 py-5 items-center'>
                Submit
                <div className='pb-1'>
                  <PaperPlaneIcon className='-rotate-45'/>
                </div>
              </Button>
            </CardFooter>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default Contact
