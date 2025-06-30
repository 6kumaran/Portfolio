import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'
import PageWrapper from '../PageWrapper'
import SkillChart from '@/components/SkillChart'

const Page = ({ children }: { children: React.ReactNode }) => {
    const technicalSkills = [
  { skill: 'JavaScript', percent: 70 },
  { skill: 'React', percent: 65 },
  { skill: 'Node.js', percent: 60 },
  { skill: 'Next.js', percent: 60 },
  { skill: 'MySQL', percent: 70 },
  { skill: 'MongoDB', percent: 60 },
  { skill: 'ML', percent: 40 },

]

const nonTechnicalSkills = [
  { skill: 'Communication', percent: 85 },
  { skill: 'Teamwork', percent: 90 },
  { skill: 'Leadership', percent: 80 },
  { skill: 'Time Management', percent: 70 },
]
  return (
    <main className="min-h-screen flex flex-col pb-10">
      <div>
        <Header />
        <div className="flex flex-1">
        {/* Main content section */}
        <PageWrapper>
        <div className="flex-1 px-[5vw] md:px-[7vw] pt-[8vh] md:pt-[10vh]">
          {children}
          <div className="text-4xl md:text-6xl font-['Triakis']">Skills</div>
          <div className="mt-6 font-['Bariol_Regular']">
  <div className="text-2xl md:text-3xl mb-4">Technical Skills</div>
  <div className="py-3 flex flex-wrap justify-center gap-6">
    {technicalSkills.map((skill, idx) => (
      <SkillChart key={idx} skill={skill.skill} percent={skill.percent} />
    ))}
  </div>

  <div className="text-2xl md:text-3xl mt-6 mb-4">Non-Technical Skills</div>
  <div className="py-3 flex flex-wrap justify-center gap-6">
    {nonTechnicalSkills.map((skill, idx) => (
      <SkillChart key={idx} skill={skill.skill} percent={skill.percent} />
    ))}
  </div>
</div>

        </div>
        </PageWrapper>
        {/* Navbar (visible from md and up) */}
        
        <Navbar />
      </div>
      </div>
    </main>
  )
}

export default Page