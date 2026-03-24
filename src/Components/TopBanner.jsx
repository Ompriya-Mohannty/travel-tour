const TopBanner = ({ text, img }) => {
  return (
    <div
      className='h-[350px] md:h-[400px] relative -mt-12'
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='inset-0 bg-black absolute opacity-50'></div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-4xl md:text-5xl font-bold text-white font-serif'>
          {text}
        </h1>
      </div>
    </div>
  );
};
export default TopBanner;