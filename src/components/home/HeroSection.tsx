"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HeroSection() {
  const [budget, setBudget] = useState("");
  const [region, setRegion] = useState("");
  const [environment, setEnvironment] = useState("");
  const [season, setSeason] = useState("");

  const handleSearch = () => {
    console.log("Search with filters:", { budget, region, environment, season });
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
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="h-12 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="월 생활비 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-100">100만원 이하</SelectItem>
                  <SelectItem value="100-150">100-150만원</SelectItem>
                  <SelectItem value="150-200">150-200만원</SelectItem>
                  <SelectItem value="over-200">200만원 이상</SelectItem>
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
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger className="h-12 border-2 hover:border-green-300 focus:border-green-500 transition-colors">
                  <SelectValue placeholder="선호 지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="capital">수도권</SelectItem>
                  <SelectItem value="gyeongsang">경상권</SelectItem>
                  <SelectItem value="jeolla">전라권</SelectItem>
                  <SelectItem value="gangwon">강원권</SelectItem>
                  <SelectItem value="jeju">제주권</SelectItem>
                  <SelectItem value="chungcheong">충청권</SelectItem>
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
              <Select value={environment} onValueChange={setEnvironment}>
                <SelectTrigger className="h-12 border-2 hover:border-purple-300 focus:border-purple-500 transition-colors">
                  <SelectValue placeholder="업무 환경 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="coworking">코워킹 필수</SelectItem>
                  <SelectItem value="cafe">카페 작업</SelectItem>
                  <SelectItem value="nature">자연 친화</SelectItem>
                  <SelectItem value="city">도심 선호</SelectItem>
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
              <Select value={season} onValueChange={setSeason}>
                <SelectTrigger className="h-12 border-2 hover:border-orange-300 focus:border-orange-500 transition-colors">
                  <SelectValue placeholder="방문 시기 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spring">봄 (3-5월)</SelectItem>
                  <SelectItem value="summer">여름 (6-8월)</SelectItem>
                  <SelectItem value="fall">가을 (9-11월)</SelectItem>
                  <SelectItem value="winter">겨울 (12-2월)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleSearch}
              size="lg"
              className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Search className="w-5 h-5 mr-3" />
              완벽한 도시 찾기
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