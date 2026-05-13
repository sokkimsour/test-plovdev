import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/public/HomePage"
import CoursesPage from "./pages/public/CoursesPage"
import PlatformPage from "./pages/public/PlatformPage"
import JobBoardPage from "./pages/public/JobBoardPage"
import PublicLayout from "./components/layout/PublicLayout"
function App() {
  return (
   <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/platform" element={<PlatformPage />} />
      <Route path="/jobs" element={<JobBoardPage />} />
    </Route>
   </Routes>
  )
}

export default App
