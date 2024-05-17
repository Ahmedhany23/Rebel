import React from 'react'

export default function Content2() {
  return (
    <header className='bg-white '>
        <main className='px-3 py-24 lg:py-32 lg:px-0  lg:pl-[240px]  '>
            <div className="flex flex-col ">
                <div>
                <h1 className='text-black text-4xl font-medium mb-3'>Leave a Reply</h1>
                <p className='text-lg text-[#343434] font-light'>Your email address will not be published. Required fields are marked *</p>
                </div>
                <form action="" className='flex flex-col py-5'>
                <div className='flex flex-col gap-4'> 
                     <label htmlFor="comment" className='font-medium text-lg text-[#343434] ml-2'>Comment</label>
                    <textarea name="" id="" className=' lg:w-[815px] h-[100px] lg:h-[275px] border border-[#c4c4c4] rounded-md resize-none'></textarea>
                </div>
                <div className='flex flex-col gap-4 py-3'> 
                    <label htmlFor="name" className='font-medium text-lg text-[#343434] ml-2'>Name *</label>
                    <input type="text" name="" id="" className='lg:w-[815px] h-[54px] border border-[#c4c4c4] rounded-md'/>
                   </div>
                   <div className='flex flex-col gap-4 py-2'> 
                    <label htmlFor="email" className='font-medium text-lg text-[#343434] ml-2'>Email *</label>
                    <input type="email" name="" id="" className='lg:w-[815px] h-[54px] border border-[#c4c4c4] rounded-md'/>
                   </div>
                   <div className='flex flex-col gap-4 py-2'> 
                    <label htmlFor="name" className='font-medium text-lg text-[#343434] ml-2'>Website</label>
                    <input type="text" name="" id="" className='lg:w-[815px] h-[54px] border border-[#c4c4c4] rounded-md'/>
                   </div>
                      <div className='flex items-center py-4 gap-3 '>
                         <input type="checkbox" name="" id="" className='font-medium w-[22px] h-[22px] text-[#7D7D7D] rounded-md'/> 
                         <p className='font-medium text-lg text-[#343434]'>Save my name, email, and website in this browser for the next time I comment.</p>              
                      </div>  

                      <button type="submit" className='button mt-10 w-[253px] h-[70px] text-2xl'>Post Comment</button>
                </form>

            </div>
            <div></div>
        </main>
    </header>
  )
}
