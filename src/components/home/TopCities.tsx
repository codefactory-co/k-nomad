import CityCard from "@/components/cities/CityCard";
import citiesData from "@/data/cities.json";
import { TrendingUp } from "lucide-react";

export default function TopCities() {
  // Get top 4 cities by rating, with id as tiebreaker for consistent ordering
  const topCities = citiesData
    .slice() // Create a copy to avoid mutating the original array
    .sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return a.id - b.id; // Tiebreaker for consistent ordering
    })
    .slice(0, 4);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold">TOP 추천 도시</h2>
          </div>
          <p className="text-muted-foreground">
            디지털 노마드들이 가장 사랑하는 한국의 도시들을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/cities"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            모든 도시 보기 →
          </a>
        </div>
      </div>
    </section>
  );
}