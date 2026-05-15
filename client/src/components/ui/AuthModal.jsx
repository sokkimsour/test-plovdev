import { useEffect, useState } from 'react';
import { XMarkIcon, CheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

export default function AuthModal({ isOpen, onClose, initialPanel = 'signin' }) {
  const [activePanel, setActivePanel] = useState('signin');
  const [otpCode, setOtpCode] = useState('');
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gender: 'other', // Default value to match backend requirement
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setActivePanel(initialPanel);
      setError(null);
    }
  }, [initialPanel, isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  // Logic for Gmail / Google Sign In
  const handleGoogleAuth = () => {
  // Path: /api/v1 (from server.js) + /auth/google (from Auth.route.js)
  window.location.href = 'http://localhost:5000/api/v1/auth/google';
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const backendURL = 'http://localhost:5000';
      const endpoint = activePanel === 'signup'
        ? `${backendURL}/api/v1/auth/register`
        : `${backendURL}/api/v1/auth/login`;

      const response = await axios.post(endpoint, formData);

      if (activePanel === 'signup') {
        // We need the userId from registration to verify the OTP later
        setUserId(response.data.userId);
        setActivePanel('otp');
      } else {
        localStorage.setItem('token', response.data.token);
        if (response.data.refreshToken?.token) {
          localStorage.setItem('refreshToken', response.data.refreshToken.token);
        }
        window.dispatchEvent(new Event('auth-changed'));
        alert('Login successful!');
        onClose();
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || err.response?.data?.messageError || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError(null);
    try {
      const backendURL = 'http://localhost:5000';
      
      // Note: Make sure your backend has an endpoint to verify registration 
      // otherwise this will call the 'forgot-password' logic
      await axios.post(`${backendURL}/api/v1/auth/verify-otp`, {
        userId: userId,
        code: otpCode
      });

      alert("Verification successful! You can now sign in.");
      setActivePanel('signin');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP code.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-gray-700/50 relative animate-fade-in-up text-white">
        
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors">
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Panel Tabs */}
        {(activePanel === 'signin' || activePanel === 'signup') && (
          <div className="flex bg-gray-800/50 rounded-xl p-1 mb-8 mt-2 border border-gray-700/50">
            <button
              className={`w-1/2 py-2.5 rounded-lg text-sm font-bold transition-all ${activePanel === 'signin' ? 'bg-[#00D4FF] text-black' : 'text-gray-400'}`}
              onClick={() => setActivePanel('signin')}
            >Sign In</button>
            <button
              className={`w-1/2 py-2.5 rounded-lg text-sm font-medium transition-all ${activePanel === 'signup' ? 'bg-[#00D4FF] text-black' : 'text-gray-400'}`}
              onClick={() => setActivePanel('signup')}
            >Sign Up Free</button>
          </div>
        )}

        {error && <p className="text-red-400 text-xs text-center mb-4 bg-red-400/10 py-2 rounded-lg border border-red-400/20">{error}</p>}

        {/* 1. SIGN IN PANEL */}
        {activePanel === 'signin' && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-black text-center mb-1">Welcome back</h2>
            <p className="text-sm text-gray-400 text-center mb-6">Sign in to continue your journey.</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Email</label>
                <input type="email" name='email' required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 outline-none text-white" placeholder="email@example.com" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-bold text-gray-300">Password</label>
                  <button type="button" onClick={() => setActivePanel('forgot')} className="text-xs text-[#00D4FF] hover:underline">Forgot?</button>
                </div>
                <input type="password" name='password' required value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 outline-none text-white" placeholder="••••••••" />
              </div>
            </div>
            
            <div className="text-center text-xs text-gray-500 my-6">or continue with</div>
            
            <button type="button" onClick={handleGoogleAuth} className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl flex items-center justify-center gap-3 mb-4 hover:bg-gray-100">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg" alt="G" className="w-5 h-5" />
              Google
            </button>
            <button className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition">
              {loading ? 'Processing...' : 'Sign In \u2192'}
            </button>
          </form>
        )}

        {/* 2. SIGN UP PANEL */}
        {activePanel === 'signup' && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-black text-center mb-1">Create account</h2>
            <p className="text-sm text-gray-400 text-center mb-6">Join PlovDev today.</p>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Full Name</label>
                <input type="text" name='fullName' required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 outline-none text-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Email</label>
                <input type="email" name='email' required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 outline-none text-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Password</label>
                <input type="password" name='password' required value={formData.password} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 outline-none text-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 outline-none text-white">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <button type="button" onClick={handleGoogleAuth} className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl flex items-center justify-center gap-3 mt-6 mb-4 hover:bg-gray-100">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/layout/google.svg" alt="G" className="w-5 h-5" />
              Google
            </button>
            <button className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition">
              {loading ? 'Creating...' : 'Sign Up \u2192'}
            </button>
          </form>
        )}

        {/* 4. OTP PANEL */}
        {activePanel === 'otp' && (
          <div>
            <h2 className="text-2xl font-black text-center mb-1">Check your Email</h2>
            <p className="text-sm text-gray-400 text-center mb-6">Enter the 4-digit code sent to you.</p>
            <div className="mb-8">
              <input
                type="text"
                maxLength="4"
                placeholder="0000"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                className="w-full text-center text-3xl font-bold py-4 rounded-xl bg-gray-800/50 border border-gray-700 outline-none text-white tracking-[0.5em]"
              />
            </div>
            <button onClick={handleVerifyOtp} className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl">
              {loading ? 'Verifying...' : 'Verify Code \u2192'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
