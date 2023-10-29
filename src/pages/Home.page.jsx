import React, { useState } from "react";

//Lauout HOC
import DefaultLayoutHoc from "../layout/Default.layout";

//Components
import EntertainmentCard from "../components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCard />
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subject="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
            //   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PosterSlider
            title="Premiers"
            subject="Brand new releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subject="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
