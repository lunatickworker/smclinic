import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Quote, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "김병원 원장",
    hospital: "서울 ○○의원",
    content: "EasyMedi 도입 후 업무 누락률이 80% 감소했습니다. 직원들의 만족도도 눈에 띄게 향상되었어요.",
    image: "https://images.unsplash.com/photo-1659353888242-e7c29b331c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB1c2luZyUyMHRhYmxldCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU2Nzk1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "이수민 실장",
    hospital: "부산 △△병원",
    content: "재고 관리가 완전히 달라졌습니다. 이제 유통기한 걱정 없이 효율적으로 관리할 수 있어요.",
    image: "https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RhZmYlMjB0ZWFtJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzU2Nzk1NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const beforeAfterData = [
  {
    category: "업무 관리",
    before: "수기 업무 관리",
    after: "자동화된 To-do 시스템",
    improvement: "80% 효율 증가"
  },
  {
    category: "재고 관리", 
    before: "엑셀 재고 정리",
    after: "QR 기반 실시간 재고",
    improvement: "95% 정확도 향상"
  },
  {
    category: "예약 관리",
    before: "수동 예약 대응",
    after: "통합 예약 + 자동 알림",
    improvement: "60% 시간 절약"
  },
  {
    category: "재무 관리",
    before: "복잡한 수기 정산",
    after: "자동 정산 + 리포트",
    improvement: "90% 오류 감소"
  }
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-blue-300 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-purple-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm font-semibold mb-8 shadow-lg">
            <span className="mr-2">📈</span>
            500+ 병원이 검증한 성과
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            도입 후 3개월, <span className="text-green-600">병원 운영이 달라졌습니다</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            실제 도입 병원의 생생한 후기와 객관적인 데이터를 통해 확인된
            <br />EasyMedi의 혁신적인 성과를 지금 확인해보세요
          </p>
        </div>

        {/* Before/After 비교 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">실제 도입 효과</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beforeAfterData.map((item, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-4 shadow-xl">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">{item.category}</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-2xl border-l-4 border-red-400">
                      <div className="text-xs font-bold text-red-600 mb-2">도입 전</div>
                      <div className="text-sm text-gray-700 font-medium">{item.before}</div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-2xl border-l-4 border-green-500">
                      <div className="text-xs font-bold text-green-600 mb-2">도입 후</div>
                      <div className="text-sm text-gray-700 font-medium">{item.after}</div>
                    </div>
                    
                    <div className="text-center">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {item.improvement}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 고객 후기 */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">고객 후기</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <ImageWithFallback 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.hospital}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 추가 통계 및 CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto text-white">
            <h3 className="text-4xl font-bold mb-6">더 많은 성공사례가 궁금하신가요?</h3>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              500개 이상의 병원이 이미 EasyMedi와 함께 성장하고 있습니다
              <br />당신의 병원도 혁신의 대열에 동참하세요
            </p>
            
            {/* 간단한 통계 */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200">도입 병원</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-200">만족도</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-blue-200">업무 효율 향상</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl hover:bg-gray-50 transition-all font-bold shadow-lg hover:shadow-xl">
                고객사례 더 보기
              </button>
              <a href="#trial" className="border-2 border-white text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-blue-600 transition-all font-bold no-underline inline-flex items-center justify-center">
                무료 상담 신청
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}