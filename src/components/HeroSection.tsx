import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Play,
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  Award,
  FileText,
} from "lucide-react";

interface HeroSectionProps {
  onPartnershipClick?: () => void;
}

export default function HeroSection({
  onPartnershipClick,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative py-20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* 배경 장식 요소들 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-32 w-12 h-12 bg-green-100 rounded-full opacity-50 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 lg:pr-8">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold shadow-lg">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                소규모 의원 경영 혁신의 첫 걸음, EASYMEDI
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                병원경영,{" "}
                <span className="text-blue-600">
                  더 이상 혼자
                </span>
                <br />
                <span className="text-gray-700">
                  고민하지 마세요.
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                개인의원과 소규모 병원을 위한 최적의 경영
                파트너, EASYMEDI는 의료진이 환자 진료에 집중할
                수 있도록 의원 운영의 모든 측면을 자동화하고,
                데이터 기반 마케팅과 보안까지 함께 책임집니다.
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-lg">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-600">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">
                    도입 의원
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-600">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">
                    만족도
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">
                    지원
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#trial"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-white font-medium h-12 no-underline"
              >
                <ArrowRight className="w-5 h-5" />
                30일 무료체험 신청
              </a>
              <div className="flex gap-2">
                <a
                  href="http://ca-7777.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm sm:text-lg px-4 sm:px-6 py-4 rounded-2xl border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all shadow-lg bg-white font-medium h-12 no-underline whitespace-nowrap"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  데모사이트 보기
                </a>
                <a
                  href="https://invest-eight-psi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm sm:text-lg px-4 sm:px-6 py-4 rounded-2xl border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all shadow-lg bg-white font-medium h-12 no-underline whitespace-nowrap"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  투자제안서 보기
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-md">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  설치비, 교육비 무료
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-md">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium text-gray-700">
                  의료진 전담 지원
                </span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            {/* 메인 3D 스타일 의사 일러스트 영역 */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="text-center space-y-6">
                {/* 3D 스타일 의사 아이콘 */}
                <div className="relative mx-auto w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-inner">
                    <div className="text-8xl">👨‍⚕️</div>
                  </div>

                  {/* 플로팅 아이콘들 */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <Heart className="w-8 h-8 text-white" />
                  </div>

                  <div className="absolute -bottom-2 -left-6 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                    <Shield className="w-7 h-7 text-white" />
                  </div>

                  <div className="absolute top-8 -left-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    소규모 의원을 위한 최적의 경영 파트너
                  </h3>
                  <p className="text-gray-600">
                    의료진이 환자 진료에 집중할 수 있도록
                  </p>
                </div>
              </div>
            </div>

            {/* 부가 정보 카드들 */}
            <div className="absolute -bottom-8 -left-4 bg-white border border-blue-200 p-4 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    실시간 운영
                  </div>
                  <div className="text-xs text-gray-500">
                    24시간 안정성
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs opacity-90">만족도</div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-xl shadow-lg transform -translate-y-1/2">
              <div className="text-center">
                <div className="text-lg font-bold">500+</div>
                <div className="text-xs opacity-90">
                  도입 의원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}