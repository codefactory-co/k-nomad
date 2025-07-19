"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, ThumbsUp, ThumbsDown, MapPin, Wallet, TreePine, Calendar, Wifi, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { City } from "@/types";
import CityHero from "./CityHero";
import CityStats from "./CityStats";

interface CityDetailProps {
  city: City;
}

export default function CityDetail({ city }: CityDetailProps) {
  const router = useRouter();
  const [userChoice, setUserChoice] = useState<'like' | 'dislike' | null>(null);
  const [currentLikes, setCurrentLikes] = useState(city.likes);
  const [currentDislikes, setCurrentDislikes] = useState(city.dislikes);

  useEffect(() => {
    const savedChoice = localStorage.getItem(`city-${city.id}-choice`);
    if (savedChoice === 'like' || savedChoice === 'dislike') {
      setUserChoice(savedChoice);
    }
  }, [city.id]);

  const handleLike = () => {
    if (userChoice === 'like') {
      setUserChoice(null);
      setCurrentLikes(prev => prev - 1);
      localStorage.removeItem(`city-${city.id}-choice`);
    } else if (userChoice === 'dislike') {
      setUserChoice('like');
      setCurrentLikes(prev => prev + 1);
      setCurrentDislikes(prev => prev - 1);
      localStorage.setItem(`city-${city.id}-choice`, 'like');
    } else {
      setUserChoice('like');
      setCurrentLikes(prev => prev + 1);
      localStorage.setItem(`city-${city.id}-choice`, 'like');
    }
  };

  const handleDislike = () => {
    if (userChoice === 'dislike') {
      setUserChoice(null);
      setCurrentDislikes(prev => prev - 1);
      localStorage.removeItem(`city-${city.id}-choice`);
    } else if (userChoice === 'like') {
      setUserChoice('dislike');
      setCurrentDislikes(prev => prev + 1);
      setCurrentLikes(prev => prev - 1);
      localStorage.setItem(`city-${city.id}-choice`, 'dislike');
    } else {
      setUserChoice('dislike');
      setCurrentDislikes(prev => prev + 1);
      localStorage.setItem(`city-${city.id}-choice`, 'dislike');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                뒤로가기
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/')}
                className="flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                홈
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className="flex items-center gap-2"
              >
                <ThumbsUp className={`w-4 h-4 ${userChoice === 'like' ? 'text-red-500 fill-red-500' : ''}`} />
                {currentLikes}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDislike}
                className="flex items-center gap-2"
              >
                <ThumbsDown className={`w-4 h-4 ${userChoice === 'dislike' ? 'text-gray-500 fill-gray-500' : ''}`} />
                {currentDislikes}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <CityHero city={city} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">기본 정보</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      지역
                    </span>
                    <span className="font-medium">{city.region}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Wallet className="w-4 h-4" />
                      예산
                    </span>
                    <span className="font-medium">{city.budget}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <TreePine className="w-4 h-4" />
                      환경
                    </span>
                    <span className="font-medium">{city.environment}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      최고 계절
                    </span>
                    <span className="font-medium">{city.bestSeason}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      월 비용
                    </span>
                    <span className="font-medium">{city.cost}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Wifi className="w-4 h-4" />
                      인터넷 속도
                    </span>
                    <span className="font-medium">{city.internet}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">특징</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {city.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            {city.description && (
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">소개</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {city.description}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Stats Sidebar */}
          <div className="lg:col-span-1">
            <CityStats city={city} />
          </div>
        </div>
      </div>
    </div>
  );
}