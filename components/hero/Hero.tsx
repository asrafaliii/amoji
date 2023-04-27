import React from 'react'
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className="bg-[url('../public/assets/bg.png')] bg-cover mt-[3.5rem]">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-center p-[5rem_2rem]">
          <div className="text-[28px] font-bold lg:text-[32px] text-[#050505]">
            Amoji
          </div>
          <div className="text-[#050505]">
            A fun and interactive emoji collection website for sharing and
            copying your favorite emojis.
          </div>
          <div className="flex gap-[1.2rem] mt-[1rem]">
            <a
              target="_blank"
              href="#"
              className="footer_link"
              rel="noreferrer"
            >
              <BsFacebook className="text-[#4267B2]" size={24} />
            </a>
            <a
              target="_blank"
              href="#"
              className="footer_link"
              rel="noreferrer"
            >
              <BsInstagram size={24} className="text-[#E1306C] " />
            </a>
            <a
              target="_blank"
              href="#"
              className="footer_link"
              rel="noreferrer"
            >
              <BsGithub size={24} className="text-[#6E5494] " />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
