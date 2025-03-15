import React from 'react'
import Logo from '../images/logo-2.png'

 function Footer() {
  return (
    <div className=' text-left md:px-[50px] px-[10px] pt-[70px] bg-gradient-to-b from-[#6bfdd9] to-transparent'>
       <div className='max-w-[1350px] bg-[#163031] z-[1] relative mx-auto  px-[20px] pt-[30px] rounded-t-3xl'>
         <div className='grid lg:grid-cols-3  grid-cols-1 pt-[45px] bg-[#163031] pb-[50px] rounded-t-3xl gap-6 px-[20px]'>

                <div>
                  <img src={Logo} className='w-[60%]' />
                  <p className='pt-[25px] text-white text-[18px]'>I am Md Arif, a dedicated UI Designer & Front-End Developer with a strong passion for crafting modern, responsive, and user-centric websites. With 4 years of experience. </p>
                </div> 

                <div>
                  <h3 className='text-white text-[25px] font-bold py-[10px]'>Quick Links</h3>
                  <ul>
                    <li className='pt-3'><a className='text-white text-[18px]' href="##">Home</a></li>
                    <li className='pt-3'><a className='text-white text-[18px]' href="##">About</a></li>
                    <li className='pt-3'><a className='text-white text-[18px]' href="##">Projects</a></li>
                    <li className='pt-3'><a className='text-white text-[18px]' href="##">Contact Us</a></li>
                  </ul>
                </div> 

                <div>
                <h3 className='text-white text-[25px] font-bold py-[10px]'>Contact Us</h3>

                <ul>
                    <li className='pt-3 text-white text-[20px] '><strong>Address :- </strong><a className='text-white text-[18px]' href="##">Saket Khanpur Delhi</a></li>

                    <li className='pt-3 text-white text-[20px] '><strong>Number:-</strong><a className='text-white text-[18px]' href="##">9504,4963,72</a></li>

                    <li className='pt-3 text-white text-[20px] '><strong>Email Id:-</strong><a className='text-white text-[18px]' href="##">md938511@gmail.com</a></li>
                  </ul>
                </div> 
          
         </div>
<hr className='text-white w-[75%] mx-auto'></hr>
         <div className='text-center py-[25px] bg-[#163031]'>
          <p className='text-white text-[18px]'>© 2025 Md Arif. All Rights Reserved.</p>
         </div>
       </div>
    </div>
  )
}

export default Footer;
