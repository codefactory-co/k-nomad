import Link from "next/link";
import { Star, ThumbsUp, ThumbsDown, Wifi, DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { City } from "@/types";

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-lg">{city.rating}/5.0</span>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <ThumbsUp className="w-4 h-4 mr-1" />
              {city.likes}
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <ThumbsDown className="w-4 h-4 mr-1" />
              {city.dislikes}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span>{city.cost}</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-muted-foreground" />
            <span>{city.internet}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {city.badges.map((badge) => (
            <Badge key={badge} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Score Preview */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">생활비</span>
              <span className="font-medium">{city.scores.livingCost}/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">인터넷</span>
              <span className="font-medium">{city.scores.internet}/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">업무환경</span>
              <span className="font-medium">{city.scores.workEnvironment}/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">안전도</span>
              <span className="font-medium">{city.scores.safety}/5</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/cities/${city.id}`} className="w-full">
          <Button className="w-full">자세히보기</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}