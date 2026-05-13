import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  ClockIcon, 
  BriefcaseIcon, 
  ListBulletIcon, 
  LifebuoyIcon,
  SparklesIcon,
  RocketLaunchIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline';

export default function PlatformPage() {
  return (
    <div className="bg-white text-gray-800 font-sans w-full">
      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D4FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl font-black mb-6 leading-tight tracking-tight">Empowering Learning Without Limits</h1>
          <p className="text-gray-400 text-lg mb-8 font-medium">
            At PlovDev, we believe education should be accessible, engaging, and transformative. Our mission is to break down barriers to learning by providing high-quality courses that anyone, anywhere can access.
          </p>
          <Link to="/courses" className="inline-block bg-[#00D4FF] text-black px-8 py-4 rounded-xl font-bold hover:opacity-90 transition shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Explore Courses
          </Link>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* 5 Icons Row - Converted to Heroicons */}
        <div className="flex flex-wrap justify-center gap-12 md:justify-between items-center text-center mb-20 border-b pb-16 border-gray-100">
          <div className="flex flex-col items-center">
            <AcademicCapIcon className="w-10 h-10 mb-4 text-gray-800" />
            <h4 className="font-bold text-gray-900">Expert-led courses</h4>
            <p className="text-xs text-gray-500 font-medium">Learn from industry pros</p>
          </div>
          <div className="flex flex-col items-center">
            <ClockIcon className="w-10 h-10 mb-4 text-gray-800" />
            <h4 className="font-bold text-gray-900">Flexible Learning</h4>
            <p className="text-xs text-gray-500 font-medium">Study at your own pace</p>
          </div>
          <div className="flex flex-col items-center">
            <BriefcaseIcon className="w-10 h-10 mb-4 text-gray-800" />
            <h4 className="font-bold text-gray-900">Practical Skills</h4>
            <p className="text-xs text-gray-500 font-medium">Career-ready learning</p>
          </div>
          <div className="flex flex-col items-center">
            <ListBulletIcon className="w-10 h-10 mb-4 text-gray-800" />
            <h4 className="font-bold text-gray-900">Diverse Topics</h4>
            <p className="text-xs text-gray-500 font-medium">From code to design</p>
          </div>
          <div className="flex flex-col items-center">
            <LifebuoyIcon className="w-10 h-10 mb-4 text-gray-800" />
            <h4 className="font-bold text-gray-900">Always Here to Help</h4>
            <p className="text-xs text-gray-500 font-medium">24/7 support</p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-3xl p-8 flex flex-col h-[350px]">
            <SparklesIcon className="w-10 h-10 mb-6 mt-auto text-[#00D4FF]" />
            <h4 className="font-bold text-xl mb-4 text-gray-900">Our Vision</h4>
            <p className="text-sm text-gray-700 leading-relaxed">We envision a world where anyone with the desire to learn has the tools and opportunities to succeed.</p>
          </div>
          
          <div className="bg-[#242A38] text-white rounded-3xl p-8 flex flex-col h-[350px]">
            <RocketLaunchIcon className="w-10 h-10 mb-6 mt-auto text-gray-400" />
            <h4 className="font-bold text-xl mb-4">Our Mission</h4>
            <p className="text-sm text-gray-300 leading-relaxed">To make learning flexible, affordable, and impactful by connecting learners with practical skills.</p>
          </div>
          
          <div className="bg-gray-900 text-white rounded-3xl p-8 flex flex-col h-[350px] border border-gray-800">
            <DocumentCheckIcon className="w-10 h-10 mb-6 mt-auto text-gray-500" />
            <h4 className="font-bold text-xl mb-4">Certificate & Job-board</h4>
            <p className="text-sm text-gray-400 leading-relaxed">Earn a verifiable PDF certificate on completion and connect directly with hiring partners.</p>
          </div>
        </div>
      </main>

      {/* Dark & Cyan Stats Banner */}
      <div className="bg-gray-900 border-y border-gray-800 text-white py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#00D4FF] mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-around text-center relative z-10 gap-8">
          <div>
            <h2 className="text-5xl font-black mb-2 text-[#00D4FF] tracking-tighter">1M+</h2>
            <p className="font-medium text-gray-300 uppercase tracking-wider text-sm">Students</p>
          </div>
          <div>
            <h2 className="text-5xl font-black mb-2 text-[#00D4FF] tracking-tighter">500+</h2>
            <p className="font-medium text-gray-300 uppercase tracking-wider text-sm">Expert Instructors</p>
          </div>
          <div>
            <h2 className="text-5xl font-black mb-2 text-[#00D4FF] tracking-tighter">5000+</h2>
            <p className="font-medium text-gray-300 uppercase tracking-wider text-sm">Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}