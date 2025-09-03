import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "30일 무료 체험",
    description: "충분한 시간으로 모든 기능을 완벽하게 테스트"
  },
  {
    icon: Shield,
    title: "설치비 무료",
    description: "초기 비용 부담 없이 바로 시작 가능"
  },
  {
    icon: Users,
    title: "전담 지원팀",
    description: "체험 기간 동안 1:1 맞춤 지원 제공"
  },
  {
    icon: CheckCircle,
    title: "데이터 이관",
    description: "기존 시스템 데이터 완벽 이관 지원"
  }
];

export default function TrialSection() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    contactName: "",
    phone: "",
    email: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log("Form submitted:", formData);
    alert("무료 체험 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.");
  };

  return (
    <section id="trial" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
            🎉 무료 체험 이벤트
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-green-600">30일간</span>, 모든 기능을 무료로 사용해보세요
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            설치비도, 교육비도 무료. 병원 운영의 혁신적인 변화를 직접 경험해보세요
            <br />전담 매니저가 도입부터 활용까지 완벽 지원합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 혜택 소개 */}
          <div className="space-y-8">
            <h3 className="text-2xl text-gray-900">무료 체험 혜택</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg mb-2 text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <h4 className="text-xl font-semibold mb-4 text-blue-900">🎯 30일 체험 기간 중 제공되는 서비스</h4>
              <ul className="space-y-3 text-blue-800">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">전 직원 대상 사용법 교육 (현장/온라인)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">기존 시스템 데이터 완벽 이관</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">병원 맞춤 설정 및 최적화</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">24시간 전담 기술 지원</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 신청 폼 */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">
                무료 체험 신청하기
              </CardTitle>
              <p className="text-center text-gray-600">
                간단한 정보만 입력하시면 담당자가 연락드립니다
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="hospitalName">병원명 *</Label>
                  <Input
                    id="hospitalName"
                    name="hospitalName"
                    type="text"
                    placeholder="○○의원, △△병원"
                    value={formData.hospitalName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName">담당자 이름 *</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    type="text"
                    placeholder="홍길동"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">연락처 *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@hospital.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                  무료 체험 신청하기
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  신청 후 24시간 내에 담당자가 연락드립니다<br />
                  개인정보는 상담 목적으로만 사용됩니다
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 p-12 rounded-3xl text-center border border-green-200">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">⏰ 지금 신청하면 특별 혜택!</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-5xl mb-4">📅</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">30일 → 45일</div>
              <div className="text-gray-600">체험 기간 무료 연장</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">무료 교육</div>
              <div className="text-gray-600">전 직원 대상 맞춤 교육</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="text-5xl mb-4">🎁</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">첫 1년 할인</div>
              <div className="text-gray-600">정식 도입 시 20% 할인</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}