import CityCard from "@/components/cities/CityCard";
import citiesData from "@/data/cities.json";
import { TrendingUp } from "lucide-react";
import { FilterState } from "@/app/page";
import { City } from "@/types";

interface TopCitiesProps {
  filters: FilterState;
}

export default function TopCities({ filters }: TopCitiesProps) {
  // Filter cities based on current filters
  const filteredCities = citiesData.filter((city: City) => {
    // Budget filter
    if (filters.budget) {
      const cost = parseInt(city.cost.replace(/[^0-9]/g, ''));
      if (filters.budget === '100' && cost > 100) return false;
      if (filters.budget === '100-200' && (cost <= 100 || cost > 200)) return false;
      if (filters.budget === '200+' && cost <= 200) return false;
    }
    
    // Region filter
    if (filters.region && filters.region !== 'all') {
      const regionMap: Record<string, string> = {
        '수도권': '수도권',
        '경상도': '경상도',
        '전라도': '전라도',
        '강원도': '강원도',
        '제주도': '제주도',
        '충청도': '충청도'
      };
      if (city.region !== regionMap[filters.region]) return false;
    }
    
    // Environment filter (based on badges for now)
    if (filters.environment) {
      const envMap: Record<string, string[]> = {
        '자연친화': ['자연', '바다', '해변', '서핑'],
        '도심선호': ['스타트업', '네트워킹', '문화', '과학'],
        '카페작업': ['카페', '커피'],
        '코워킹 필수': ['코워킹', '공유오피스']
      };
      const envKeywords = envMap[filters.environment] || [];
      if (!city.badges.some(badge => envKeywords.includes(badge))) return false;
    }
    
    // Season filter (for now, just return true as we don't have season data)
    // This would need to be implemented based on actual seasonal data
    
    return true;
  });
  
  // Get all cities sorted by likes in descending order, with id as tiebreaker for consistent ordering
  const sortedCities = filteredCities
    .slice() // Create a copy to avoid mutating the original array
    .sort((a, b) => {
      if (b.likes !== a.likes) {
        return b.likes - a.likes;
      }
      return a.id - b.id; // Tiebreaker for consistent ordering
    });

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold">도시 리스트</h2>
          </div>
          <p className="text-muted-foreground">
            디지털 노마드들이 가장 사랑하는 한국의 도시들을 만나보세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sortedCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>

      </div>
    </section>
  );
}