"use client"
import React, { useState } from 'react'
import styles from './experiences.module.scss'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';

const Experiences = () => {
  // State for toggling the content visibility
  const [isVisible, setIsVisible] = useState({
    museum: false,
    freelance: false,
    film: false,
  });

  // Function to handle toggling for each section
  const toggleVisibility = (section) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className={styles.container}>

      <div className={styles.content_container}>
        {/* <div className='flex flex-col gap-5 w-[90vw]'>

          <div className='border-b border-[#6b3e2e] mt-10 py-4'>
            <div className='flex justify-between'>
              <p className='w-[25%]'>
                National Museums of Kenya
              </p>
              <p>(1971-1985)</p>
              <div
                className='border border-[#6b3e2e] h-10 w-10 p-3 rounded-full cursor-pointer'
                onClick={() => toggleVisibility('museum')}
              >
                {isVisible.museum ? (
                  <FaArrowUp className='text-[#6b3e2e]' />
                ) : (
                  <FaArrowDown className='text-[#6b3e2e]' />
                )}
              </div>
            </div>
            {isVisible.museum && (
              <p className='mt-5'>
                Kimani’s career began at the National Museums of Kenya, where he trained in cold cast techniques and worked closely with fossils and artifacts from major archaeological sites across East Africa. His four years of training prepared him for a 14-year tenure at the Museums, where he contributed to some of the country’s most iconic exhibits.
              </p>
            )}
          </div>

          <div className='border-b border-[#6b3e2e] mt-10 py-4'>
            <div className='flex justify-between'>
              <p className='w-[25%]'>Transition to Freelance Sculptor</p>
              <p>(1985 - Present)</p>
              <div
                className='border border-[#6b3e2e] h-10 w-10 p-3 rounded-full cursor-pointer'
                onClick={() => toggleVisibility('freelance')}
              >
                {isVisible.freelance ? (
                  <FaArrowUp className='text-[#6b3e2e]' />
                ) : (
                  <FaArrowDown className='text-[#6b3e2e]' />
                )}
              </div>
            </div>
            {isVisible.freelance && (
              <p className='mt-5'>
                In 1985, Kimani transitioned to freelance work, dedicating himself to African wildlife sculpture. His cold cast sculptures have since become a staple in galleries across Nairobi, capturing the beauty of Africa’s most iconic wildlife.
              </p>
            )}
          </div>

          <div className='border-b border-[#6b3e2e] mt-10 py-4'>
            <div className='flex justify-between'>
              <p className='w-[25%]'>Contributions to the Film Industry</p>
              <p>(1988 - Present)</p>
              <div
                className='border border-[#6b3e2e] h-10 w-10 p-3 rounded-full cursor-pointer'
                onClick={() => toggleVisibility('film')}
              >
                {isVisible.film ? (
                  <FaArrowUp className='text-[#6b3e2e]' />
                ) : (
                  <FaArrowDown className='text-[#6b3e2e]' />
                )}
              </div>
            </div>
            {isVisible.film && (
              <p className='mt-5'>
                Since 1988, Kimani has supplied custom sculptures and art props for various Kenyan film productions, showcasing his versatility and craftsmanship.
              </p>
            )}
          </div>

        </div> */}
        <div>
          <p className={styles.title}>Bring Africa’s <span className='text-[#6b3e2e]'>Wildlife</span>  to Life in Your Space</p>
          <p className={styles.desc}>Explore the breathtaking sculptures of Kimani Kiarie, a master of cold cast techniques. Each piece is a tribute to Africa's rich natural heritage, handcrafted to capture the spirit of its majestic wildlife</p>
        </div>
      </div>
    </div>
  )
}

export default Experiences;
