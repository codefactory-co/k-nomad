"use client";

import { useState } from "react";
import { Search, Filter, Grid3x3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CityCard from "@/components/cities/CityCard";
import citiesData from "@/data/cities.json";

export default function CitiesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("rating");
  const [filterRegion, setFilterRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort cities
  let filteredCities = [...citiesData];

  // Apply region filter
  if (filterRegion !== "all") {
    filteredCities = filteredCities.filter((city) => city.region === filterRegion);
  }

  // Apply search filter
  if (searchQuery) {
    filteredCities = filteredCities.filter(
      (city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply sorting
  filteredCities.sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "cost":
        return parseInt(a.cost) - parseInt(b.cost);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">도시 탐색</h1>
        <p className="text-muted-foreground">
          한국의 모든 디지털 노마드 도시를 둘러보고 비교해보세요
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="도시명 또는 특징으로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Region Filter */}
          <Select value={filterRegion} onValueChange={setFilterRegion}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="지역 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">모든 지역</SelectItem>
              <SelectItem value="수도권">수도권</SelectItem>
              <SelectItem value="경상권">경상권</SelectItem>
              <SelectItem value="전라권">전라권</SelectItem>
              <SelectItem value="강원권">강원권</SelectItem>
              <SelectItem value="제주권">제주권</SelectItem>
              <SelectItem value="충청권">충청권</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort By */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="정렬 기준" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">평점 높은순</SelectItem>
              <SelectItem value="cost">가격 낮은순</SelectItem>
              <SelectItem value="name">이름순</SelectItem>
            </SelectContent>
          </Select>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            총 {filteredCities.length}개의 도시
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchQuery("");
              setFilterRegion("all");
              setSortBy("rating");
            }}
          >
            <Filter className="h-4 w-4 mr-2" />
            필터 초기화
          </Button>
        </div>
      </div>

      {/* Cities Grid/List */}
      {filteredCities.length > 0 ? (
        viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCities.map((city) => (
              <div
                key={city.id}
                className="bg-background border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold">{city.name}</h3>
                        <p className="text-sm text-muted-foreground">{city.tagline}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-lg font-medium">{city.rating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{city.cost}</span>
                      <span>•</span>
                      <span>{city.internet}</span>
                      <span>•</span>
                      <span>{city.region}</span>
                    </div>
                  </div>
                  <Button
                    className="ml-4"
                    onClick={() => console.log(`Navigate to ${city.name}`)}
                  >
                    자세히보기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}