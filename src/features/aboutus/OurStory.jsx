import React from 'react'

export default function OurStory() {
    const className = "max-w-[1170px]   w-[90vw] py-4 m-auto";
  return (
    <section className={`${className}`}> 
           <div className="my-6">
      <div className="w-[14rem] h-[0.2rem] bg-brand m-auto"></div>
      <h3 className="text-brand font-headings font-semibold text-center">our story</h3>
      <div className="w-[14rem] h-[0.2rem] bg-brand m-auto"></div>
      </div>
        <h4 className='text-center text-black'> who we are</h4>

<div className='relative md:flex md:gap-x-4'>
<div className='' >
    <img src='/images/Group 26931.png' alt='img'/>
    <div className='bg-brand rounded-md absolute top-[35%] left-[45%] py-6 px-8 inline-block '>
       < p className='text-white'> TechEats was born out of the struggle faced by Tech Studio students who craved a convenient and reliable way to order their favorite meals. The existing issues included limited access to preferred food options and delay in delivery time by food vendors.

</p>
<p>To address these challenges, TechEats was created as a solution to connect Tech Studio students directly with food vendors who are part of the Tech Studio Community</p>
    </div>
</div>

<div className='flex gap-2 self-end mb-8' >
<div className='flex flex-col'>
    <span className='text-brand font-semibold font-headings text-2xl'> 1k</span>
    <span className='text-black font-semibold'>registered studennt</span>

</div>
<div className='flex flex-col'>
    <span className='text-brand font-semibold font-headings text-2xl'> 5k</span>
    <span className='text-black font-semibold'>meals deliverred</span>

</div>
<div className='flex flex-col'>
    <span className='text-brand font-semibold font-headings text-2xl'> 500+</span>
    <span className='text-black font-semibold'>registered vendors</span>

</div>

</div>
</div>
    </section>
  )
}
