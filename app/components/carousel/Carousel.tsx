'use client';
import React, { useState } from 'react';
import {
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import Image from 'next/image';
import { imageData } from './imageData';
import styles from './carousel.module.scss';

const Carousel = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTabClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const nextTab = () => {
    setValue((prevValue) =>
      prevValue === imageData.length - 1 ? 0 : prevValue + 1
    );
  };

  const prevTab = () => {
    setValue((prevValue) =>
      prevValue === 0 ? imageData.length - 1 : prevValue - 1
    );
  };

  return (
    <div className={styles.container}>

        <div className='flex justify-between w-full'>
        <Button className=' w-28 bg-[#6b3e2e] h-8' onClick={prevTab}>
            <FaArrowLeft className='text-white' />
          </Button>
        <Button className=' w-28 bg-[#6b3e2e] h-8' onClick={nextTab}>
          <FaArrowRight className='text-white' />
        </Button>
        </div>

      <div className={styles.testimonies}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons={false}
          aria-label='scrollable prevent tabs example'
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          {imageData.map(
            (
              { image, id, name },
            ) => (
              <Tab
                key={id}
                label={
                  <div
                    onClick={handleTabClick}

                  >
                    <div>
                      <Image
                        src={image}
                        alt='client'
                        height={20}
                        width={300}
                        className=''
                      />
                    </div>
                    <p className='mt-5 text-[#6b3e2e] font-semibold text-lg'>{name}</p>
                  </div>
                }
              />
            )
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Carousel;