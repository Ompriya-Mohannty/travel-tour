import React from "react";
import TopBanner from "../Components/TopBanner";
import BannerTour from "../assets/BannerTour.jpg";
import Bali from "../assets/Bali.jpg";
import Venice from "../assets/venice.jpg";
import Rome from "../assets/rome.jpg";
import Tokyo from "../assets/tokyo.jpg";
import Paris from "../assets/paris.jpg";
import Odisha from "../assets/odisha.jpg";
import Goa from "../assets/goa.jpg";
import Karnataka from "../assets/karnataka.jpg";
import Maldives from "../assets/maldives.jpg";
import Switzerland from "../assets/switzerland.jpg";
import NewYork from "../assets/newyork.jpg";
import Chicago from "../assets/chicago.jpg";
import Dubai from "../assets/dubai.jpg";
import Sydney from "../assets/sydney.jpg";
import Jammukashmir from "../assets/Jammukashmir.jpg"
import Nepal from "../assets/Nepal.jpg"
import { Clock, Star } from "lucide-react";

const Tours = () => {
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
     {
      name: "Nepal",
      img: Nepal,
      time: "5 Days - 4 Nights",
      star: "3 (17 reviews)",
      price: "99,999",
    },
     {
      name: "Jammukashmir",
      img: Jammukashmir,
      time: "5 Days - 4 Nights",
      star: "3 (17 reviews)",
      price: "99,999",
    }
  ];
  return (
    <>
      <TopBanner text="Tours" img={BannerTour} />
      <div className="max-w-7xl md:mx-auto my-10">
        <h1 className="text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center">
          Top Destination
        </h1>
        <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {destinationJson.map((destination) => (
            <div key={destination.name}>
              <div className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 md:mr-5">
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
                      Experience the beauty and culture of {destination.name}
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
        </div>
      </div>
    </>
  );
};

export default Tours;
