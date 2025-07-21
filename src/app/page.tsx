import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";
import PageWrapper from "./PageWrapper";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pb-10">
      <div>
        <Header />
        <div className="flex flex-1">
        <PageWrapper>
        {/* Main content section */}
        <div className="flex-1 px-[5vw] md:px-[20vw] pt-[35vh] md:pt-[20vh] font-['Bariol_Regular']">
          <div className="text-5xl md:text-8xl font-['Triakis']">Hey,</div>
          <div className="text-3xl md:text-5xl">Looking for a Frontend Developer with AI skills?</div>
          <div className="text-xl md:text-2xl mb-5">Psst... You&apos;ve come to the right place...</div>
          <Link href="/aboutme"><button className="py-3 px-5 cursor-pointer rounded-full border border-white hover:text-orange-300 hover:border-orange-300">Discover more</button></Link>
          <div className="text-right mt-3 text-lg md:text-lg font-['Triakis']">
            <div>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”</div>
            <div>— Martin Fowler</div>
          </div>
        </div>
        </PageWrapper>
        {/* Navbar (visible from md and up) */}
        
        <Navbar />
      </div>
      </div>
    </main>
  );
}