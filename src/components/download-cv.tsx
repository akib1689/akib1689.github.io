import React from 'react'

import { Button } from '@/components/ui/button'
import { DownloadIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

type DownloadCvProps =  {
    className?: string;
}

const DownloadCv = (props: DownloadCvProps) => {
  return (
    <Button variant='default' className={cn('flex w-fit h-fit px-5 py-3 gap-4 items-center justify-center', props.className)}>
        <DownloadIcon className='w-6 h-6' />
        <a href='/Akibur_Rahman_Resume.pdf' download>
            Download CV
        </a>
    </Button>
  )
}

export default DownloadCv
