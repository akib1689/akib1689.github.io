import React from 'react'

import Socials from '@/components/social'

import DownloadCv from './download-cv'

import { Button } from './ui/button'

import { ArrowTopRightIcon } from '@radix-ui/react-icons'

export function About() {
    return (
        <div className='flex flex-col gap-8 p-3 mt-5'>
            <div className='flex flex-col gap-2 text-3xl md:text-4xl font-semibold'>
                <p>Hello, This is <span className=" inline-block bg-gradient-to-r from-cyan-600 to-purple-200 text-transparent bg-clip-text">Akibur Rahman</span>, </p>
                <p className='text-2xl md:text-3xl'>and I&apos;m professional <span className="bg-gradient-to-r from-red-500 to-purple-400 text-transparent bg-clip-text">Software Engineer</span></p>
            </div>
            <Socials />
            <p className='text-lg md:text-xl font-semibold'>&gt; Who am I?</p>
            <p className='text-md md:text-lg'>
                I&apos;m a software engineer with strong interest in finding <span className="font-medium text-red-500">elegant solutions</span> to challenging issues. I like producing excellent software that goes above and beyond expectations. I have a solid background in <span className="font-medium text-red-500">Computer Science</span> and am dedicated to innovation. I&apos;m always learning and keeping up with the newest technological advancements, so I&apos;m prepared to lend my experience to initiatives that have a real-world impact. 
            </p>
            <div className='flex w-full justify-start items-center gap-5'>
                <DownloadCv />
                <Button variant='secondary' className='flex w-fit h-fit px-5 py-3 gap-4 items-center justify-center'>
                    <a href='/contact' className='text-lg'>Contact Me</a>
                    <ArrowTopRightIcon />
                </Button>
            </div>
        </div>
    )
}

