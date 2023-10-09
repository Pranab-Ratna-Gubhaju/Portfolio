import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'
import ProfileCanvas from './canvas/ProfilePic'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[25px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-50 violet-gradient'/>
        </div>
        <div>
          <div className="flex justify-end">
          <ProfileCanvas/>
          </div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <div className='text-[#915eff]'>Pranab Ratna Gubhaju</div></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Computer Engineering Student</p>
        </div>
      </div>
        {/* <ComputersCanvas/> */}
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType:"loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero