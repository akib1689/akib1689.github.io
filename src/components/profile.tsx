// file to hold the left portion of the profile page

import * as React from 'react';


// profile avatar
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"

// card component
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { cn } from '@/lib/utils';

type CardProps = React.ComponentProps<typeof Card>;


// env variables
const { 
    NEXT_PUBLIC_FACEBOOK, 
    NEXT_PUBLIC_LINKEDIN,
    NEXT_PUBLIC_GITHUB,
    NEXT_PUBLIC_YOUTUBE,
    NEXT_PUBLIC_TWITTER,
} = process.env;

export function ProfileLeft() {
  return (
    <Card className="w-[350px]">
        <div className='flex justify-center pt-5 p-3'>
            <Avatar className='w-48 h-48'>
                <AvatarImage src="/images/profile_img.jpg" />
                <AvatarFallback>Akib</AvatarFallback>
            </Avatar>
        </div>
        <CardHeader>
        <CardTitle className='text-xl font-bold lg:text-2xl'>
            Akibur Rahman
        </CardTitle>
        <CardDescription className='text-md lg:text-lg'>
            Junior Software Engineer | <a href='https://www.linkedin.com/company/pridesys-it-ltd' target='_blank' className='text-blue-500'>Pridesys IT Ltd</a>
        </CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
      <CardFooter className='flex flex-col items-start space-y-3'>
        <p className='font-medium text-md lg:text-lg'>
            Socials
        </p>
        <div className='flex flex-row space-x-3 w-fill'>
            <a type='_blank' href={NEXT_PUBLIC_FACEBOOK}>
                <Avatar className='w-6 h-6'>
                    <AvatarImage src="/images/facebook.png" />
                    <AvatarFallback>FB</AvatarFallback>
                </Avatar>
            </a>
            <a href={NEXT_PUBLIC_LINKEDIN}>
                <Avatar className='w-6 h-6'>
                    <AvatarImage src='/images/linkedin.png' />
                    <AvatarFallback>ln</AvatarFallback>
                </Avatar>
            </a>
            <a href={NEXT_PUBLIC_GITHUB}>
                <Avatar className='w-6 h-6'>
                    <AvatarImage src='/images/github.png' />
                    <AvatarFallback>.git</AvatarFallback>
                </Avatar>
            </a>
            <a href={NEXT_PUBLIC_YOUTUBE}>
                <Avatar className='w-9 h-6'>
                    <AvatarImage src='/images/youtube.png' />
                    <AvatarFallback>yt</AvatarFallback>
                </Avatar>
            </a>
            <a href={NEXT_PUBLIC_TWITTER}>
                <Avatar className='w-6 h-6'>
                    <AvatarImage src='/images/twitter.png' />
                    <AvatarFallback>tw</AvatarFallback>
                </Avatar>
            </a>
        </div>        
      </CardFooter>
    </Card>
    );
}
