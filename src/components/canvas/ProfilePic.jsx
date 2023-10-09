import React from 'react';
import { fadeIn } from "../../utils/motion";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Pranab from "../../assets/me.jpg";

const ProfileCanvas = () => {
  return (
    <Tilt className="w-[12rem] h-[12rem]">
      <motion.div
        variants={fadeIn("right","spring",0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[50%] shadow-card'
        style={{ width: '12rem', height: '12rem' }} // Adjust the dimensions as needed
      >
        <img src={Pranab} alt="Pranab" className="w-full h-full object-cover rounded-[50%]" />
      </motion.div>
    </Tilt>
  );
};

export default ProfileCanvas;
