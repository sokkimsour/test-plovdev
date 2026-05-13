import { useState } from 'react';
import CourseCard from '../../components/courses/CourseCard';

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All Courses');

  const mockCourses = Array(12).fill({
    category: "Python",
    title: "Complete Python Bootcamp: Zero to Hero",
    instructor: "Heng Alexander",
    rating: 4.8,
    reviews: 1250,
    price: "14.99"
  });

  const filters = ['All Courses', 'Python', 'JavaScript', 'React', 'Backend'];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans w-full">

      {/* Hero Section with Glassmorphism Glow */}
      <section className="bg-black text-white py-16 px-8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00D4FF] rounded-full mix-blend-screen filter blur-[128px] opacity-15 pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl font-black mb-4 tracking-tight">AI and Coding<br />Course</h1>
          <p className="text-gray-400 mb-10 font-medium">Explore courses from experienced, real-world experts.</p>
          <div className="flex gap-12 text-center">
            <div>
              <h3 className="text-3xl font-black text-[#00D4FF]">100+</h3>
              <p className="text-gray-400 text-sm">Courses</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#00D4FF]">1000+</h3>
              <p className="text-gray-400 text-sm">Video Lessons</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#00D4FF]">1M+</h3>
              <p className="text-gray-400 text-sm">Student Enrollment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-8 py-10 w-full">
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-colors border ${
                activeFilter === filter
                  ? 'bg-[#00D4FF] text-black border-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                  : 'border-gray-300 text-gray-600 hover:border-[#00D4FF] hover:text-[#00D4FF]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Dynamic React Grid Mapping */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockCourses.map((course, index) => (
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
      </main>
    </div>
  );
}