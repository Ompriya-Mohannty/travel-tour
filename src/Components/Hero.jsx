import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/Hero1.jpg";
import banner2 from "../assets/Hero3.jpg";
import banner3 from "../assets/Hero4.jpg";
import { Search } from "lucide-react";

const Hero = () => {
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");

  const countries = [
    "India",
    "Japan",
    "France",
    "Italy",
    "United States",
    "Maldives",
    "United Arab Emirates",
    "Australia",
    "Indonesia",
    "Switzerland",
  ];

  //STATES
  const states = {
    India: [
      "Odisha",
      "Rajasthan",
      "Goa",
      "Kerala",
      "Maharashtra",
      "Punjab",
      "Uttarakhand",
      "Himachal Pradesh",
      "Tamil Nadu",
      "Karnataka",
    ],
    Japan: [
      "Tokyo",
      "Osaka",
      "Kyoto",
      "Hokkaido",
      "Okinawa",
      "Hiroshima",
      "Nara",
      "Sapporo",
    ],
    France: ["Paris", "Nice", "Lyon", "Normandy"],
    Italy: ["Rome", "Venice", "Florence", "Milan", "Tuscany"],
    "United States": [
      "New York",
      "Los Angeles",
      "Chicago",
      "California",
      "Washington D.C.",
      "Hawaii",
    ],
    Maldives: ["Male", "Addu City", "Ari Atoll"],
    "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
    Australia: ["Sydney", "Victoria", "Western Australia"],
    Indonesia: ["Bali", "Jakarta", "YogyaKarta", "West Java"],
    Switzerland: ["Zurich", "Geneva", "Lucerne", "Bern"],
  };

  //CITIES
  const cities = {
    India: {
      Odisha: ["Bhubaneswar", "Puri", "Cuttack", "Rourkela"],
      Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      Goa: ["Panaji", "Baga", "Calangute", "Margao"],
      Kerala: ["Kochi", "Munnar", "Alleppey", "Trivandrum"],
      Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
      Punjab: ["Amritsar", "Ludhiana", "Jalandhar"],
      Uttarakhand: ["Dehradun", "Rishikesh", "Nainital", "Haridwar"],
      "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala"],
      "Tamil Nadu": ["Chennai", "Madurai", "Coimbatore"],
      Karnataka: ["Bangalore", "Mysore", "Mangalore"],
    },

    Japan: {
      Tokyo: ["Shinjuku", "Shibuya", "Akihabara"],
      Osaka: ["Namba", "Umeda", "Shinsekai"],
      Kyoto: ["Gion", "Arashiyama", "Fushimi"],
      Hokkaido: ["Sapporo", "Otaru"],
      Okinawa: ["Naha", "Itoman"],
      Hiroshima: ["Hiroshima City", "Onomichi"],
      Nara: ["Nara City"],
      Sapporo: ["Susukino", "Teine"],
    },

    France: {
      Paris: ["Eiffel Area", "Montmartre", "Louvre"],
      Nice: ["Old Town", "Promenade des Anglais"],
      Lyon: ["Vieux Lyon", "La Croix-Rousse"],
      Normandy: ["Rouen", "Caen"],
    },

    Italy: {
      Rome: ["Vatican Area", "Trastevere"],
      Venice: ["Murano", "Burano"],
      Florence: ["Duomo Area", "Oltrarno"],
      Milan: ["Brera", "Navigli"],
      Tuscany: ["Pisa", "Siena"],
    },

    "United States": {
      "New York": ["Manhattan", "Brooklyn", "Queens"],
      "Los Angeles": ["Hollywood", "Beverly Hills"],
      Chicago: ["Downtown", "Hyde Park"],
      California: ["San Francisco", "San Diego"],
      "Washington D.C.": ["Capitol Hill", "Georgetown"],
      Hawaii: ["Honolulu", "Hilo"],
    },

    Maldives: {
      Male: ["Malé City", "Hulhumalé"],
      "Addu City": ["Hithadhoo"],
      "Ari Atoll": ["Maafushivaru"],
    },

    "United Arab Emirates": {
      Dubai: ["Downtown Dubai", "Dubai Marina"],
      "Abu Dhabi": ["Yas Island", "Saadiyat Island"],
      Sharjah: ["Al Majaz"],
      Ajman: ["Ajman City"],
    },

    Australia: {
      Sydney: ["Bondi", "Parramatta"],
      Victoria: ["Melbourne", "Geelong"],
      "Western Australia": ["Perth", "Fremantle"],
    },
    Indonesia: {
      Bali: ["Ubud", "Kuta", "Seminyak"],
      Jakarta: ["Central Jakarta", "South Jakarta"],
      Yogyakarta: ["Malioboro", "Sleman"],
      "West Java": ["Bandung", "Bogor"],
    },
    Switzerland: {
      Zurich: ["Altstadt", "Seefeld"],
      Geneva: ["Old Town", "Carouge"],
      Lucerne: ["Old Town", "Kriens"],
      Bern: ["Old City", "Breitenrain"],
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const SearchBar = () => (
    <div className="bg-white border border-gray-300 shadow-lg rounded-md z-10 max-w-6xl mx-auto mt-10 p-4">
      <div className="grid gap-5 grid-cols-7">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Country</label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setState("");
              setCity("");
            }}
            className="border border-gray-300 rounded-sm p-1"
          >
            <option>Select Country</option>
            {countries.map((c, index) => (
              <option key={index}>{c}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex font-semibold gap-1 items-center">
            <Search className="w-4 h-4" /> State
          </label>

          <select
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setCity("");
            }}
            className="border border-gray-300 rounded-sm p-1"
          >
            <option>Select State</option>
            {country &&
              states[country]?.map((s, index) => (
                <option key={index}>{s}</option>
              ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border border-gray-300 rounded-sm p-1"
          >
            {country &&
              state &&
              Array.isArray(cities[country]?.[state]) &&
              cities[country][state].map((c, index) => (
                <option key={index}>{c}</option>
              ))}
            <option>Select City</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Check In</label>
          <input
            type="date"
            className="border p-1 border-gray-300 rounded-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold">Check Out</label>
          <input
            type="date"
            className="border p-1 border-gray-300 rounded-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex font-semibold gap-1 items-center">
            <Search className="w-4 h-4" />
            Guest
          </label>
          <select className="border border-gray-300 rounded-sm p-1">
            <option>Select Options</option>
            <option>2 Guest 1 Children</option>
            <option>3 Guest</option>
            <option>4 Guest</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-white">Transmission</label>
          <button className="bg-red-500 text-white hover:bg-black px-3 h-8 py-1 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  const Slide = (banner) => (
    <div>
      <div
        className="h-[650px] lg:h-[800px] relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center px-5">
          <div className="flex flex-col space-y-8 items-center">
            <h1 className="text-white font-bold text-4xl lg:text-6xl">
              Discover Your Next Adventure
            </h1>

            <p className="text-white lg:text-lg lg:w-[700px]">
              Your next adventure begins here — explore, experience, and enjoy
              every moment as you discover the beauty of the world around you.
            </p>

            <button className="bg-red-500 px-8 py-4 text-white text-lg rounded-md font-semibold">
              Start Exploring
            </button>

            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {Slide(banner1)}
        {Slide(banner2)}
        {Slide(banner3)}
      </Slider>
    </div>
  );
};

export default Hero;
