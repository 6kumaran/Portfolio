// components/InfoCard.tsx
import React from 'react'
import { ReactNode } from 'react'

interface InfoCardProps {
  title: string
  items: string[]
  icon?: ReactNode
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items, icon }) => {
  return (
    <div className="bg-[#111111] border border-gray-700 shadow-md rounded-xl p-6 w-full md:w-[45%]">
      <div className="flex items-center gap-2 text-xl md:text-2xl font-['Triakis'] text-white mb-4">
        {icon}
        {title}
      </div>
      <ul className="list-disc list-inside text-base md:text-lg font-['Bariol_Regular'] text-gray-300 space-y-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default InfoCard
