import { useState, useEffect } from "react";
import { X, ExternalLink, FileText, AlertCircle } from "lucide-react";

interface InvestmentProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvestmentProposalModal({ isOpen, onClose }: InvestmentProposalModalProps) {
  const [showIframe, setShowIframe] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setShowIframe(true);
      setIframeError(false);
      
      // 3초 후에 iframe이 로딩되지 않으면 대체 콘텐츠 표시
      const timer = setTimeout(() => {
        if (!iframeError) {
          console.log('iframe 로딩 완료');
        }
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, iframeError]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-7xl h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* 헤더 */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div>
            <h2 className="text-2xl font-bold">EasyMedi 투자 제안서</h2>
            <p className="text-blue-100 mt-1">병원 운영 솔루션의 미래를 함께 만들어가세요</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* 콘텐츠 영역 */}
        <div className="flex-1 relative">
          {showIframe && !iframeError && (
            <iframe
              src="/investment-proposal.html"
              className="w-full h-full border-0"
              title="EasyMedi 투자 제안서"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation allow-top-navigation allow-modals"
              onError={() => {
                console.error('iframe 로딩 실패');
                setIframeError(true);
              }}
              onLoad={() => {
                console.log('iframe 로딩 성공');
                setIframeError(false);
              }}
            />
          )}
          
          {/* 대체 콘텐츠 - iframe 로딩 실패시 또는 5초 후 */}
          {(iframeError || !showIframe) && (
            <div className="flex-1 h-full overflow-y-auto p-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* 투자 제안서 안내 */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="w-12 h-12 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">EasyMedi 투자 제안서</h3>
                      <p className="text-gray-600 mb-6">
                        병원 운영 솔루션의 혁신적인 미래를 함께 만들어갑니다
                      </p>
                      {iframeError && (
                        <div className="flex items-center justify-center space-x-2 text-amber-600 mb-4">
                          <AlertCircle className="w-5 h-5" />
                          <span className="text-sm">문서를 직접 로딩할 수 없습니다. 새 탭에서 확인해주세요.</span>
                        </div>
                      )}
                    </div>
                    <a
                      href="/investment-proposal.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      투자 제안서 전체 보기
                    </a>
                  </div>
                </div>

                {/* 요약 정보 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">투자 하이라이트</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>병원 운영의 디지털 전환 선도</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>SaaS 기반 올인원 솔루션</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>의료진 업무 효율성 300% 향상</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>월 구독형 안정적 수익 모델</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">시장 기회</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>국내 의료 IT 시장 연 15% 성장</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>디지털 헬스케어 정부 지원 확대</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>코로나19 이후 비대면 의료 급성장</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>중소병원 대상 블루오션 시장</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 행동 유도 */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
                  <h4 className="text-xl font-bold mb-4">투자 문의</h4>
                  <p className="text-blue-100 mb-6">
                    EasyMedi의 성장 스토리에 함께하고 싶으시다면<br />
                    언제든 연락주세요
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:investment@easymedi.co.kr"
                      className="inline-flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium no-underline"
                    >
                      이메일 문의
                    </a>
                    <a
                      href="tel:02-1234-5678"
                      className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium no-underline"
                    >
                      전화 문의
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}