"use client";
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
    CardHeader,
    CardTitle
} from "@/components/ui/card"

// seperator
import {
    Separator
} from "@/components/ui/separator"

// badge
import {
    Badge
} from "@/components/ui/badge"

import { skills } from '@/lib/skills-list';

import Socials from '@/components/social';
import { Button } from './ui/button';


// import { cn } from '@/lib/utils';

// type CardProps = React.ComponentProps<typeof Card>;

export function ProfileLeft() {
    return (
        <Card className="left-0 top-0 w-full lg:w-[500px] h-fit max-h-max flex flex-col p-3 border-none">
            <div className='flex justify-center p-3'>
                <Avatar className='w-48 h-48 border'>
                    <AvatarImage src="/images/profile_img.jpg" />
                    <AvatarFallback>Akib</AvatarFallback>
                </Avatar>
            </div>
            <CardHeader>
                <CardTitle className='text-xl font-bold lg:text-2xl'>
                    Akibur Rahman
                </CardTitle>
                <CardDescription className='text-md lg:text-lg'>
                    Junior Software Engineer | <Button variant='link' className='text-md lg:text-lg px-0'> 
                            <a href='https://www.linkedin.com/company/pridesys-it-ltd' target='_blank'>Pridesys IT Ltd</a>
                        </Button>
                </CardDescription>
            </CardHeader>
        <Separator />
        <CardContent className='my-3'>
            <div className='space-y-3'>
                <div >
                    <p className='font-medium text-lg my-2'>
                        • Personal Details
                    </p>
                    <p className='text-sm lg:text-md ml-3 my-2'>
                        <span className='font-medium'>✉ Email:</span> 
                        <span className='ml-2'>
                            <Button variant='link' className='px-0'>
                                <a href='mailto:cadetakib1689+profile@gmail.com'> cadetakib1689@gmail.com</a>
                            </Button>
                        </span>
                        <br/>
                        <span className='font-medium'>📞 Phone:</span>
                        <span className='ml-2'>+880 1521 705298</span>
                        <br/>
                        <span className='font-medium'>🏠 Address:</span>
                        <span className='ml-2'>Dhaka, Bangladesh</span>
                        <br/>
                    </p>
                </div>
                <p className='font-bold text-lg my-2'>
                    Skills
                </p>
                {skills.map((skill, index) => (
                    <div key={index} className='flex flex-col'>
                        <p className='font-medium my-2'>
                            • {skill.name}
                        </p>
                        <div className='flex flex-wrap gap-1'>
                            {skill.skills.map((skill, index) => (
                                <Badge variant='secondary'key={index}>{skill}</Badge>
                            ))}
                        </div>
                    </div>
                )
                )}
            </div>
        </CardContent>
    </Card>
    );
}
