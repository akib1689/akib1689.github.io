import * as React from 'react'
import { cva, type VariantProps } from "class-variance-authority"
import { Separator } from './separator'

import { cn } from "@/lib/utils"

export interface StepperProps
  extends React.HTMLAttributes<HTMLDivElement> {
        orientation?: 'horizontal' | 'vertical';
        variant: 'default' | 'starter' | 'stopper';
        className?: string;
    }

function Stepper({ orientation, className, variant, ...props }: StepperProps) {
    const isStarter = variant === 'starter';
    const isStopper = variant === 'stopper';
    const flex_direction = orientation === 'vertical' ? 'flex-col' : 'flex-row';
    return (
        <div className={cn('flex items-center justify-center', flex_direction, className)} {...props}> 
            <Separator orientation={orientation} className={
                cn('flex-1', {
                    'bg-transparent': isStarter,
                    'bg-foreground': !isStarter,
                })
            }/>
            <div className='flex items-center justify-center'>
                <div className='w-4 h-4 bg-foreground rounded-full'></div>
            </div>
            <Separator orientation={orientation} className={
                cn('flex-1', {
                    'bg-transparent': isStopper,
                    'bg-foreground': !isStopper,
                })
            }/>
        </div>
    )
}

export { Stepper }
