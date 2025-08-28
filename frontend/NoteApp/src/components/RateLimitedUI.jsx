import { ZapIcon } from 'lucide-react'
import React from 'react'

function RateLimitedUI() {
  return (
    <div className='mx-auto max-w-6xl px-4 py-8'>
        <div className='bg-primary/10 border border-primary/30 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row item-center p-6'>
                <div className='flex-shink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6'> 
                    <ZapIcon className='size-10 text-primary'></ZapIcon>
                </div>
                <div className='flex-1 text-center md:text-left'>
                    <h3 className='text-xl font-boldmb-2'>Rate Limit Reached</h3>
                    <p>You've made too many requests in a short period. Please wait a moment.</p>
                    <p className='text-sm text-base-content'>
                        Try again in a gew seconds for the best experience
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RateLimitedUI