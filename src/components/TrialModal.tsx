import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface TrialModalProps {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
}

export default function TrialModal({ trigger, children }: TrialModalProps) {
  const [isOpen, setIsOpen] = useState(false);
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
    console.log("Trial form submitted:", formData);
    toast.success("무료 체험 신청이 완료되었습니다! 담당자가 곧 연락드리겠습니다.");
    setIsOpen(false);
    // 폼 리셋
    setFormData({
      hospitalName: "",
      contactName: "",
      phone: "",
      email: ""
    });
  };

  const triggerButton = trigger || children || (
    <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-white font-medium h-12">
      <ArrowRight className="w-5 h-5" />
      30일 무료체험 신청
    </button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-gray-900">
            30일 무료체험 신청
          </DialogTitle>
          <p className="text-center text-gray-600 text-sm">
            간단한 정보만 입력하시면 담당자가 연락드립니다
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="hospitalName">병원명 *</Label>
            <Input
              id="hospitalName"
              name="hospitalName"
              type="text"
              placeholder="○○의원, △���병원"
              value={formData.hospitalName}
              onChange={handleInputChange}
              required
              className="rounded-lg"
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
              className="rounded-lg"
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
              className="rounded-lg"
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
              className="rounded-lg"
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800">
                <div className="font-medium mb-1">무료 체험 혜택</div>
                <ul className="text-xs space-y-1">
                  <li>• 30일 모든 기능 무료 사용</li>
                  <li>• 설치비, 교육비 무료</li>
                  <li>• 전담 매니저 지원</li>
                  <li>• 데이터 이관 지원</li>
                </ul>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
            무료 체험 신청하기
          </Button>

          <p className="text-xs text-gray-500 text-center">
            신청 후 24시간 내에 담당자가 연락드립니다<br />
            개인정보는 상담 목적으로만 사용됩니다
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}