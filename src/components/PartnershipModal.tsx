import { X, Building2, Handshake, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnershipModal({ isOpen, onClose }: PartnershipModalProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });

  if (!isOpen) return null;



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("파트너십 문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Handshake className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">파트너십 문의</h2>
              <p className="text-purple-100 mt-1">함께 성장할 파트너가 되어주세요</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* 파트너십 유형 안내 */}
        <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">파트너십 유형</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <Building2 className="w-8 h-8 text-purple-600" />
              <div>
                <div className="font-medium text-gray-800">기술 파트너</div>
                <div className="text-sm text-gray-600">API 연동, 솔루션 통합</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <Handshake className="w-8 h-8 text-blue-600" />
              <div>
                <div className="font-medium text-gray-800">사업 파트너</div>
                <div className="text-sm text-gray-600">총판, 대리점, 협력사</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
              <Mail className="w-8 h-8 text-green-600" />
              <div>
                <div className="font-medium text-gray-800">마케팅 파트너</div>
                <div className="text-sm text-gray-600">홍보, 마케팅 협력</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 문의 폼 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">회사명 *</label>
              <Input
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                placeholder="회사명을 입력해주세요"
                required
                className="border-gray-300 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">담당자명 *</label>
              <Input
                value={formData.contactName}
                onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                placeholder="담당자명을 입력해주세요"
                required
                className="border-gray-300 focus:border-purple-500"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">이메일 *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="example@company.com"
                required
                className="border-gray-300 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">연락처</label>
              <Input
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="010-1234-5678"
                className="border-gray-300 focus:border-purple-500"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">희망 파트너십 유형</label>
            <select
              value={formData.partnershipType}
              onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 bg-white"
            >
              <option value="">파트너십 유형을 선택해주세요</option>
              <option value="tech">기술 파트너</option>
              <option value="business">사업 파트너</option>
              <option value="marketing">마케팅 파트너</option>
              <option value="investment">투자 파트너</option>
              <option value="other">기타</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">문의 내용 *</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="파트너십에 대한 구체적인 문의사항을 작성해주세요"
              rows={4}
              required
              className="border-gray-300 focus:border-purple-500 resize-none"
            />
          </div>
          
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <div className="flex space-x-3">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6"
              >
                취소
              </Button>
              <Button
                type="submit"
                className="px-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                문의 접수
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}