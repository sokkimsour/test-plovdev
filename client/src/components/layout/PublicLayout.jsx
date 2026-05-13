// src/components/layout/PublicLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. The Global Header stays at the top */}
      <Header />

      {/* 2. The Outlet is where HomePage, CoursesPage, etc. will render */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* 3. The Global Footer stays at the bottom */}
      <Footer />
    </div>
  );
}