import React, { useState } from 'react'
import Logo from '../images/logo-2.png'
import Resume from '../images/Md-Arif-Web-Designer.pdf'
import { TfiAlignRight } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

function Header() {
  let [menu, setmenu] = useState(false);

  return (
    <div className='bg-[#163031] '>
      <div className='max-w-[100%] py-5 mx-auto relative z-[1] '>
        <div className='max-w-[1350px] mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 items-center justify-around relative px-[25px] '>
          <div>
            <h3 className='text-[32px] font-bold '><a href=""><img src={Logo} className="w-[75%]" /> </a></h3>
          </div>

          <div className={`bg-[#ffffff0f] col-span-2 py-4 rounded-4xl hidden lg:block`} >
            <ul className='flex items-center gap-3 justify-center '>
              <li className='text-[#ddd] text-[20px] font-[600]'><a href="" className='pr-5 '>Home</a></li>
              <li className='text-[#ddd] text-[20px] font-[600]'><a href="" className='pr-5'>About</a></li>
              <li className='text-[#ddd] text-[20px] font-[600]'><a href="" className='pr-5'>Service</a></li>
              <li className='text-[#ddd] text-[20px] font-[600]'><a href="" className='pr-5'>Blogs</a></li>
              <li className='text-[#ddd] text-[20px] font-[600]'><a href="" className='pr-5'>Contact Us</a></li>
            </ul>
          </div>

          <div className='btn md:block hidden group lg:text-end text-center'>
            <span><a download={Resume} href={Resume} className='bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] bg-[200%_auto] lg:text-[18px] text-[15px] font-[500] px-10 lg:py-4 py-3 text-[#163031] rounded-4xl inline-block hover:bg-red-400 '>Download CV</a></span>
          </div>

          <div onClick={() => setmenu(!menu)} className=' lg:hidden text-end w-[50px] h-[50px] bg-[#ffffff0f] ms-auto flex items-center justify-center cursor-pointer' >

            {menu

              ?
              <IoClose className='text-end  text-white text-[25px] ' />
              :

              <TfiAlignRight className='text-end  text-white text-[25px] ' />
            }


          </div>

          <div className={`bg-linear-[to_right,#6bfdd9_0%,#f0ff6c_50%,#6bfdd9_100%] bg-[200%_auto] top-[0px] left-[-42px] p-[55px_80px] z-[9999] h-screen transition-all fixed lg:hidden ${menu ? 'fixed' : 'hidden'}`}>
            <ul className='block items-center gap-3 justify-center '>
              <li className='text-[#163031] text-[20px] font-[600]'><a href="" className='pr-5 inline-block  py-[10px]'>Home</a></li>
              <li className='text-[#163031] text-[20px] font-[600]'><a href="" className='pr-5 inline-block  py-[10px]'>About</a></li>
              <li className='text-[#163031] text-[20px] font-[600]'><a href="" className='pr-5 inline-block py-[10px]'>Service</a></li>
              <li className='text-[#163031] text-[20px] font-[600]'><a href="" className='pr-5 inline-block  py-[10px]'>Blogs</a></li>
              <li className='text-[#163031] text-[20px] font-[600]'><a href="" className='pr-5 inline-block  py-[10px]'>Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
