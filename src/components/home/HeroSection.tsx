"use client";

import { Search, MapPin, Briefcase, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterState } from "@/app/page";

interface HeroSectionProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export default function HeroSection({ filters, setFilters }: HeroSectionProps) {

  const handleSearch = () => {
    // Search functionality - filters are already applied through parent component
  };
  
  const handleReset = () => {
    setFilters({
      budget: "",
      region: "",
      environment: "",
      season: ""
    });
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50/50 to-background dark:from-blue-950/20">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          당신에게 완벽한{" "}
          <span className="text-blue-600">노마드 도시</span>를 찾아보세요
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          한국의 도시별 생활비, 인터넷 속도, 커뮤니티 정보를 한눈에 비교하고
          <br className="hidden md:block" />
          나에게 딱 맞는 디지털 노마드 라이프를 시작하세요
        </p>

        {/* Search Filters */}
        <div className="bg-background/95 backdrop-blur border rounded-xl p-8 shadow-lg max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Budget */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-semibold text-foreground">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                  <Home className="w-4 h-4 text-blue-600" />
                </div>
                예산
              </label>
              <Select value={filters.budget} onValueChange={(value) => setFilters({...filters, budget: value})}>
                <SelectTrigger className="w-full h-12 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="월 생활비 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100">100만원</SelectItem>
                  <SelectItem value="100-200">100~200만원</SelectItem>
                  <SelectItem value="200+">200만원+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Region */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-semibold text-foreground">
                <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
                지역
              </label>
              <Select value={filters.region} onValueChange={(value) => setFilters({...filters, region: value})}>
                <SelectTrigger className="w-full h-12 border-2 hover:border-green-300 focus:border-green-500 transition-colors">
                  <SelectValue placeholder="선호 지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="수도권">수도권</SelectItem>
                  <SelectItem value="경상도">경상도</SelectItem>
                  <SelectItem value="전라도">전라도</SelectItem>
                  <SelectItem value="강원도">강원도</SelectItem>
                  <SelectItem value="제주도">제주도</SelectItem>
                  <SelectItem value="충청도">충청도</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Environment */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-semibold text-foreground">
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                </div>
                환경
              </label>
              <Select value={filters.environment} onValueChange={(value) => setFilters({...filters, environment: value})}>
                <SelectTrigger className="w-full h-12 border-2 hover:border-purple-300 focus:border-purple-500 transition-colors">
                  <SelectValue placeholder="업무 환경 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="자연친화">자연친화</SelectItem>
                  <SelectItem value="도심선호">도심선호</SelectItem>
                  <SelectItem value="카페작업">카페작업</SelectItem>
                  <SelectItem value="코워킹 필수">코워킹 필수</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Season */}
            <div className="space-y-3">
              <label className="flex items-center text-sm font-semibold text-foreground">
                <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-orange-600" />
                </div>
                계절
              </label>
              <Select value={filters.season} onValueChange={(value) => setFilters({...filters, season: value})}>
                <SelectTrigger className="w-full h-12 border-2 hover:border-orange-300 focus:border-orange-500 transition-colors">
                  <SelectValue placeholder="최고 계절 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="봄">봄</SelectItem>
                  <SelectItem value="여름">여름</SelectItem>
                  <SelectItem value="가을">가을</SelectItem>
                  <SelectItem value="겨울">겨울</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleSearch}
              size="lg"
              className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Search className="w-5 h-5 mr-3" />
              완벽한 도시 찾기
            </Button>
            <Button
              onClick={handleReset}
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-muted/50 transition-all duration-200"
            >
              초기화
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>현재 287명의 노마드가 활동 중</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔥 인기 급상승: 강릉, 속초</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💰 가성비 최고: 대전, 전주</span>
          </div>
        </div>
      </div>
    </section>
  );
}