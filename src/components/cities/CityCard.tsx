"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThumbsUp, ThumbsDown, MapPin, Wallet, TreePine, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { City } from "@/types";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  const router = useRouter();
  const [userChoice, setUserChoice] = useState<'like' | 'dislike' | null>(null);
  const [currentLikes, setCurrentLikes] = useState(city.likes);
  const [currentDislikes, setCurrentDislikes] = useState(city.dislikes);

  // 로컬 스토리지에서 사용자 선택 상태 로드
  useEffect(() => {
    const savedChoice = localStorage.getItem(`city-${city.id}-choice`);
    if (savedChoice === 'like' || savedChoice === 'dislike') {
      setUserChoice(savedChoice);
    }
  }, [city.id]);

  // 좋아요 버튼 클릭 핸들러
  const handleLike = () => {
    if (userChoice === 'like') {
      // 좋아요 취소
      setUserChoice(null);
      setCurrentLikes(prev => prev - 1);
      localStorage.removeItem(`city-${city.id}-choice`);
    } else if (userChoice === 'dislike') {
      // 싫어요에서 좋아요로 변경
      setUserChoice('like');
      setCurrentLikes(prev => prev + 1);
      setCurrentDislikes(prev => prev - 1);
      localStorage.setItem(`city-${city.id}-choice`, 'like');
    } else {
      // 좋아요 선택
      setUserChoice('like');
      setCurrentLikes(prev => prev + 1);
      localStorage.setItem(`city-${city.id}-choice`, 'like');
    }
  };

  // 싫어요 버튼 클릭 핸들러
  const handleDislike = () => {
    if (userChoice === 'dislike') {
      // 싫어요 취소
      setUserChoice(null);
      setCurrentDislikes(prev => prev - 1);
      localStorage.removeItem(`city-${city.id}-choice`);
    } else if (userChoice === 'like') {
      // 좋아요에서 싫어요로 변경
      setUserChoice('dislike');
      setCurrentDislikes(prev => prev + 1);
      setCurrentLikes(prev => prev - 1);
      localStorage.setItem(`city-${city.id}-choice`, 'dislike');
    } else {
      // 싫어요 선택
      setUserChoice('dislike');
      setCurrentDislikes(prev => prev + 1);
      localStorage.setItem(`city-${city.id}-choice`, 'dislike');
    }
  };

  const handleCardClick = () => {
    router.push(`/cities/${city.id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={handleCardClick}>
      {/* City Image */}
      <div className="aspect-[4/3] relative bg-gradient-to-br from-blue-400 to-blue-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-4xl font-bold text-white">{city.name}</h3>
        </div>
        <div className="absolute bottom-4 left-4">
          <p className="text-white/90 text-sm font-medium">{city.tagline}</p>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 px-2"
            onClick={(e) => {
              e.stopPropagation();
              handleLike();
            }}
          >
            <ThumbsUp className={`w-4 h-4 mr-1 ${userChoice === 'like' ? 'text-red-500 fill-red-500' : ''}`} />
            {currentLikes}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 px-2"
            onClick={(e) => {
              e.stopPropagation();
              handleDislike();
            }}
          >
            <ThumbsDown className={`w-4 h-4 mr-1 ${userChoice === 'dislike' ? 'text-gray-500 fill-gray-500' : ''}`} />
            {currentDislikes}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Key Info - Key-Value Format */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              예산
            </span>
            <span className="font-medium">{city.budget}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              지역
            </span>
            <span className="font-medium">{city.region}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <TreePine className="w-4 h-4" />
              환경
            </span>
            <span className="font-medium">{city.environment}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              최고 계절
            </span>
            <span className="font-medium">{city.bestSeason}</span>
          </div>
        </div>
      </CardContent>

    </Card>
  );
}