import React from "react";
import LightGallery from "lightgallery/react";

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
import Indonesia from "../assets/Indonesia.jpg";
import NewYork2 from "../assets/NewYork2.jpg";
import "../Components/Css/Gallery.css";

// styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const GalleryComp = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
          Our Gallery
        </h2>

        <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
      </div>

      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-4 gap-4"
      >
        <a href={Bali}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Bali}
            alt="Bali"
          />
        </a>

        <a href={Venice}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Venice}
            alt="Venice"
          />
        </a>

        <a href={Rome}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Rome}
            alt="Rome"
          />
        </a>

        <a href={Tokyo}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Tokyo}
            alt="Tokyo"
          />
        </a>

        <a href={Paris}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Paris}
            alt="Paris"
          />
        </a>

        <a href={Odisha}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Odisha}
            alt="Odisha"
          />
        </a>

        <a href={Goa}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Goa}
            alt="Goa"
          />
        </a>

        <a href={Karnataka}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Karnataka}
            alt="Karnataka"
          />
        </a>

        <a href={Maldives}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Maldives}
            alt="Maldives"
          />
        </a>

        <a href={Switzerland}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Switzerland}
            alt="Switzerland"
          />
        </a>

        <a href={NewYork}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={NewYork}
            alt="NewYork"
          />
        </a>

        <a href={Chicago}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Chicago}
            alt="Chicago"
          />
        </a>

        <a href={Dubai}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Dubai}
            alt="Dubai"
          />
        </a>

        <a href={Sydney}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Sydney}
            alt="Sydney"
          />
        </a>

        <a href={NewYork2}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={NewYork2}
            alt="New York"
          />
        </a>

        <a href={Indonesia}>
          <img
            className="w-full h-60 object-cover rounded-lg"
            src={Indonesia}
            alt="Indonesia"
          />
        </a>
      </LightGallery>
    </div>
  );
};

export default GalleryComp;
