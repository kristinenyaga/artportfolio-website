import React from 'react'
import styles from './about.module.scss'
import { elephantImg1, giraffeImg1,lionImg,antelopeImg1 } from '@/public/constants/image';
import Image from 'next/image';
import { FaArrowDownLong } from "react-icons/fa6";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className='flex lg:flex-row flex-col gap-5 w-full justify-between'>
          <div className='xl:mt-20 mt-5'>
            <p className='font-medium flex gap-4 items-center text-[#13131235] mb-10'> <div className='w-20 h-1 bg-[#6b3e2e]'/>About</p>
            <h1 className='xl:text-[40px] text-[30px] text-center lg:text-left'>Kimani Kiarie <br/> <span className='text-[#6b3e2e]'>African Wildlife Sculptor</span> </h1>
            <div className='flex flex-col w-[90%] leading-8 gap-3 text-[15px] lg:text-[16px]'>
              <p className='mt-5 pb-2'>Kimani Kiarie is a self-taught African wildlife sculptor with a lifelong passion for preserving the beauty and heritage of Africa&apos;s wildlife through art.</p>
              <p className='pb-2'>Born in Central Kenya in 1953, Kimani’s journey from working with fossils at the National Museums of Kenya to becoming an acclaimed freelance sculptor is a story of dedication, creativity, and cultural preservation.</p>
              <p>Kimani’s fascination with sculpture began during his time at the National Museums of Kenya, where he worked for 14 years. Trained in cold cast techniques, Kimani honed his skills in making molds and replicas of fossils and artifacts unearthed from significant archeological sites across Kenya and Tanzania. His mastery in creating intricate details for museum exhibits laid the foundation for his future as a wildlife sculptor.</p>
              <div>
                <div className='flex items-center gap-5'>
                  <p className='text-[#6b3e2e]'>View more of his work</p>
                  <div className='border border-[#6b3e2e] h-10 w-10 p-3 rounded-full cursor-pointer'>
                    <FaArrowDownLong className='mb-3 pr-0.5 text-[#6b3e2e]' />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='flex justify-center gap-6 lg:mt-20'>
            <div className='flex flex-col gap-5'>
              <div className='w-40 h-60 border-black'>
                <Image src={elephantImg1} alt='elephant sculpture' className='rounded-sm' />

              </div>
              <div className='h-40 w-40'>
                <Image src={giraffeImg1} alt='giraffe sculpture' className='rounded-sm' />
              </div>
            </div>
            <div className='flex flex-col gap-5'>

              <div className='w-40 h-20'>
                <Image src={antelopeImg1} alt='antelope sculpture' className='rounded-sm' />
              </div>
              <div className='w-40 h-30 mt-48'>
                <Image src={lionImg} alt='lion sculpture' className='rounded-sm' />
              </div>

            </div>

          </div>
        </div>


      </div>
    </div>

    );
  }

export default About