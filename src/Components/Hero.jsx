import React from 'react'
import heroimg from '../images/hero-img.png'
import aboutme from '../images/about-me1.png'
export default function Hero() {
  return (
    <div>
      <div className='bg-[#163031]'>
      
       <div className='z-[1] relative max-w-[1350px] mx-auto grid lg:grid-cols-2 grid-cols-1  pt-5 justify-center items-center'>
          <div className='lg:text-left lg:pt-[0] pt-[50px] text-center lg:order-1 order-2'>
            <h4 className='text[15px] text-[#ddd] font-bold '>Crafting Visually Stunning & User-Friendly Websites</h4>

            <h2 className='xl:text-[75px] md:text-[65px] text-[40px] py-3  font-[700] text-[#fff] xl:leading-[90px] md:leading-[80px] leading-[45px]'><span className='bg-clip-text text-transparent bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%]'>Md Arif</span> - UI Designer & Front-End Developer</h2>

            <p className='text-white md:text-[18px] text-[17px] md:leading-[32px] leading-[28px] md:px[0] px[10px]'>I am Md Arif, a passionate UI Designer & Front-End Developer with 4 years of experience in designing and developing modern, responsive, and SEO-friendly websites. I specialize in creating visually captivating user interfaces that enhance engagement and provide a seamless experience across all devices.</p>

            <div className='btn group lg:text-left mt-[25px] md:text-center'>
            <span><a href="" className='bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] bg-[200%_auto] lg:text-[18px] text-[15px] font-[500] px-10 lg:py-4 py-3 text-[#163031] rounded-4xl inline-block '>View My Work</a></span>
           </div>
          </div>

          <div className='text-right lg:order-2 order-1 relative lg:pt-[0] pt-[20px]'>
          <div className="absolute flex  top-[80%] left-0 bg-white text-[#000] items-center w-[250px] py-[3px] px-[20px] rounded-3xl animate-bounce">
                   <h2 className='md:text-[60px] text-[40px] font-bold text-[#163031]'>50+</h2>
                   <h3 className='text-[20px] text-center text-[#163031]'> Total Projects</h3>
               </div>

            <img className='lg:max-w-[75%] max-w-[100%] mx-auto'  src={aboutme} />
               
               <div className="absolute flex  top-[50%] right-0 bg-white text-[#000] items-center w-[250px] py-[2px] px-[20px] rounded-3xl animate-bounce">
                   <h2 className='md:text-[60px] text-[40px] font-bold text-[#163031]'>4+</h2>
                   <h3 className='text-[20px] text-center text-[#163031]'> Years Experience</h3>
               </div>
          </div>
      </div>
      </div>
    </div>
  )
}
