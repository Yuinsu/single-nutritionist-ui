import React, { useState } from 'react';
import { FileUp, Loader2 } from 'lucide-react';
import OcrResult from './OcrResult'; // 💡 팝업창 컴포넌트 불러오기

const UploadCard = () => {
  const [fileName, setFileName] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // 💡 팝업창을 띄울지 말지 결정하는 상태 스위치
  const [showResultModal, setShowResultModal] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]; 
    
    if (file) {
      setFileName(file.name);
      setIsUploading(true);
      
      // 1.5초 뒤 로딩이 끝나면 업로드 상태를 끄고 팝업창을 켭니다!
      setTimeout(() => {
        setIsUploading(false);
        setShowResultModal(true); 
      }, 1500);
    }
    // 같은 파일을 다시 올려도 반응하도록 초기화
    e.target.value = '';
  };

  return (
    <>
      <div className="bg-white p-10 rounded-[50px] shadow-sm border border-orange-100 flex flex-col items-center h-full min-h-[450px]">
        <h2 className="text-4xl font-extrabold text-[#5D4037] mb-6">데이터 업로드</h2>
        
        <div className="relative group flex flex-col items-center mb-8 flex-grow justify-center">
          <div className="w-48 h-56 bg-[#FDF2F0] rounded-[40px] flex items-center justify-center border-2 border-dashed border-orange-200 transition-all group-hover:bg-orange-50 overflow-hidden shadow-inner">
            
            {isUploading ? (
               <div className="flex flex-col items-center gap-3">
                 <Loader2 size={40} className="text-orange-400 animate-spin" />
                 <p className="text-sm text-gray-500 font-bold">분석 중...</p>
               </div>
            ) : fileName ? (
               <div className="text-center p-4">
                  <p className="text-orange-600 font-bold truncate w-32">{fileName}</p>
                  <p className="text-xs text-gray-400 mt-2">인식 완료</p>
               </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-md">
                  <FileUp size={60} className="text-orange-300" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex justify-center mt-auto">
          <label 
            htmlFor="file-upload" 
            className={`px-8 py-3 rounded-xl font-bold cursor-pointer transition-all shadow-md inline-block text-center
              ${isUploading 
                ? 'bg-gray-300 text-gray-500 pointer-events-none' 
                : 'bg-[#A1887F] text-white hover:bg-[#8D6E63]'
              }`}
          >
            {isUploading ? '처리 중...' : '영수증 선택'}
          </label>
          <input 
            id="file-upload" 
            type="file" 
            className="hidden" 
            onChange={handleFileChange} 
            accept="image/*" 
            disabled={isUploading}
          />
        </div>
      </div>

      {/* 💡 showResultModal이 true가 되면 OcrResult 팝업이 화면에 나타납니다 */}
      {showResultModal && (
        <OcrResult onClose={() => setShowResultModal(false)} />
      )}
    </>
  );
};

export default UploadCard;