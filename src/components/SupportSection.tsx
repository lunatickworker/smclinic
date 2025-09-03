import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { HelpCircle, BookOpen, Bell, MessageCircle, Clock, Shield } from "lucide-react";

const supportServices = [
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "자주 묻는 질문과 답변을 확인하세요",
    items: [
      "도입 과정 및 기간",
      "기존 시스템 연동 방법",
      "직원 교육 프로그램",
      "데이터 보안 정책"
    ]
  },
  {
    icon: BookOpen,
    title: "블로그",
    description: "병원 운영 팁과 업계 트렌드를 공유합니다",
    items: [
      "병원 디지털 전환 가이드",
      "의료 법규 업데이트",
      "성공 사례 분석",
      "신기능 활용법"
    ]
  },
  {
    icon: Bell,
    title: "공지사항",
    description: "시스템 업데이트와 중요 소식을 전해드립니다",
    items: [
      "정기 점검 일정",
      "신기능 출시 소식",
      "보안 업데이트",
      "교육 일정 안내"
    ]
  }
];

const supportFeatures = [
  {
    icon: MessageCircle,
    title: "24/7 채팅 상담",
    description: "실시간 채팅으로 즉시 도움을 받으세요"
  },
  {
    icon: Clock,
    title: "원격 지원",
    description: "화면 공유를 통한 직접적인 문제 해결"
  },
  {
    icon: Shield,
    title: "전담 매니저",
    description: "병원별 전담 매니저가 지속적으로 관리"
  }
];

const faqData = [
  {
    question: "EasyMedi 도입에 얼마나 걸리나요?",
    answer: "일반적으로 2-3주 정도 소요됩니다. 병원 규모와 기존 시스템에 따라 달라질 수 있습니다."
  },
  {
    question: "기존 EMR 시스템과 연동이 가능한가요?",
    answer: "대부분의 EMR 시스템과 연동 가능합니다. 도입 전 기술팀에서 호환성을 확인해드립니다."
  },
  {
    question: "직원 교육은 어떻게 진행되나요?",
    answer: "현장 방문 교육과 온라인 교육을 병행하며, 각 부서별 맞춤 교육을 제공합니다."
  },
  {
    question: "데이터 보안은 어떻게 관리되나요?",
    answer: "ISO 27001 인증을 받은 보안 체계로 개인정보를 안전하게 보호합니다."
  }
];

export default function SupportSection() {
  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6 text-gray-900">
            <span className="text-blue-600">고객지원</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            EasyMedi를 더 효과적으로 활용할 수 있도록 다양한 지원 서비스를 제공합니다
          </p>
        </div>

        {/* 지원 서비스 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {supportServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm">
                  더 보기 →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 지원 기능 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl mb-8 text-center text-gray-900">자주 묻는 질문</h3>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-3 text-gray-900">Q. {faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">A. {faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              더 많은 FAQ 보기
            </button>
          </div>
        </div>

        {/* 연락 정보 */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl mb-6 text-center text-gray-900">추가 도움이 필요하시나요?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg mb-2 text-gray-900">실시간 상담</h4>
              <p className="text-gray-600 mb-4">평일 09:00-18:00</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                채팅 상담 시작
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg mb-2 text-gray-900">이메일 문의</h4>
              <p className="text-gray-600 mb-4">support@easymedi.co.kr</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                이메일 보내기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}