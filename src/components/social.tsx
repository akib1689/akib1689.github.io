import React from 'react'


// env variables
const { 
    NEXT_PUBLIC_FACEBOOK, 
    NEXT_PUBLIC_LINKEDIN,
    NEXT_PUBLIC_GITHUB,
    NEXT_PUBLIC_YOUTUBE,
    NEXT_PUBLIC_TWITTER,
} = process.env;

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"


import { useTheme } from 'next-themes';

const Socials = () => {
    const { theme } = useTheme();
  return (
    <div className='flex flex-row space-x-3 w-fill'>
                <a href={NEXT_PUBLIC_GITHUB}>
                    <Avatar className='w-6 h-6'>
                        <AvatarImage src={theme != 'light' ? '/images/github-light.png' : '/images/github.png'} />
                        <AvatarFallback>.git</AvatarFallback>
                    </Avatar>
                </a>
                <a href={NEXT_PUBLIC_LINKEDIN}>
                    <Avatar className='w-6 h-6'>
                        <AvatarImage src='/images/linkedin.png' />
                        <AvatarFallback>ln</AvatarFallback>
                    </Avatar>
                </a>
                <a href={NEXT_PUBLIC_YOUTUBE}>
                    <Avatar className='w-9 h-6 rounded-none'>
                        <AvatarImage src='/images/youtube.png' />
                        <AvatarFallback>yt</AvatarFallback>
                    </Avatar>
                </a>
                <a href={NEXT_PUBLIC_TWITTER}>
                    <Avatar className='w-6 h-6 rounded-none'>
                        <AvatarImage src='/images/twitter.png' />
                        <AvatarFallback>tw</AvatarFallback>
                    </Avatar>
                </a>
                <a type='_blank' href={NEXT_PUBLIC_FACEBOOK}>
                    <Avatar className='w-6 h-6'>
                        <AvatarImage src="/images/facebook.png" />
                        <AvatarFallback>FB</AvatarFallback>
                    </Avatar>
                </a>
            </div> 
  )
}

export default Socials
