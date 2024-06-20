import React from 'react'

export default function VisionandMission() {
    const className = "max-w-[1170px]   w-[90vw] py-8 m-auto";
  return (
    <section className='bg-black'>
        <article className={`${className} `}>
         <div className="w-[14rem] h-[0.2rem] bg-brand m-auto"></div>
      <h3 className="text-brand font-headings font-semibold text-center">vision and mission</h3>
      <div className="w-[14rem] h-[0.2rem] bg-brand m-auto"></div>
        <h4 className='text-center mt-4'> why we do what we do</h4>
        <div className='md:flex  gap-x-4 md:items-center mt-[6rem] md:justify-between'>
<div className='flex flex-col'>
        <div>
            <h3 className='text-brand font-headings'>vision statement</h3>
            <p className='font-body text-stone-300'> Empowering tech Studio students to satisfy their cravings and supporting the Tech Studio community, one delicious bite at a time.</p>
    
        </div>
        <div>
        <h3 className='text-brand font-headings'>mission statement</h3>
            <p className='font-body text-stone-300'> At TechEats, our mission is to revolutionize the way students experience meals at Tech Studio Academy. We aim to provide a platform for Tech Studio students to easily find and order meals from their favorite food vendors.</p>
        </div>
</div>
<div>
    <img src='/images/Group 26936.png' alt='img'/>
</div>
        </div>

        </article>

    </section>
  )
}
