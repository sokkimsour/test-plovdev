import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-20 py-16 mt-20 border-t border-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1">
          {/* New Logo Format */}
          <Link to="/" className="text-3xl font-black tracking-tighter text-white mb-6 block hover:opacity-80 transition-opacity">
            Plov<span className="text-[#00D4FF]">Dev</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Structure learning for beginner developers in Cambodia. English & Khmer. Free to start.
          </p>
          <p className="text-gray-500 text-xs">Above and Beyond School - Team 404</p>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-sm tracking-widest uppercase text-gray-300">Courses</h5>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Python</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Javascript</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">React</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">SQL</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Node.js</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-sm tracking-widest uppercase text-gray-300">Platform</h5>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Job Board</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Teach on PlovDev</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-sm tracking-widest uppercase text-gray-300">Support</h5>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Privacy</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">Terms</li>
            <li className="hover:text-[#00D4FF] cursor-pointer transition-colors">@PlovDevBot</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-xs text-gray-500 flex justify-between">
        <p>© 2026 <span className="text-[#00D4FF] font-bold">PlovDev</span>. All rights reserved.</p>
      </div>
    </footer>
  );
}