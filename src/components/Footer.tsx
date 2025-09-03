import { Phone, Mail, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "서비스",
    links: [
      { name: "솔루션", href: "#features" },
      { name: "요금제", href: "#pricing" },
      { name: "무료체험", href: "#trial" }
    ]
  },
  {
    title: "지원",
    links: [
      { name: "고객지원", href: "#support" },
      { name: "상담문의", href: "#support" }
    ]
  }
];

interface FooterProps {
  onInvestmentClick?: () => void;
  onPartnershipClick?: () => void;
}

export default function Footer({ onInvestmentClick, onPartnershipClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* 상단 섹션 */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* 회사 정보 */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">EasyMedi</div>
                <div className="text-sm text-blue-400 -mt-1 font-medium">병원 운영 솔루션</div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              병원 운영의 디지털 전환을 선도하는 SaaS 플랫폼입니다. 
              의료진이 환자에게 더 집중할 수 있는 환경을 만들어갑니다.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">010-5263-2876</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">smclinic@easymedi.co.kr</span>
              </div>
            </div>
          </div>

          {/* 링크 섹션들 */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 투자 문의 섹션 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">투자 및 파트너십 문의</h3>
              <p className="text-blue-100">함께 성장할 파트너를 찾습니다</p>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
              <button 
                onClick={onInvestmentClick}
                className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                투자 제안서
              </button>
              <button 
                onClick={onPartnershipClick}
                className="inline-flex items-center justify-center border border-white text-gray-200 hover:text-blue-600 px-6 py-3 rounded-lg hover:bg-white transition-colors font-medium"
              >
                파트너 문의
              </button>
            </div>
          </div>
        </div>

        {/* 하단 저작권 정보 */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="text-sm text-gray-400 mb-4">
            © 2025 EasyMedi Co., Ltd. All rights reserved.
          </div>
          
          <div className="text-xs text-gray-500">
            <p>사업자등록번호: 718-01-01669 | 대표: 조석만 | 통신판매신고: 2020-화성동탄-0712</p>
            <p className="mt-2">본 사이트는 병원 관리 솔루션 정보 제공을 목적으로 하며, 의료진의 진료를 대체할 수 없습니다.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}