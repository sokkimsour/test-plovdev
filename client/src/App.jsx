import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/public/HomePage"
import CoursesPage from "./pages/public/CoursesPage"
import PlatformPage from "./pages/public/PlatformPage"
import JobBoardPage from "./pages/public/JobBoardPage"
import PublicLayout from "./components/layout/PublicLayout"
import LoginSuccessPage from "./pages/public/LoginSuccessPage"
import OAuthErrorPage from "./pages/public/OAuthErrorPage"
function App() {
  return (
   <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/platform" element={<PlatformPage />} />
      <Route path="/jobs" element={<JobBoardPage />} />
    </Route>
    <Route path="/login-success" element={<LoginSuccessPage />} />
    <Route path="/oauth-error" element={<OAuthErrorPage />} />
   </Routes>
  )
}

export default App
