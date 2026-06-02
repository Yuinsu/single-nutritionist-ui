import React from 'react';
import { CheckCircle2 } from 'lucide-react';

// onClose 프롭스는 UploadCard에서 팝업창을 닫을 때 사용됩니다.
const OcrResult = ({ onClose }) => {
  // [백엔드 대비] 영수증에서 읽어온 가짜 데이터
  const detectedItems = [
    { name: '닭가슴살 팩', price: 5500 },
    { name: '햇반 210g', price: 1800 },
    { name: '양파 1망', price: 3200 },
    { name: '종가집 김치', price: 8900 }
  ];

  const totalPrice = detectedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    // 배경을 어둡게 하고 팝업을 화면 중앙에 띄우는 설정
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      {/* 팝업창 본체 */}
      <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in zoom-in duration-200">
        
        <div className="flex flex-col items-center mb-6">
          <CheckCircle2 size={50} className="text-green-500 mb-3" />
          <h2 className="text-2xl font-black text-[#5D4037]">영수증 분석 완료!</h2>
          <p className="text-gray-500 text-sm mt-1">다음 식재료들이 성공적으로 등록되었습니다.</p>
        </div>

        {/* 인식된 리스트 보여주기 */}
        <div className="bg-[#FFF9E7] p-4 rounded-2xl mb-6 max-h-48 overflow-y-auto">
          {detectedItems.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-orange-100 last:border-0">
              <span className="font-bold text-gray-700 text-sm">{item.name}</span>
              <span className="text-orange-600 font-bold text-sm">{item.price.toLocaleString()}원</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8 px-2">
          <span className="font-bold text-gray-500">총 구매 금액</span>
          <span className="text-xl font-black text-[#5D4037]">{totalPrice.toLocaleString()}원</span>
        </div>

        {/* 닫기 / 저장 버튼 */}
        <div className="flex gap-3">
          <button 
            onClick={onClose} 
            className="flex-1 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            다시 찍기
          </button>
          <button 
            onClick={onClose} 
            className="flex-1 py-3 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 transition-colors shadow-md"
          >
            식재료함에 저장
          </button>
        </div>

      </div>
    </div>
  );
};

export default OcrResult;