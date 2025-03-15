import React from 'react'
import { SkilList } from './SkilList';


 function Skills() {
  let Skilitme = SkilList.map((items,i)=>{
    return(
      <Skillset key={i} items={items} />
    );
  })


  return (
    <div className='bg-[#163031]'>
       <div className='z-[1] relative text-left md:px-[50px] px-[10px] pt-[40px] '>
    
            <div className='md:max-w-[750px] max-w-[1350px] me-auto  py-[50px] '>
               <h4 className='text-[17px] font-bold text-[#ddd] py-[15px]'>Skills</h4>
               <h2 className='md:text-[48px] text-[32px] font-bold md:leading-[50px] leading-[40px] bg-clip-text text-transparent bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] pb-6'>Bringing Creativity & Technology Together</h2>
            </div>


            <div className='max-w-[1350px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 pb-[25px]' >
                {Skilitme}
            </div>
       </div>
    </div>
  )
}


export default Skills;

function Skillset({items}){
  return(
          <div className='bg-[#ffffff0f] p-[20px] rounded-[20px] flex  items-center justify-left  border-[1px] border-solid border-white/5 hover:-translate-y-4 transition-all duration-[0.5s]'>
                <div className='bg-[#ffffff0f] rounded-[50%] p-[15px] border-[1px] border-solid border-white/5'><img src={items.imglogo} className='w-20' /> </div>

                 <div className='ms-[25px]'>
                  <h3 className='text-[#fff] font-bold text-[25px]'>{items.title}</h3>
                  <p className='text-[#fff] py-1 text-[17px]'>{items.des}</p>
                 </div>
              </div>
  );
}