import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// 💡 1. 영양소별 통일된 색상 관리 (유지보수가 훨씬 편해집니다!)
const NUTRIENT_COLORS = {
  탄수화물: '#8884d8',
  단백질: '#82ca9d',
  지방: '#ffc658',
  비타민: '#ff8042'
};

// 💡 2. 일일 권장량 목표 (퍼센트 계산을 위한 가상의 기준값)
const DAILY_GOAL = {
  탄수화물: 130, // 130g
  단백질: 60,    // 60g
  지방: 50,      // 50g
  비타민: 100    // 100g
};

// 주차별 영양소 누적 내용
const weeklyStackedData = [
  { name: '일', 탄수화물: 75, 단백질: 60, 지방: 40, 비타민: 80, 목표달성: 80 },
  { name: '월', 탄수화물: 100, 단백질: 80, 지방: 50, 비타민: 65, 목표달성: 100 },
  { name: '화', 탄수화물: 120, 단백질: 55, 지방: 70, 비타민: 45, 목표달성: 110 },
  { name: '수', 탄수화물: 80, 단백질: 90, 지방: 60, 비타민: 70, 목표달성: 90 },
  { name: '목', 탄수화물: 95, 단백질: 70, 지방: 45, 비타민: 55, 목표달성: 95 },
  { name: '금', 탄수화물: 110, 단백질: 85, 지방: 55, 비타민: 80, 목표달성: 115 },
  { name: '토', 탄수화물: 90, 단백질: 65, 지방: 40, 비타민: 60, 목표달성: 85 },
];

// 영수증 OCR로 분석된 '재료별 영양소' 데이터
const receiptIngredientsData = {
  id: "RE123456",
  date: "2024-04-15",
  totalNutrition: { 탄수화물: 85, 단백질: 52, 지방: 15, 비타민: 25 }, // 값 현실성 있게 조정
  ingredients: [
    { name: "닭가슴살", 탄수화물: 0, 단백질: 31, 지방: 3, 비타민: 1 },
    { name: "햇반", 탄수화물: 68, 단백질: 5, 지방: 1, 비타민: 0 },
    { name: "양파", 탄수화물: 10, 단백질: 1, 지방: 0, 비타민: 4 },
    { name: "김치", 탄수화물: 5, 단백질: 2, 지방: 0, 비타민: 15 },
    { name: "계란", 탄수화물: 2, 단백질: 13, 지방: 11, 비타민: 5 },
  ],
};

// 원형 퍼센트 표시용 컴포넌트
const CircleProgress = ({ label, percent, color, value }) => {
  // 💡 100%가 넘어갈 경우 원형 UI가 깨지지 않도록 최대 100으로 제한
  const safePercent = Math.min(percent, 100); 
  const strokeDashoffset = 226 - (226 * safePercent) / 100;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 flex items-center justify-center group cursor-pointer">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r="36" stroke="#f0f0f0" strokeWidth="8" fill="transparent" />
          <circle 
            cx="48" cy="48" r="36" stroke={color} strokeWidth="8" fill="transparent"
            strokeDasharray="226" strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out" 
          />
        </svg>
        {/* 중앙 데이터 (호버 시 부드럽게 교차 전환) */}
        <span className="absolute text-lg font-bold text-gray-800 transition-opacity duration-300 group-hover:opacity-0">
          {percent}%
        </span>
        <span className="absolute text-sm font-black text-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
          {value}g
        </span>
      </div>
      <span className="mt-2 font-medium text-gray-600">{label}</span>
    </div>
  );
};

const AnalysisCard = () => {
  return (
    <div className="bg-white p-10 rounded-[50px] shadow-sm border border-orange-100 flex flex-col h-full min-h-[450px]">
      
      {/* 상단 헤더 영역 */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-extrabold text-[#5D4037]">영양 분석 리포트</h2>
        <span className="text-gray-400 font-medium">24.04.12 ~ 24.04.18</span>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 flex-grow">
        
        {/* 왼쪽: 주차별 영양소 누적 막대 그래프 */}
        <div className="flex-1 min-h-[300px] bg-[#FFFBFB] p-4 rounded-3xl border border-orange-50 flex flex-col">
          <p className="text-sm font-bold mb-4 text-gray-500">주차별 영양소 누적 (g)</p>
          <div className="flex-grow w-full h-full"> 
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyStackedData} barCategoryGap="25%">
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#fcfcfc'}} contentStyle={{borderRadius: '15px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Legend iconType="circle" iconSize={10} wrapperStyle={{paddingTop: '10px', fontSize: '12px'}} />
                
                {/* 상수화된 색상 적용 */}
                <Bar dataKey="탄수화물" stackId="a" fill={NUTRIENT_COLORS.탄수화물} radius={[0, 0, 0, 0]} />
                <Bar dataKey="단백질" stackId="a" fill={NUTRIENT_COLORS.단백질} radius={[0, 0, 0, 0]} />
                <Bar dataKey="지방" stackId="a" fill={NUTRIENT_COLORS.지방} radius={[0, 0, 0, 0]} />
                <Bar dataKey="비타민" stackId="a" fill={NUTRIENT_COLORS.비타민} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 오른쪽: 이번 영수증 영양소 (요약 및 리스트) */}
        <div className="flex flex-col gap-6 justify-center flex-1">
          <p className="text-sm font-bold text-gray-500 text-center">이번 영수증 영양소 (목표 대비)</p>
          
          {/* 💡 .map()을 활용한 요약 원형 그래프 동적 렌더링 */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(receiptIngredientsData.totalNutrition).map(([key, value]) => {
              // 실제 g 수를 권장량 대비 퍼센트로 변환 (정수형)
              const calculatedPercent = Math.round((value / DAILY_GOAL[key]) * 100);
              
              return (
                <CircleProgress 
                  key={key}
                  label={key} 
                  percent={calculatedPercent} 
                  color={NUTRIENT_COLORS[key]} 
                  value={value} 
                />
              );
            })}
          </div>

          {/* 재료별 상세 영양소 리스트 */}
          <div className="bg-[#FFFBFB] p-4 rounded-3xl border border-orange-50 h-[150px] overflow-y-auto shadow-inner flex-grow">
            <p className="text-xs font-bold mb-3 text-gray-400">재료별 상세 (g)</p>
            <div className="flex flex-col gap-2.5">
              {receiptIngredientsData.ingredients.map((ing, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-gray-100 pb-1.5 last:border-none">
                  <span className="font-bold text-[#5D4037]">{ing.name}</span>
                  <div className="flex gap-2 text-xs font-medium text-gray-500">
                    <span style={{color: NUTRIENT_COLORS.탄수화물}}>탄:{ing.탄수화물}</span>
                    <span style={{color: NUTRIENT_COLORS.단백질}}>단:{ing.단백질}</span>
                    <span style={{color: NUTRIENT_COLORS.지방}}>지:{ing.지방}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnalysisCard;