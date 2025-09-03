import { Button } from "./ui/button";
import { Menu, Heart, Shield, Users, ChevronDown, Sparkles, Star } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100/50">
      {/* 상단 알림 배너 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">🎉 병원 운영 혁신의 새로운 시작! 30일 무료체험으로 EasyMedi를 경험해보세요</span>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* 로고 및 브랜드 */}
          <div className="flex items-center space-x-4">
            <a href="#home" className="flex items-center space-x-4 no-underline group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all transform group-hover:scale-105">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EasyMedi
                </div>
                <div className="text-xs text-blue-500 -mt-1 font-semibold tracking-wide">
                  HOSPITAL SOLUTION
                </div>
              </div>
            </a>
          </div>
          
          {/* 네비게이션 메뉴 */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a href="#home" className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all font-semibold hover:bg-blue-50/70">
              <span className="relative z-10">소개</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a href="#features" className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all font-semibold hover:bg-blue-50/70">
              <span className="relative z-10 flex items-center space-x-1">
                <span>솔루션</span>
                <Star className="w-3 h-3 text-yellow-500" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a href="#cases" className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all font-semibold hover:bg-blue-50/70">
              <span className="relative z-10">고객사례</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a href="#pricing" className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all font-semibold hover:bg-blue-50/70">
              <span className="relative z-10">요금제</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a href="#trial" className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all font-semibold hover:bg-blue-50/70">
              <span className="relative z-10 flex items-center space-x-1">
                <span>무료체험</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            
            <a href="#support" className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 transition-all font-semibold hover:bg-blue-50/70">
              <span className="relative z-10">고객지원</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </nav>

          {/* 우측 액션 버튼들 */}
          <div className="flex items-center space-x-3">
            <a href="#trial" className="hidden sm:flex items-center justify-center gap-2 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 rounded-full px-6 py-2.5 text-sm font-semibold transition-all bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg no-underline group">
              <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:animate-pulse"></div>
              무료 체험 신청
            </a>
            
            <a href="#support" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-blue-800 hover:to-purple-700 rounded-full px-6 py-2.5 shadow-xl hover:shadow-2xl transition-all text-white text-sm font-semibold no-underline transform hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Heart className="w-4 h-4 relative z-10" />
              <span className="relative z-10">상담 문의하기</span>
            </a>
            
            <button className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors shadow-md">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}