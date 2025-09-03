import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { TrendingUp, Target, Users, FileText, DollarSign, Globe } from "lucide-react";

const metrics = [
  {
    icon: Users,
    title: "도입 병원",
    value: "100+",
    subtitle: "병원이 신뢰하는 솔루션"
  },
  {
    icon: TrendingUp,
    title: "월간 활성 사용자",
    value: "5,000+",
    subtitle: "지속적인 성장세"
  },
  {
    icon: DollarSign,
    title: "고객 유지율",
    value: "95%",
    subtitle: "높은 고객 만족도"
  },
  {
    icon: Globe,
    title: "시장 확장",
    value: "해외 진출",
    subtitle: "아시아 시장 준비 중"
  }
];

const marketData = [
  {
    title: "국내 의료 IT 시장",
    value: "2조원",
    growth: "연 12% 성장"
  },
  {
    title: "병원 디지털 전환율",
    value: "35%",
    growth: "빠른 확산 중"
  },
  {
    title: "목표 시장 점유율",
    value: "10%",
    growth: "5년 내 달성"
  }
];

interface InvestmentSectionProps {
  onPartnershipClick?: () => void;
}

export default function InvestmentSection({ onPartnershipClick }: InvestmentSectionProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    position: "",
    email: "",
    phone: "",
    investmentAmount: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Investment inquiry submitted:", formData);
    alert("투자 문의가 접수되었습니다. 곧 연락드리겠습니다.");
  };

  return (
    <section id="investment" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-6">
            함께 성장할 <span className="text-blue-400">파트너를 찾습니다</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            EasyMedi는 병원 운영의 디지털 전환을 선도하는 SaaS 플랫폼입니다.
            <br />
            미래의 의료 혁신에 함께하세요.
          </p>
        </div>

        {/* 비전 및 시장 성장성 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-4 text-blue-400">🚀 비전</h3>
              <p className="text-gray-300 leading-relaxed">
                한국의 모든 병원이 디지털 전환을 통해 더 나은 의료 서비스를 제공할 수 있도록 돕겠습니다. 
                EasyMedi는 단순한 관리 도구를 넘어, 의료진이 환자에게 더 집중할 수 있는 환경을 만드는 것이 목표입니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-6 text-blue-400">📈 시장 성장성</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {marketData.map((data, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl text-blue-400 mb-2">{data.value}</div>
                      <div className="text-sm text-gray-300 mb-1">{data.title}</div>
                      <div className="text-xs text-green-400">{data.growth}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6 text-blue-400">📊 성과 지표</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <metric.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl text-blue-400 mb-1">{metric.value}</div>
                          <div className="text-sm text-white mb-1">{metric.title}</div>
                          <div className="text-xs text-gray-400">{metric.subtitle}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl">
              <h4 className="text-xl mb-3">🎯 투자 활용 계획</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• 개발팀 확장 및 신기능 개발</li>
                <li>• 마케팅 및 영업 조직 강화</li>
                <li>• 해외 시장 진출 준비</li>
                <li>• AI/빅데이터 기술 도입</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="https://invest-eight-psi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 rounded-lg text-white font-medium transition-colors no-underline"
          >
            📄 투자 제안서 보기
          </a>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white text-lg px-8 py-4"
            onClick={onPartnershipClick}
          >
            🤝 파트너십 문의
          </Button>
        </div>

        {/* 투자 문의 폼 */}
        <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-white">
              📬 투자 문의하기
            </CardTitle>
            <p className="text-center text-gray-300">
              투자에 관심이 있으시다면 언제든 연락해주세요
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-white">회사명/기관명 *</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="○○투자, △△벤처캐피털"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName" className="text-white">담당자 이름 *</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    type="text"
                    placeholder="홍길동"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-white">직책</Label>
                  <Input
                    id="position"
                    name="position"
                    type="text"
                    placeholder="투자팀장, 파트너"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">이메일 *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@investment.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">연락처 *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investmentAmount" className="text-white">투자 관심 규모</Label>
                  <Input
                    id="investmentAmount"
                    name="investmentAmount"
                    type="text"
                    placeholder="협의 후 결정"
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">추가 문의사항</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="투자에 대한 질문이나 요청사항을 자유롭게 작성해주세요"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                투자 문의 보내기
              </Button>

              <p className="text-xs text-gray-400 text-center">
                투자 문의는 24시간 내에 답변드립니다<br />
                제공해주신 정보는 투자 상담 목적으로만 사용됩니다
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}