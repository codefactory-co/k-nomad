"use client";

import { useState } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import citiesData from "@/data/cities.json";

const regions = [
  { id: "all", name: "전체", description: "모든 지역의 도시" },
  { id: "수도권", name: "수도권", description: "서울, 경기, 인천" },
  { id: "경상권", name: "경상권", description: "부산, 대구, 울산, 경남, 경북" },
  { id: "전라권", name: "전라권", description: "광주, 전남, 전북" },
  { id: "강원권", name: "강원권", description: "강원도 전 지역" },
  { id: "제주권", name: "제주권", description: "제주도" },
  { id: "충청권", name: "충청권", description: "대전, 세종, 충남, 충북" },
];

export default function RegionalTabs() {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const getCitiesByRegion = (regionName: string) => {
    let cities = regionName === "all" 
      ? [...citiesData] 
      : citiesData.filter((city) => city.region === regionName);
    
    // Sort by id to ensure consistent order between server and client
    return cities.sort((a, b) => a.id - b.id);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold">지역별 탐색</h2>
          </div>
          <p className="text-muted-foreground">
            원하는 지역의 노마드 도시를 찾아보세요
          </p>
        </div>

        <Tabs value={selectedRegion} onValueChange={setSelectedRegion} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 h-auto">
            {regions.map((region) => (
              <TabsTrigger
                key={region.id}
                value={region.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {region.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {regions.map((region) => {
            const cities = getCitiesByRegion(region.id);
            
            return (
              <TabsContent key={region.id} value={region.id} className="mt-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                    <p className="text-muted-foreground text-sm">{region.description}</p>
                  </div>

                  {cities.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cities.map((city) => (
                        <div
                          key={city.id}
                          className="bg-background border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-lg">{city.name}</h4>
                              <p className="text-sm text-muted-foreground">{city.tagline}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-sm font-medium">{city.rating}</span>
                              <span className="text-yellow-500">★</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                            <span>{city.cost}</span>
                            <span>•</span>
                            <span>{city.internet}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {city.badges.slice(0, 3).map((badge) => (
                              <Badge key={badge} variant="secondary" className="text-xs">
                                {badge}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            variant="ghost"
                            className="w-full justify-between"
                            onClick={() => console.log(`Navigate to ${city.name}`)}
                          >
                            자세히 보기
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      해당 지역에 등록된 도시가 없습니다.
                    </div>
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => console.log("Navigate to all cities")}
          >
            모든 도시 둘러보기
          </Button>
        </div>
      </div>
    </section>
  );
}