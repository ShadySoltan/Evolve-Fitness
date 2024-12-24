import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>Welcome To</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Evolve <span className='text-blue-400'>Fitness</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I fully embrace the possibility of transforming into a <span className='text-blue-400 font-medium'>upowerhouse of strength and size</span> , recognizing the risks of
            becoming a walking colossus. I accept the challenge of pushing my limits, knowing it may lead to outgrowing
            my wardrobe, redefining door frames, and facing the mirror with awe and disbelief. <span className='text-blue-400 font-medium'>With unwavering determination</span>, I welcome the 
            journey to become a force to be reckoned with, accepting every hardship as part of the glory of ultimate transformation.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
