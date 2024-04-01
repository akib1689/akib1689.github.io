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
const { NEXT_PUBLIC_FACEBOOK, NEXT_PUBLIC_LINKEDIN } = process.env;

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
        <CardTitle>Akibur Rahman</CardTitle>
        <CardDescription>Full Stack Developer</CardDescription>
      </CardHeader>
    </Card>
    );
}
