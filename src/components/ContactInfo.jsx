import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { contactInfo } from '../constants'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { styles } from '../style'


const ContactInfo = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h1 className="flex flex-row justify-center">
        <p className={styles.sectionSubText}>Pranab Ratna Gubhaju</p>
        </h1>
        <br></br>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {contactInfo.map((contact)=>(
        <div className='w-15 h-15' key={contact.name}>
        <img
          src={contact.icon}
          alt={contact.name}
          onClick={()=>window.open(contact.link,"_blank")}
          className='w-10 h-10 object-cover rounded-2xl'
        />
          </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(ContactInfo,"")