import { Link } from 'react-router-dom';
import CourseCard from '../../components/courses/CourseCard';

export default function HomePage() {
  // Mock data mapping for the "Most popular right now" section
  const popularCourses = Array(5).fill({
    category: "Python • Top Rated",
    title: "Complete Python Bootcamp: Zero to Hero",
    instructor: "Heng Alexander",
    rating: 4.8,
    reviews: 1250,
    price: "14.99"
  });

  return (
    <div className="bg-white text-gray-800 font-sans flex flex-col w-full">

      {/* Hero Section with Glassmorphism Glow */}
      <section className="bg-black text-white py-32 px-8 relative overflow-hidden">
        
        {/* The Cyan Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00D4FF] rounded-full mix-blend-screen filter blur-[128px] opacity-20 pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
            Code Smarter.<br />Build <span className="text-[#00D4FF]">Real Skills.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl font-medium">
            PlovDev is the structured learning platform for beginner and junior developers — video courses, AI recommendations, certificates, and a job board to help you land your first dev role.
          </p>
          <Link 
            to="/courses"
            className="inline-block bg-[#00D4FF] text-black px-8 py-4 rounded-xl font-black hover:opacity-90 transition shadow-[0_0_20px_rgba(0,212,255,0.4)] text-lg tracking-wide"
          >
            Explore Courses
          </Link>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-8 py-20 space-y-24 w-full">
        
        {/* Browse Categories - Upgraded to SaaS Style */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">Browse Categories</h3>
            <Link to="/courses" className="text-[#00D4FF] font-bold text-sm hover:underline">See all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group">
              <i className="fa-brands fa-python text-3xl text-gray-400 group-hover:text-[#00D4FF] transition-colors"></i>
              <div>
                <h4 className="font-bold text-gray-900">Python</h4>
                <p className="text-xs text-gray-500">12 courses</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group">
              <i className="fa-brands fa-java text-3xl text-gray-400 group-hover:text-[#00D4FF] transition-colors"></i>
              <div>
                <h4 className="font-bold text-gray-900">Java</h4>
                <p className="text-xs text-gray-500">10 courses</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group">
              <i className="fa-brands fa-html5 text-3xl text-gray-400 group-hover:text-[#00D4FF] transition-colors"></i>
              <div>
                <h4 className="font-bold text-gray-900">HTML</h4>
                <p className="text-xs text-gray-500">15 courses</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group">
              <i className="fa-brands fa-css3-alt text-3xl text-gray-400 group-hover:text-[#00D4FF] transition-colors"></i>
              <div>
                <h4 className="font-bold text-gray-900">CSS</h4>
                <p className="text-xs text-gray-500">15 courses</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group">
              <i className="fa-solid fa-code text-3xl text-gray-400 group-hover:text-[#00D4FF] transition-colors"></i>
              <div>
                <h4 className="font-bold text-gray-900">C#</h4>
                <p className="text-xs text-gray-500">11 courses</p>
              </div>
            </div>

          </div>
        </section>

        {/* Most Popular Right Now */}
        <section>
          <h3 className="text-2xl font-bold mb-8">Most popular right now</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {popularCourses.map((course, index) => (
              <CourseCard 
                key={index}
                category={course.category}
                title={course.title}
                instructor={course.instructor}
                rating={course.rating}
                reviews={course.reviews}
                price={course.price}
              />
            ))}
          </div>
        </section>

        {/* Your Goal. Our Mission. */}
        <section>
          <h3 className="text-2xl font-bold mb-8">Your goal. Our mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-3xl p-8 flex flex-col h-[350px]">
              <div className="text-4xl mb-6 mt-auto text-[#00D4FF]"><i className="fa-solid fa-bullseye"></i></div>
              <h4 className="font-bold text-xl mb-4 text-gray-900">Our Vision</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                We envision a world where anyone with the desire to learn has the tools and opportunities to succeed—regardless of location, background, or financial situation.
              </p>
            </div>

            <div className="bg-[#242A38] text-white rounded-3xl p-8 flex flex-col h-[350px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="text-4xl mb-6 mt-auto text-gray-400"><i className="fa-solid fa-rocket"></i></div>
              <h4 className="font-bold text-xl mb-4">Our Mission</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                To make learning flexible, affordable, and impactful by connecting learners with expert knowledge and practical skills that matter in the real world.
              </p>
            </div>

            <div className="bg-gray-900 text-white border border-gray-800 rounded-3xl p-8 flex flex-col h-[350px]">
              <div className="text-4xl mb-6 mt-auto text-gray-500"><i className="fa-solid fa-certificate"></i></div>
              <h4 className="font-bold text-xl mb-4">Certificate & Job Board</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Earn a verifiable PDF certificate on completion. Then use the PlovDev Job Board to apply directly to hiring partners in Cambodia.
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}