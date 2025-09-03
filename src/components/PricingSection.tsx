import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic 기본",
    price: "8.9만원",
    period: "/월",
    description: "소규모 개인의원",
    icon: Star,
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    features: [
      "솔루션 자체 고객관리",
      "앱을 사용한 의약품 재고관리 (입고/불출)",
      "자동 수납/결제 (기존시스템 연동)",
      "의약품 재무관리",
      "기본 통계 리포트",
      "직원 스케쥴관리",
      "SaaS 백업운영"
    ],
    popular: false
  },
  {
    name: "Plus 성장",
    price: "18.9만원",
    period: "/월",
    description: "중간 규모 의원",
    icon: Zap,
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-400",
    textColor: "text-green-600",
    features: [
      "Basic 핵심기능 모두 포함",
      "의약품 재고관리 (투약관리)",
      "자동 수납/결제 (PG 개발)",
      "병원 매출관리",
      "직원 급여관리",
      "고급 통계 분석",
      "우선 고객지원"
    ],
    popular: true
  },
  {
    name: "Pro 전문가",
    price: "29.9만원",
    period: "/월",
    description: "대형 의원/체인",
    icon: Crown,
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600",
    features: [
      "Plus 모든 기능 포함",
      "차트관리 (EMR 연동)",
      "키오스크 연동 (설치비 별도)",
      "커스터마이징",
      "전용 계정 매니저",
      "24/7 전화지원"
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg">
            <span className="mr-2">💰</span>
            합리적인 요금제
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            의원 규모에 맞는 <span className="text-blue-600">요금제</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            소규모부터 대형 의원까지, 각 의원의 규모와 필요에 맞는 최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.popular 
                  ? `border-4 ${plan.borderColor} shadow-2xl scale-105 ${plan.bgColor}` 
                  : `border-2 border-gray-200 shadow-lg hover:shadow-xl ${plan.bgColor}`
              } rounded-3xl`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    인기!
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 pt-12">
                <div className={`inline-block px-4 py-2 rounded-full text-white text-sm font-bold mb-4 bg-gradient-to-r ${plan.gradient}`}>
                  {plan.name}
                </div>
                
                <div className="mb-4">
                  <span className={`text-5xl font-bold ${plan.textColor}`}>{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                
                <p className="text-gray-600 font-medium">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#trial" 
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold transition-all shadow-lg hover:shadow-xl no-underline ${
                    plan.popular 
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:scale-105` 
                      : `border-2 ${plan.borderColor} ${plan.textColor} hover:${plan.bgColor} bg-white`
                  }`}
                >
                  30일 무료체험 시작
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 추가 혜택 섹션 */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">모든 요금제 공통 혜택</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl">🆓</div>
              <div className="font-semibold">30일 무료 체험</div>
              <div className="text-blue-100 text-sm">부담 없이 시작하세요</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🎓</div>
              <div className="font-semibold">무료 교육 지원</div>
              <div className="text-blue-100 text-sm">전 직원 대상 교육</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">🔒</div>
              <div className="font-semibold">데이터 보안</div>
              <div className="text-blue-100 text-sm">ISO 27001 인증</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">⚡</div>
              <div className="font-semibold">즉시 도입</div>
              <div className="text-blue-100 text-sm">설치 당일부터 사용</div>
            </div>
          </div>
          
          <div className="mt-10">
            <a href="#trial" className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all no-underline">
              30일 무료 체험 시작하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}