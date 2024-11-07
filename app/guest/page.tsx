import GuestHero from '@/components/guest/GuestHero'
import React from 'react'
import Features from '@/components/guest/Features'
import CTA from '@/components/guest/CTA'

const GuestPage = () => {
  return (
    <div className='min-h-[100vh]'>
        <div className='lg:max-w-[80%] md:max-w-[80%] max-w-[85%] mx-auto'>
            <GuestHero />
            <Features />
            <CTA />
        </div>
    </div>
  )
}   

export default GuestPage