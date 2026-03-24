import React from 'react'
import banner from '../assets/banner.jpg'

const Banner = () => {
  return (
    <div
      className="h-[500px] flex items-center justify-center bg-center bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundAttachment: "fixed"
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-white flex flex-col items-center justify-center px-4 lg:px-0 text-center max-w-7xl mx-auto">
        <h2 className="lg:text-6xl text-4xl font-bold mb-6">
          Explore The World With Us!!!
        </h2>

        <p className="text-xl mb-8">
          Explore the World and Make Every Journey Unforgettable.
        </p>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Start Planning
        </button>
      </div>

    </div>
  )
}

export default Banner