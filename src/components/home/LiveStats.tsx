import { Users, MapPin, TrendingUp, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function LiveStats() {
  const stats = [
    {
      icon: Users,
      label: "활성 노마드",
      value: "287명",
      description: "현재 활동 중",
      trend: "+12%",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      label: "등록 도시",
      value: "32개",
      description: "전국 주요 도시",
      trend: "+3",
      color: "text-green-600",
    },
    {
      icon: ThumbsUp,
      label: "좋아요 비율",
      value: "87%",
      description: "긍정적 평가",
      trend: "+5%",
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">실시간 통계</h2>
          <p className="text-muted-foreground">
            K-NOMAD HUB의 최신 현황을 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-background ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.trend}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </div>

                {/* Background decoration */}
                <div className="absolute -right-8 -bottom-8 opacity-5">
                  <stat.icon className="w-32 h-32" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Live Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>실시간 업데이트</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔥 핫플레이스: 제주 애월</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📈 이번 주 인기: 부산 해운대</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}