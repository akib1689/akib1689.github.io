// file to hold the left portion of the profile page

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function ProfileLeft() {
  return (
    // profile image
    <Avatar className='w-48 h-48'>
        <AvatarImage src="/images/profile_img.jpg" />
        <AvatarFallback>Akib</AvatarFallback>
    </Avatar>
    );
}
