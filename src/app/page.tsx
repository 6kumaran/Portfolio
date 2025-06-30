import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PageWrapper from "./PageWrapper";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col pb-10">
      <div>
        <Header />
        <div className="flex flex-1">
        <PageWrapper>
        {/* Main content section */}
        <div className="flex-1 px-[5vw] md:px-[20vw] pt-[35vh] md:pt-[20vh] font-['Bariol_Regular']">
          {children}
          <div className="text-5xl md:text-8xl font-['Triakis']">Hey,</div>
          <div className="text-3xl md:text-5xl">Looking for a Frontend Developer with AI skills?</div>
          <div className="text-xl md:text-2xl mb-5">Psst... You&apos;ve come to the right place...</div>
          <Link href="/aboutme"><button className="py-3 px-5 cursor-pointer rounded-full border border-white hover:text-teal-300 hover:border-teal-300">Discover more</button></Link>
        </div>
        </PageWrapper>
        {/* Navbar (visible from md and up) */}
        
        <Navbar />
      </div>
      </div>
    </main>
  );
}