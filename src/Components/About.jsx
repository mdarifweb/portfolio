import React from 'react'
 import abimg from '../images/about-me2.png'

 function About() {
  return (
    <div className='bg-[#163031] text-left md:px-[50px] px-[10px] pt-[70px] '>
       <div className='max-w-[1350px] z-[1] relative mx-auto bg-gradient-to-b from-[#6bfdd9] to-transparent lg:px-[20px] px-[10px] lg:pt-[30px] pt-[20px] rounded-t-3xl'>
         <div className='grid lg:grid-cols-3 grid-cols-1 pt-[45px] bg-[#163031] rounded-t-3xl lg:pe-[35px]'>

           <div className=''><img src={abimg} className='lg:max-w-[100%] max-w-[100%] mx-auto'/></div>

           <div className=' lg:col-span-2 col-span-1 lg:py-[5px] pt-[50px] lg:px-[3px] px-[15px]'>
            <h3 className='text-white lg:text-[18px] text-[17px]' >About Me</h3>
            <h2 className='md:text-[48px] text-[32px] font-bold md:leading-[55px] leading-[40px] bg-clip-text text-transparent bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] py-3'>Passionate UI Designer & Front-End Developer with 4+ years of experience</h2>
            <p className='text-white lg:text-[19px] text-[17px] lg:leading-[32px] leading-[25px] pt-[10px]'>I am Md Arif, a passionate UI Designer & Front-End Developer with 4 years of experience in website design and development. I specialize in creating visually appealing, user-friendly, and responsive websites that provide seamless user experiences. My goal is to craft websites that are not only aesthetically pleasing but also functional, fast, and optimized for search engines.</p>

            <ul className='lg:pt-1 pt-5'>
              <li className='text-white lg:text-[19px] text-[17px] lg:leading-[32px] leading-[25px] pt-[10px] list-disc mt-[5px] ms-10'>Expertise in HTML5, CSS3, JavaScript (ES6), React.js, Tailwind CSS, Bootstrap 5.3, and jQuery</li>

              <li className='text-white lg:text-[20px] text-[17px] lg:leading-[32px] leading-[25px] pt-[10px] list-disc mt-[5px] ms-10'>Deep understanding of color theory, responsive design, and cross-browser compatibility</li>

              <li className='text-white lg:text-[20px] text-[17px] lg:leading-[32px] leading-[25px] pt-[10px] list-disc mt-[5px] ms-10'> Experience in creating SEO-friendly, high-speed, and user-centric web interfaces</li>


              <li className='text-white lg:text-[20px] text-[17px] lg:leading-[32px] leading-[25px] pt-[10px] list-disc mt-[5px] ms-10'>Strong project management skills, delivering quality designs within deadlines</li>

             
            </ul>
           </div>
         </div>
       </div>
    </div>
  )
}

export default About;