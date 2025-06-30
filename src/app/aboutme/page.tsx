import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import PageWrapper from '../PageWrapper'
import Image from 'next/image'

const AboutMePage = () => {
  return (
    <main className="min-h-screen flex flex-col pb-10">
      <div>
        <Header />
        <div className="flex flex-1">
        {/* Main content section */}
        <PageWrapper>
        <div className="flex-1 px-[5vw] md:px-[20vw] pt-[25vh] md:pt-[15vh] font-['Bariol_Regular']">
          <div className='flex flex-row'>
            {/* eslint-disable @next/next/no-img-element */}
            <Image
                  src="/profile.jpg"
                  alt="Hero Image"
                  className="w-[25w] md:w-[13vw] h-[15vh] md:h-[27vh] mb-6 rounded-lg"
                  width={200}
                  height={300}
                />
            <div className='mt-5 pl-3'>
                <div className="text-3xl md:text-6xl font-['Triakis']">Hello!</div>
                <div className="text-4xl md:text-8xl mt-5 font-['Triakis']"><span className='text-3xl md:text-6xl'>I&apos;m</span> Kumaran</div>
            </div>
          </div>
          <div className="text-xl md:text-3xl">A passionate developer with interest in full stack web development, building engaging UI/UX, and solving real-world problems through code.</div>
          <div className="flex flex-row gap-5 mt-5 justify-end md:justify-start">
            <Link href="/S_KUMARAN.pdf" target="_blank" rel="noopener noreferrer"><button className='rounded-full px-5 py-3 border border-white hover:text-teal-300 hover:border-teal-300 cursor-pointer'>Resume</button></Link>
            <Link href="/contactme"><button className='rounded-full px-5 py-3 border border-white hover:text-teal-300 hover:border-teal-300 cursor-pointer'>Contact Me</button></Link>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
  {/* Experience Card */}
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition-shadow duration-300">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-blue-400 text-xl">💼</span>
      <h2 className="text-2xl font-['Triakis']">Experience</h2>
    </div>
    <ul className="list-none text-base md:text-lg font-['Bariol_Regular'] space-y-4">
  <li className="relative pl-6">
    <span className="absolute left-0 top-[6px] text-blue-400">•</span>
    <div className="flex justify-between items-center">
      <div>
        <strong>Web Dev Intern</strong> @ BlueStock (May–July 2024)<br />
        <span className="text-gray-400 text-sm">Built an IPO management system using Next.js & MongoDB.</span>
      </div>
      <a href="https://drive.google.com/file/d/1uSrnwfjU_hYg3WtC9fm9nP0-NsYvo8eb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-3 text-blue-400 hover:underline text-sm flex items-center gap-1">
        View <span className="text-lg">↗</span>
      </a>
    </div>
  </li>

  <li className="relative pl-6">
    <span className="absolute left-0 top-[6px] text-blue-400">•</span>
    <div className="flex justify-between items-center">
      <div>
        <strong>GDSC Core Member</strong> @St. Martin&apos;s Eng. College<br />
        <span className="text-gray-400 text-sm">Led technical sessions and organized developer events.</span>
      </div>
      <a href="https://drive.google.com/file/d/1bGOKyzvSsCELY5h6ZpRO-HyZEVhr1Leo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-3 text-blue-400 hover:underline text-sm flex items-center gap-1">
        View <span className="text-lg">↗</span>
      </a>
    </div>
  </li>
</ul>

  </div>

  {/* Achievements Card */}
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-md hover:shadow-yellow-400/30 transition-shadow duration-300">
    <div className="flex items-center gap-2 mb-4">
      <span className="text-yellow-400 text-xl">🏆</span>
      <h2 className="text-2xl font-['Triakis']">Achievements</h2>
    </div>
    <ul className="list-disc list-inside text-base md:text-lg font-['Bariol_Regular'] space-y-2 pl-2">
      <li>
        Top 100 in <strong>Bhashini Hackathon 2025</strong> all over India (Microsoft)
      </li>
      <li>
        Top 10 in <strong>HackPrix</strong> (Emotion-based music recommendation system)
      </li>
      <li>
        Won the <strong>Swayamkrushi</strong> (Entrepreneurship event at SMEC)
      </li>
    </ul>
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

export default AboutMePage