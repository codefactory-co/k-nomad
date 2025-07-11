import Link from "next/link";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">K-NOMAD HUB</span>
            </div>
            <p className="text-sm text-muted-foreground">
              대한민국 디지털 노마드를 위한
              <br />
              원스톱 도시 정보 플랫폼
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cities" className="text-muted-foreground hover:text-foreground">
                  도시 탐색
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-muted-foreground hover:text-foreground">
                  도시 비교
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground">
                  커뮤니티
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-foreground">
                  노마드 가이드
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Cities */}
          <div className="space-y-4">
            <h3 className="font-semibold">인기 도시</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cities/1" className="text-muted-foreground hover:text-foreground">
                  제주
                </Link>
              </li>
              <li>
                <Link href="/cities/2" className="text-muted-foreground hover:text-foreground">
                  서울
                </Link>
              </li>
              <li>
                <Link href="/cities/3" className="text-muted-foreground hover:text-foreground">
                  부산
                </Link>
              </li>
              <li>
                <Link href="/cities/5" className="text-muted-foreground hover:text-foreground">
                  강릉
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">문의하기</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>이메일: contact@knomadhub.com</li>
              <li>카카오톡: @knomadhub</li>
              <li>인스타그램: @k_nomad_hub</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 K-NOMAD HUB. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}