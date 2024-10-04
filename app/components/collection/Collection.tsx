import React from 'react'
import styles from './collection.module.scss'
import Carousel from '../carousel/Carousel'
const Collection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <p className={styles.title}>Collection</p>
        <p className={styles.description}>This is a demonstration of Kimani Kiarie’s extraordinary sculptures, where the beauty of African wildlife is captured in every detail. From majestic elephants to graceful gazelles, each piece is a celebration of nature, handcrafted using traditional cold cast techniques. Explore a collection that blends artistic mastery with the raw beauty of the African wildlife, perfect for collectors and nature enthusiasts alike.</p>
        <Carousel />

      </div>
    </div>
  )
}

export default Collection