import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AuthModal from '../ui/AuthModal';

export default function Header() {
  const location = useLocation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const syncAuthState = () => {
      setIsAuthenticated(Boolean(localStorage.getItem('token')));
    };

    syncAuthState();
    window.addEventListener('focus', syncAuthState);
    window.addEventListener('storage', syncAuthState);
    window.addEventListener('auth-changed', syncAuthState);

    return () => {
      window.removeEventListener('focus', syncAuthState);
      window.removeEventListener('storage', syncAuthState);
      window.removeEventListener('auth-changed', syncAuthState);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
    window.dispatchEvent(new Event('auth-changed'));
  };

  const isActive = (path) =>
    location.pathname === path
      ? 'text-black font-bold border-b-2 border-[#00D4FF] pb-1'
      : 'hover:text-[#00D4FF] transition-colors';

  return (
    <>
      <nav className="bg-white/70 backdrop-blur-md border-b border-gray-200/50 px-8 py-4 flex justify-between items-center sticky top-0 z-40 shrink-0 shadow-sm">
        <div className="flex items-center space-x-12">
          <Link to="/" className="text-2xl font-black tracking-tighter text-gray-900 hover:opacity-80 transition-opacity">
            Plov<span className="text-[#00D4FF]">Dev</span>
          </Link>

          <div className="flex space-x-8 text-sm font-medium text-gray-600">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/courses" className={isActive('/courses')}>Courses</Link>
            <Link to="/platform" className={isActive('/platform')}>About Us</Link>
            <Link to="/jobs" className={isActive('/jobs')}>Job Board</Link>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              className="pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] w-full bg-gray-50/50 text-sm focus:bg-white transition-all"
              placeholder="Search courses..."
            />
            <MagnifyingGlassIcon className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
          </div>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm shadow-sm"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-[#00D4FF] text-black px-5 py-2.5 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm shadow-sm"
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}
