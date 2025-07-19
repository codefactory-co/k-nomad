"use client";

import { City } from "@/types";

interface CityHeroProps {
  city: City;
}

export default function CityHero({ city }: CityHeroProps) {
  return (
    <div className="relative h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg">
            {city.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 drop-shadow-md">
            {city.tagline}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}