"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import TopCities from "@/components/home/TopCities";

export interface FilterState {
  budget: string;
  region: string;
  environment: string;
  season: string;
}

export default function Home() {
  const [filters, setFilters] = useState<FilterState>({
    budget: "",
    region: "",
    environment: "",
    season: ""
  });

  return (
    <>
      <HeroSection filters={filters} setFilters={setFilters} />
      <TopCities filters={filters} />
    </>
  );
}