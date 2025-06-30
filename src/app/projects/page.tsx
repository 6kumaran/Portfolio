import React from 'react'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import PageWrapper from '../PageWrapper'

const Page = ({ children }: { children: React.ReactNode }) => {
    const projects = [
  {
    imageSrc: "/Convergence.png",
    title: "Convergence",
    githubUrl: "https://github.com/6kumaran/Convergence",
    liveUrl: "https://convergence-nine.vercel.app",
    description: ["A responsive website for Convergence, a tech fest."," Built with Next.js & Tailwind CSS to improve user engagement and experience."],
  },
  {
    imageSrc: "/P1.jpg",
    title: "Song Recommendation System ",
    githubUrl: "https://github.com/6kumaran/HackPrix",
    liveUrl: "https://github.com/6kumaran/HackPrix",
    description: ["An emotion-based song recommendation system using Python, CV2, and TensorFlow."," It uses a CNN model to classify emotions from video feed and recommends songs accordingly."],
  },
  {
    imageSrc: "/Hyrio.png",
    title: "Hyrio.Ai Project",
    githubUrl: "https://github.com/6kumaran/Hyrio.Ai",
    liveUrl: "https://hyrio-nvkbsz76w-kumarans-projects-a5152f48.vercel.app/",
    description: ["A project for Hyrio.Ai, showcasing my skills in web development."," Highlighting features like checkpointing and character count along with responsive desgin."],
  },
  {
    imageSrc: "/BlueStock.png",
    title: "IPO Management at BlueStock",
    githubUrl: "https://github.com/6kumaran/BlueStock",
    liveUrl: "https://drive.google.com/file/d/1uSrnwfjU_hYg3WtC9fm9nP0-NsYvo8eb/view?usp=drive_link",
    description: ["An IPO management system for BlueStock, built with Next, Node.js and MongoDB."," It allows users to view and manage IPOs efficiently."],
  },
  {
    imageSrc: "/Kanoon_Game.jpeg",
    title: "Kanoon Game",
    githubUrl: "https://github.com/6kumaran/Kanoon_Game",
    liveUrl: "https://github.com/6kumaran/Kanoon_Game",
    description: ["A mobile game app built with React Native. It helps in promoting legal awareness through engaging games."," Built for Bashabandu hackathon organized by Microsoft."],
  },
  // Add more projects here...
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
          <div className="text-4xl md:text-6xl font-['Triakis']">Projects</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mr-10 font-['Bariol_Regular']">
  {projects.map((project, index) => (
    <ProjectCard
      key={index}
      imageSrc={project.imageSrc}
      title={project.title}
      githubUrl={project.githubUrl}
      liveUrl={project.liveUrl}
      description={project.description}
    />
  ))}
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