import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  BriefcaseIcon, 
  MapPinIcon, 
  UserIcon, 
  EnvelopeIcon, 
  CalendarIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

export default function JobBoardPage() {
  const mockJobs = [
    {
      title: "Frontend Engineer",
      company: "TechCorp Cambodia",
      type: "Full-Time",
      location: "Phnom Penh",
      salary: "$500 - $800",
      description: "We're looking for a talented frontend engineer to join our growing team. You'll work with React, modern web technologies, and build user-facing features for enterprise clients.",
      hrName: "Sok Dara",
      hrEmail: "hr.techcorp@gmail.com",
      published: "Oct 12, 2026",
      skills: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Python Backend Developer",
      company: "Digital Solutions Ltd",
      type: "Contract",
      location: "Remote",
      salary: "$600 - $900",
      description: "Build scalable backend systems using Python and Django. Work with APIs, databases, and cloud infrastructure in a highly collaborative remote environment.",
      hrName: "Chan Vattey",
      hrEmail: "careers.dsl@gmail.com",
      published: "Oct 10, 2026",
      skills: ["Python", "Django", "PostgreSQL"]
    }
  ];

  return (
    <div className="bg-gray-50 flex flex-col font-sans w-full">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-black mb-4 tracking-tight">Developer Job Board<br />in Cambodia</h1>
          <p className="text-gray-500 font-medium">Opportunities from top tech companies. Exclusive for PlovDev graduates and developers.</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 relative flex shadow-sm">
            <MagnifyingGlassIcon className="w-6 h-6 absolute left-4 top-4 text-gray-400" />
            <input 
              type="text" 
              className="pl-12 pr-24 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] w-full transition-all" 
              placeholder="Search by title, skills, or company..." 
            />
            <button className="absolute right-2 top-2 bg-[#00D4FF] text-black px-6 py-1.5 rounded-lg font-bold hover:opacity-90 transition">Search</button>
          </div>
        </div>
      </section>

      {/* Job Board Section */}
      <main className="flex-1 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center mt-8 mb-6">
            <h2 className="text-2xl font-bold">Latest Opportunities</h2>
            <div className="text-sm text-gray-500 font-medium">Showing <span className="text-black font-bold">{mockJobs.length}</span> active jobs</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 flex flex-col hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 gap-2 font-medium">
                      <span className="text-gray-800">{job.company}</span>
                      <span>•</span>
                      <span className="flex items-center"><BriefcaseIcon className="w-4 h-4 text-gray-400 mr-1" /> {job.type}</span>
                      <span>•</span>
                      <span className="flex items-center"><MapPinIcon className="w-4 h-4 text-gray-400 mr-1" /> {job.location}</span>
                    </div>
                  </div>
                  {/* Updated Salary Badge */}
                  <div className="text-[#00D4FF] font-black bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1.5 rounded-lg text-sm shrink-0 whitespace-nowrap">{job.salary}</div>
                </div>

                <p className="text-sm text-gray-600 mb-5 line-clamp-2">{job.description}</p>

                <div className="bg-gray-50 rounded-2xl p-4 mt-auto mb-5 text-sm text-gray-600 space-y-3 border border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500"><UserIcon className="w-3 h-3" /></div>
                      <span><strong>HR:</strong> {job.hrName}</span>
                    </div>
                    <span className="text-gray-500 flex items-center"><EnvelopeIcon className="w-4 h-4 text-gray-400 mr-1.5" /> {job.hrEmail}</span>
                  </div>
                  <div className="border-t border-gray-200"></div>
                  <div className="text-xs font-medium text-gray-500 flex items-center">
                    <CalendarIcon className="w-4 h-4 text-gray-400 mr-1.5" /> Published: {job.published}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg text-xs font-bold">{skill}</span>
                  ))}
                </div>

                <Link to="#" className="w-full bg-black text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition flex justify-center items-center gap-2">
                  Apply Now <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}