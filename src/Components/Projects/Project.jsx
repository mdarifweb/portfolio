import React from 'react'
import project1 from '../../images/projects/pro-1.png'
import { Projectitems } from './ProjectItems';
function Project() {
  return (
    <div className='bg-[#163031] py-10'>
      <div className='max-w-[1350px] z-[1] relative mx-auto grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8 items-center md:px-[0px] px-[10px]'>

        <div className='text-left'>
            <h3 className='text-[#ddd] text-[18px] lg:py-3 py-2'>My Projects</h3>
            <h2 className='md:text-[48px] text-[32px] font-bold md:leading-[50px] leading-[40px] bg-clip-text text-transparent bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] py-3'>Here are some of the projects I have worked on</h2>
           
        </div>

        <div className='text-left'>
          <p className='py-7 text-[20px] text-[#fff]'>I have worked on a diverse range of projects, designing and developing modern, responsive, and user-friendly websites for various industries. My goal is to create websites that not only look stunning but also provide seamless user experiences with optimized performance and functionality.</p>

          <div className='btn group lg:text-left text-left'>
            <span><a href="" className='bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] bg-[200%_auto] lg:text-[18px] text-[15px] font-[500] px-10 lg:py-4 py-3 text-[#163031] rounded-4xl inline-block hover:bg-red-400 '>view all portfolio</a></span>
           </div>
        </div>
       
      </div>


      <div className='max-w-[1350px] z-[1] relative mx-auto grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-2 items-center  md:px-[0px] px-[10px] md:pt-[80px] pt-[25px]'>
       
       {Projectitems.map((item,i)=>{
        return(
          <Projectitem key={i} item={item} />
        );
       })}
   


      </div>

    </div>
  )
}

export default Project;


function Projectitem({item}){
  return(
<div className=' group p-[10px]  rounded-[20px] text-center'>
            <div className='relative rounded-[20px] mt-[25px] mb-[10px] h-[450px] overflow-hidden'>
               <img src={item.img} className='w-[100%] h-[100%] object-cover object-top rounded-[20px]  group-hover:scale-[1.05] transition-all duration-[2.5s]  hover:object-bottom' />
            </div>
           <h3 className='font-[700] text-left py-[5px] text-[#fff] text-[25px]'>{item.title}</h3>
           <h4 className='font-[600] text-left text-[#fff] text-[18px]'>{item.des}</h4>

           <div className='btn mt-3 group lg:text-left text-left'>
            <span><a href={item.url} className='bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] bg-[200%_auto] lg:text-[16px] text-[15px] font-[500] px-10 lg:py-3 py-2 text-[#163031] rounded-4xl inline-block group-hover:bg-linear-[to_top,#6bfdd9_50%,#6bfdd9_100%,#f0ff6c_50%] '>{item.btn}</a></span>
           </div>
         </div>
  );
}