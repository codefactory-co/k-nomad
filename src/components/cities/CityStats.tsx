"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign, Wifi, Briefcase, Car, Globe, Shield, Heart, Users } from "lucide-react";
import { City } from "@/types";

interface CityStatsProps {
  city: City;
}

const scoreConfig = {
  livingCost: { label: "생활비", icon: DollarSign, color: "bg-green-500" },
  internet: { label: "인터넷", icon: Wifi, color: "bg-blue-500" },
  workEnvironment: { label: "업무환경", icon: Briefcase, color: "bg-purple-500" },
  transportation: { label: "교통", icon: Car, color: "bg-orange-500" },
  english: { label: "영어소통", icon: Globe, color: "bg-indigo-500" },
  safety: { label: "안전", icon: Shield, color: "bg-red-500" },
  culture: { label: "문화", icon: Heart, color: "bg-pink-500" },
  community: { label: "커뮤니티", icon: Users, color: "bg-teal-500" },
};

export default function CityStats({ city }: CityStatsProps) {
  const totalScore = Object.values(city.scores).reduce((sum, score) => sum + score, 0);
  const averageScore = totalScore / Object.keys(city.scores).length;

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <h2 className="text-2xl font-bold">종합 점수</h2>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary">
            {averageScore.toFixed(1)}
          </div>
          <div className="text-sm text-muted-foreground">/ 5.0</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(city.scores).map(([key, score]) => {
          const config = scoreConfig[key as keyof typeof scoreConfig];
          const Icon = config.icon;
          const percentage = (score / 5) * 100;
          
          return (
            <div key={key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{config.label}</span>
                </div>
                <span className="text-sm font-bold">{score.toFixed(1)}</span>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}