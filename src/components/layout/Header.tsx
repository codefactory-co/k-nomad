import Link from "next/link";
import { MapPin, Menu, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { createClient } from "@/utils/supabase/server";
import UserMenu from "@/components/auth/UserMenu";

export default async function Header() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">K-NOMAD HUB</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className={navigationMenuTriggerStyle()}>
                    홈
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search Bar, Login Button and Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="도시 검색..."
              className="pl-8 w-[200px]"
            />
          </div>
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Button asChild variant="outline">
              <Link href="/login" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>로그인</span>
              </Link>
            </Button>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                홈
              </Link>
              <div className="pt-4 space-y-4">
                <Input
                  placeholder="도시 검색..."
                  className="w-full"
                />
                {user ? (
                  <UserMenu user={user} />
                ) : (
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/login" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>로그인</span>
                    </Link>
                  </Button>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}