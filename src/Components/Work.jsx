import React from 'react'
import { TfiBook,TfiBriefcase } from "react-icons/tfi";


 function Work() {

let education = [
  {
   id :'1',
   course : 'Bachelor of Computer Applications (BCA)',
   collage : 'MDU University, Haryana',
   date :'2017 - 2021'
  },

  {
    id :'2',
    course : 'Higher Secondary Certificate (12th)',
    collage : 'DBSD, Bihar ',
    date :'2015 - 2017'
   },

   {
    id :'3',
    course : 'Secondary School Certificate (10th)',
    collage : 'Durga High School, Bihar',
    date :'2014 - 2015'
   },
  
]

let work = [
  {
   id :'1',
   company : 'Vizent Solutions Pvt. Ltd ',
   des : 'Currently working as a Front-End Developer.',
   date :'Oct 2023 - Present'
  },

  {
    id :'2',
    company : ' E-Global Soft Solutions, Delhi',
    des : 'Designed 25+ websites tailored to client needs and led teams in multiple projects.',
    date :'Oct 2021 - Oct 2023'
   },

  
]

  return (
    <div className='relative z-40'> 
      <div className='max-w-[1350px] mx-auto text-center pt-[45px]'>
      <h4 className='text-white md:text-[20px] text-[18px]'>Education & work</h4>
      <h2 className='lg:text-[50px] md:text-[35px] text-[30px]  lg:leading-[55px] leading-[40px] font-bold text-white'>Foundation and growth: my <br /> <span className='bg-clip-text text-transparent bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%]'> education & work</span></h2>
      </div>

      <div className='max-w-[1350px] px-[15px] mx-auto grid lg:grid-cols-2 grid-cols-1 text-center pt-[45px] gap-6'> 
        <div className='bg-[#ffffff0f] rounded-[15px] lg:p-[40px] p-[10px] border-[1px] border-solid border-white/5'>
          <div className='flex items-center gap-3 pb-8'>
              <div className='w-[60px] flex items-center justify-center h-[60px] rounded-4xl bg-linear-[to_right,#6bfdd9_0%,#6bfdd9_20%,#f0ff6c_100%]'><TfiBook className='text-[24px] ' /></div>
              <h3 className='text-white text-[24px] font-bold '>Education</h3>
          </div>
          <hr className='text-[#7f7f7f]  w-[100%] mx-auto' />

          <div className='pt-8 text-left'>
                {education.map((value , i)=>{
                  return(
                    <div className='flex items-center justify-between md:flex-row flex-col pb-8' key={i}>
                    <div className='lg:w-[75%] w-[100%]'> 
                      <h3 className='lg:text-[22px] text-[21px] text-[#f8f8f8] font-semibold leading-[25px] py-2'>{value.course}</h3>
                      <h4 className='lg:text-[17px] text-[16px] text-[#f8f8f8]  lg:leading-[25px] leading-[20px] '>{value.collage} </h4>
                    </div>
                    <div className='bg-linear-[to_right,#6bfdd9_0%,#6bfdd9_20%,#f0ff6c_100%] mt-5 py-2 px-4 rounded-4xl lg:w-[25%] w-auto lg:m-auto me-auto '>
                      <h4 className='lg:text-[18px] text-[15px] font-semibold'>{value.date}</h4>  
                    </div>
                  </div>
                  );
                })}
              
          </div>
        </div>

        <div className='bg-[#ffffff0f] rounded-[15px] lg:p-[40px] border-[1px] p-[10px] border-solid border-white/5'>
          <div className='flex items-center gap-3 pb-8'>
              <div className='w-[60px] flex items-center justify-center h-[60px] rounded-4xl bg-linear-[to_right,#6bfdd9_0%,#6bfdd9_20%,#f0ff6c_100%]'><TfiBriefcase className='text-[24px] ' /></div>
              <h3 className='text-white text-[24px] font-bold '>Work Experience</h3>
          </div>
          <hr className='text-[#7f7f7f]  w-[100%] mx-auto' />

          <div className='pt-8 text-left'>
                {work.map((value , i)=>{
                  return(
                    <div className='flex items-center justify-between md:flex-row flex-col pb-8' key={i}>
                    <div className='lg:w-[65%] w-[100%]'> 
                      <h3 className='lg:text-[22px] text-[21px] text-[#f8f8f8] font-semibold leading-[25px] py-2'>{value.company}</h3>
                      <h4 className='lg:text-[17px] text-[16px] text-[#f8f8f8]  lg:leading-[25px] leading-[20px] '>{value.des} </h4>
                    </div>
                    <div className='bg-linear-[to_right,#6bfdd9_0%,#6bfdd9_20%,#f0ff6c_100%] mt-5 py-2 px-4 rounded-4xl lg:w-[35%] w-auto me-auto text-left'>
                      <h4 className='lg:text-[18px] text-[15px] font-semibold'>{value.date}</h4>  
                    </div>
                  </div>
                  );
                })}
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;
