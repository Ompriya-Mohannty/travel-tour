import React from "react";
import Bali from "../assets/Bali.jpg";
import Venice from "../assets/Venice.jpg";
import Rome from "../assets/Rome.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import Paris from "../assets/Paris.jpg";
import Odisha from "../assets/Odisha.jpg";
import Goa from "../assets/Goa.jpg";
import Karnataka from "../assets/Karnataka.jpg";
import Maldives from "../assets/Maldives.jpg";
import Switzerland from "../assets/Switzerland.jpg";
import NewYork from "../assets/NewYork.jpg";
import Chicago from "../assets/Chicago.jpg";
import Dubai from "../assets/Dubai.jpg";
import Sydney from "../assets/Sydney.jpg";
import next from "../assets/next.png";
import back from "../assets/back.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star } from "lucide-react";
import "../Components/Css/reactSlick.css";

const SlickArrowLeft = (props) => <img src={back} alt="prevArrow" {...props} />;

const SlickArrowRight = (props) => (
  <img src={next} alt="nextArrow" {...props} />
);

const FeatureDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const destinationJson = [
    {
      name: "Bali",
      img: Bali,
      time: "5 Days - 4 Nights",
      star: "3 (12 reviews)",
      price: "69,999",
    },
    {
      name: "Venice",
      img: Venice,
      time: "5 Days - 4 Nights",
      star: "3 (15 reviews)",
      price: "73,999",
    },
    {
      name: "Rome",
      img: Rome,
      time: "5 Days - 4 Nights",
      star: "3 (18 reviews)",
      price: "79,999",
    },
    {
      name: "Tokyo",
      img: Tokyo,
      time: "5 Days - 4 Nights",
      star: "3 (19 reviews)",
      price: "89,999",
    },
    {
      name: "Paris",
      img: Paris,
      time: "5 Days - 4 Nights",
      star: "3 (17 reviews)",
      price: "73,999",
    },

    {
      name: "Odisha",
      img: Odisha,
      time: "5 Days - 4 Nights",
      star: "3 (20 reviews)",
      price: "79,999",
    },
    {
      name: "Goa",
      img: Goa,
      time: "5 Days - 4 Nights",
      star: "3 (16 reviews)",
      price: "73,999",
    },
    {
      name: "Karnataka",
      img: Karnataka,
      time: "5 Days - 4 Nights",
      star: "3 (19 reviews)",
      price: "79,999",
    },

    {
      name: "Maldives",
      img: Maldives,
      time: "5 Days - 4 Nights",
      star: "3 (25 reviews)",
      price: "89,999",
    },
    {
      name: "Switzerland",
      img: Switzerland,
      time: "5 Days - 4 Nights",
      star: "3 (26 reviews)",
      price: "89,999",
    },

    {
      name: "New York",
      img: NewYork,
      time: "5 Days - 4 Nights",
      star: "3 (24 reviews)",
      price: "95,999",
    },
    {
      name: "Chicago",
      img: Chicago,
      time: "5 Days - 4 Nights",
      star: "3 (18 reviews)",
      price: "92,999",
    },

    {
      name: "Dubai",
      img: Dubai,
      time: "5 Days - 4 Nights",
      star: "3 (28 reviews)",
      price: "99,999",
    },

    {
      name: "Sydney",
      img: Sydney,
      time: "5 Days - 4 Nights",
      star: "3 (17 reviews)",
      price: "99,999",
    },
  ];

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
            Featured Destinations
          </h2>
          <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />

          <div className="slider-container">
            <Slider {...settings}>
              {destinationJson.map((destination) => (
                <div key={destination.name}>
                  <div className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 mr-5">
                    <div>
                      <img
                        src={destination.img}
                        alt={destination.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 hover:scale-110 transition-all"
                      />
                      <div className="p-4">
                        <p className="text-gray-500 flex items-center gap-1 text-sm mb-1">
                          <Clock width={15} />
                          {destination.time}
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                          {destination.name}
                        </h3>
                        <p className="flex gap-1 items-center">
                          <Star width={20} fill="gold" />
                          {destination.star}
                        </p>
                        <p className="text-gray-600 mb-4 mt-2">
                          Experience the beauty and culture of{" "}
                          {destination.name}{" "}
                        </p>
                        <div className="flex gap-4">
                          <button className="px-3 py-2 bg-red-500 rounded-md text-white hover:bg-red-600">
                            ${destination.price}
                          </button>
                          <button className="px-3 py-2 bg-black rounded-md text-white">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureDestination;
