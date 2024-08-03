import React from 'react';

import { Socials } from '@/components/social'

// the card components
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from "@/components/ui/card"

import Logo from '../../public/logo';


const Footer = () => {
return (
    <footer className="p-6">
        <Card className="flex flex-col gap-4 rounded-none">
            <CardHeader className='flex flex-row items-center'>
                <Logo fill='#fff' className='h-5 w-auto'/>
                <CardTitle className='px-4 leading-6'>Beyond the Pixel,<br/> Beyond Expectations</CardTitle>
            </CardHeader>
            <CardContent>
                {/* <Socials /> */}
            </CardContent>
        </Card>
    </footer>
);
};

export default Footer;