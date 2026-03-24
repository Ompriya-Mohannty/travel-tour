import React from 'react'
import TopBanner from "../Components/TopBanner";
import GalleryBanner from "../assets/GalleryBanner.jpg";
import GalleryComp from "../Components/GalleryComp";


const Gallery = () => {
  return (
    <>
      <TopBanner text="Gallery" img={GalleryBanner} />
      <GalleryComp/>
    </>
  )
}

export default Gallery