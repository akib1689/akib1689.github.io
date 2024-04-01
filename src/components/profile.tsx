// file to hold the left portion of the profile page

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function ProfileLeft() {
  return (
    <div className='flex flex-col justify-center p-3 space-y-4'>
        <div className='flex justify-center'>
            <Avatar className='w-48 h-48'>
                <AvatarImage src="/images/profile_img.jpg" />
                <AvatarFallback>Akib</AvatarFallback>
            </Avatar>
        </div>
        
        <div className='flex flex-col justify-center'>
            <h1 className='text-2xl font-bold lg:text-3xl'>Akibur Rahman</h1>
            <p>Jr. Software Engineer | <a href='https://pridesys.com'>Pridesys IT</a> </p>
        </div>

        <div className='flex flex-col justify-center space-y-2'>
            <p>📍 Dhaka, Bangladesh</p>
            <p>📧 <a href='mailto:cadetakib1689+profile@gmail.com'> cadetakib1689@gmail.com</a> </p>
            <p>📞</p>
            <p>🌐</p>
        </div>
    </div>
    );
}
