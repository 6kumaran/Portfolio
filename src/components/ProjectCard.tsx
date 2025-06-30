'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  imageSrc: string
  title: string
  githubUrl: string
  liveUrl: string
  description: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  githubUrl,
  liveUrl,
  description,
}) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="relative w-[340px] md:w-[280px] h-[400px] md:h-[360px] perspective" onClick={() => setFlipped(!flipped)}>
      <div
        className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden pb-3 bg-black/20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
          {/* Image section (2/3) */}
          <div className="relative h-2/3 w-full">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl cursor-pointer"
            />
          </div>

          {/* Text & Buttons (1/3) */}
          <div className="h-1/3 p-3 flex flex-col justify-between">
            <div className="text-lg font-semibold text-center">{title}</div>
            <div className="flex justify-center gap-4 mt-2" onClick={(e) => e.stopPropagation()}>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex px-4 py-2 gap-2 items-center border rounded-full hover:border-blue-500 cursor-pointer hover:text-blue-500">
                  <FaGithub />GitHub
                </button>
              </a>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <button className="flex px-4 py-2 gap-2 items-center border rounded-full hover:border-green-500 cursor-pointer hover:text-green-500">
                  <ExternalLink size={16} />Live Link
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
  className="absolute w-full h-full backface-hidden rotate-y-180 bg-black rounded-xl shadow-lg p-4 cursor-pointer overflow-y-auto hover:scale-105 transition-transform duration-300 ease-in-out"
  onClick={() => setFlipped(false)}
>
  <ul className="list-disc list-inside text-lg md:text-lg font-['Triakis'] text-white space-y-2">
    {description.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
</div>

      </div>
    </div>
  )
}

export default ProjectCard
