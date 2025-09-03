import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Package, CreditCard, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "초간편 예약 & 접수",
    description: "홈페이지/모바일 간편 예약, QR/키오스크 체크인, 환자 대기/호명 시스템",
    highlight: "종이 예약부 작성 불필요!",
    gradient: "from-blue-500 to-blue-600",
    additionalFeatures: [
      "실시간 예약 현황 확인",
      "SMS/카카오톡 자동 알림", 
      "대기순서 실시간 표시",
      "취소/변경 자동 처리"
    ]
  },
  {
    icon: Package,
    title: "스마트 의약품 관리",
    description: "실시간 약품 재고 확인, 유통기한 알림 자동화, 자동 발주/불출 기록",
    highlight: "재고 부족/폐기 손실 방지!",
    gradient: "from-green-500 to-green-600",
    additionalFeatures: [
      "자동 발주 알림 시스템",
      "유통기한 관리",
      "재고 부족 예측",
      "공급업체 연동"
    ]
  },
  {
    icon: CreditCard,
    title: "똑똑한 수납 & 결제",
    description: "카드/현금/계좌 통합 관리, 보험청구 자동 연동, 전자의수증 발행",
    highlight: "미수납 관리 자동화!",
    gradient: "from-purple-500 to-purple-600",
    additionalFeatures: [
      "카드/현금/계좌이체 지원",
      "보험 청구 자동화",
      "분할 결제 가능",
      "영수증 자동 발행"
    ]
  },
  {
    icon: FileText,
    title: "차트 & 진료기록 연동",
    description: "간편한 차트 작성/조회, 환자 진료 이력 관리, 진단서/소견서 자동 생성",
    highlight: "기존 EMR과 완벽 연동!",
    gradient: "from-orange-500 to-orange-600",
    additionalFeatures: [
      "음성 인식 차트 작성",
      "과거 진료 이력 자동 연동",
      "검사 결과 통합 관리",
      "진료 템플릿 제공"
    ]
  },
  {
    icon: BarChart3,
    title: "통계 & 보안 관리",
    description: "진료/매출 통계 분석, 자동 데이터 백업, 개인정보 보호 시스템",
    highlight: "안전하고 스마트한 병원 운영!",
    gradient: "from-red-500 to-red-600",
    additionalFeatures: [
      "실시간 운영 대시보드",
      "매출/환자 통계 분석",
      "의료진별 성과 관리",
      "ISO 27001 보안 인증"
    ]
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-300 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 via-purple-50 to-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg">
            <span className="mr-2">🏥</span>
            소규모 의원 경영의 모든 것, EASYMEDI
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            이지메디의 <span className="text-blue-600">5대 핵심기능</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            EasyMedi는 소규모 의원을 데이터 기반으로 운영할 수 있도록 다양한 자동화 솔루션을 제공합니다.
            환자 접수부터 의약품 관리, 수납 처리, EMR 연동까지 - 의원 운영의 모든 
            프로세스를 효율화하여 진료에 집중할 수 있도록 도와드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white border-0 shadow-xl overflow-hidden rounded-3xl">
              <CardHeader className="pb-6 relative bg-gradient-to-br from-blue-50/50 to-purple-50/30">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-bl-3xl opacity-60"></div>
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl group-hover:shadow-2xl`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border border-blue-100">
                  <p className="text-blue-800 font-semibold text-sm flex items-center">
                    <span className="mr-2 text-lg">✨</span>
                    {feature.highlight}
                  </p>
                </div>
                
                {/* 추가 기능 리스트 */}
                <div className="space-y-2">
                  {feature.additionalFeatures?.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">모든 기능을 한번에 체험해보세요</h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              30일 무료 체험으로 의원 운영의 혁신적인 변화를 직접 경험하세요
              <br />설치비, 교육비 모두 무료입니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl hover:bg-gray-50 transition-all font-semibold shadow-lg hover:shadow-xl">
                30일 무료 체험 신청
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all font-semibold">
                상담 예약하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}