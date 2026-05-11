import { useState } from 'react';
import { XMarkIcon, CheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AuthModal({ isOpen, onClose }) {
  const [activePanel, setActivePanel] = useState('signin');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      
      {/* Dark Glassmorphism Card */}
      <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-gray-700/50 relative animate-fade-in-up text-white">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors">
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Top Tabs */}
        {(activePanel === 'signin' || activePanel === 'signup') && (
          <div className="flex bg-gray-800/50 rounded-xl p-1 mb-8 mt-2 border border-gray-700/50">
            <button 
              className={`w-1/2 py-2.5 rounded-lg text-sm font-bold transition-all ${activePanel === 'signin' ? 'bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.3)] text-black' : 'text-gray-400 hover:text-white'}`} 
              onClick={() => setActivePanel('signin')}
            >
              Sign In
            </button>
            <button 
              className={`w-1/2 py-2.5 rounded-lg text-sm font-medium transition-all ${activePanel === 'signup' ? 'bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.3)] text-black' : 'text-gray-400 hover:text-white'}`} 
              onClick={() => setActivePanel('signup')}
            >
              Sign Up Free
            </button>
          </div>
        )}

        {/* 1. SIGN IN PANEL */}
        {activePanel === 'signin' && (
          <div>
            <h2 className="text-2xl font-black text-center mb-1 tracking-tight">Welcome back</h2>
            <p className="text-sm text-gray-400 text-center mb-6">Sign in to continue your learning journey.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold text-gray-300">Password</label>
                  <button onClick={() => setActivePanel('forgot')} className="text-xs text-[#00D4FF] font-bold hover:underline">Forgot password?</button>
                </div>
                <input type="password" placeholder="Enter your password" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
            </div>

            <div className="text-center text-xs font-medium text-gray-500 my-6 relative">
              <span className="bg-gray-900/80 px-3 relative z-10 rounded-full">or continue with</span>
              <div className="absolute w-full h-[1px] bg-gray-700 top-1/2 left-0 -z-0"></div>
            </div>

            <button className="w-full bg-white border border-gray-200 text-gray-900 font-bold py-3.5 rounded-xl hover:bg-gray-100 hover:shadow-sm transition flex items-center justify-center gap-3 mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>

            <button className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-sm">Sign In &rarr;</button>
          </div>
        )}

        {/* 2. SIGN UP PANEL */}
        {activePanel === 'signup' && (
          <div>
            <h2 className="text-2xl font-black text-center mb-1 tracking-tight">Create your account</h2>
            <p className="text-sm text-gray-400 text-center mb-6">Join thousands of learners on PlovDev.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Username</label>
                <input type="text" placeholder="Enter your username" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Password</label>
                <input type="password" placeholder="Create a password" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
            </div>

            <div className="text-center text-xs font-medium text-gray-500 my-6 relative">
              <span className="bg-gray-900/80 px-3 relative z-10 rounded-full">or continue with</span>
              <div className="absolute w-full h-[1px] bg-gray-700 top-1/2 left-0 -z-0"></div>
            </div>

            <button className="w-full bg-white border border-gray-200 text-gray-900 font-bold py-3.5 rounded-xl hover:bg-gray-100 hover:shadow-sm transition flex items-center justify-center gap-3 mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>

            <button className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-sm">Sign Up &rarr;</button>
          </div>
        )}

        {/* 3. FORGOT PASSWORD PANEL */}
        {activePanel === 'forgot' && (
          <div>
            <button className="text-sm font-bold text-gray-400 mb-6 flex items-center hover:text-white transition-colors" onClick={() => setActivePanel('signin')}>
              <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back
            </button>
            <h2 className="text-2xl font-black text-center mb-1 tracking-tight">Forgot Password</h2>
            <p className="text-sm text-gray-400 text-center mb-6">Enter your email and we'll send you an OTP code to reset your password.</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Email Address</label>
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
            </div>
            <button className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-sm" onClick={() => setActivePanel('otp')}>Send OTP Code &rarr;</button>
          </div>
        )}

        {/* 4. OTP PANEL */}
        {activePanel === 'otp' && (
          <div>
            <button className="text-sm font-bold text-gray-400 mb-6 flex items-center hover:text-white transition-colors" onClick={() => setActivePanel('forgot')}>
              <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back
            </button>
            <h2 className="text-2xl font-black text-center mb-1 tracking-tight">Enter OTP</h2>
            <p className="text-sm text-gray-400 text-center mb-6">We sent a 4-digit verification code to your email.</p>
            
            <div className="flex justify-center gap-4 mb-8">
              <input type="text" maxLength="1" className="w-14 h-14 text-center text-2xl font-bold rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-white shadow-sm transition-all" />
              <input type="text" maxLength="1" className="w-14 h-14 text-center text-2xl font-bold rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-white shadow-sm transition-all" />
              <input type="text" maxLength="1" className="w-14 h-14 text-center text-2xl font-bold rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-white shadow-sm transition-all" />
              <input type="text" maxLength="1" className="w-14 h-14 text-center text-2xl font-bold rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-white shadow-sm transition-all" />
            </div>
            <button className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-sm" onClick={() => setActivePanel('reset')}>Verify Code &rarr;</button>
          </div>
        )}

        {/* 5. RESET PASSWORD PANEL */}
        {activePanel === 'reset' && (
          <div>
            <button className="text-sm font-bold text-gray-400 mb-6 flex items-center hover:text-white transition-colors" onClick={() => setActivePanel('otp')}>
              <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back
            </button>
            <h2 className="text-2xl font-black text-center mb-1 tracking-tight">Reset Password</h2>
            <p className="text-sm text-gray-400 text-center mb-6">Create a strong new password for your account.</p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">New Password</label>
                <input type="password" placeholder="Enter new password" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-300 mb-1">Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" className="w-full px-4 py-3.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] outline-none text-sm font-medium text-white placeholder-gray-500 transition-all" />
              </div>
            </div>
            <button className="w-full bg-[#00D4FF] text-black font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-sm" onClick={() => setActivePanel('success')}>Reset Password &rarr;</button>
          </div>
        )}

        {/* 6. SUCCESS PANEL */}
        {activePanel === 'success' && (
          <div>
            <div className="flex justify-center mb-6 mt-4">
              <div className="w-20 h-20 bg-[#00D4FF]/20 rounded-full flex items-center justify-center border border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                <CheckIcon className="w-10 h-10 text-[#00D4FF]" />
              </div>
            </div>
            <h2 className="text-2xl font-black text-center mb-2 tracking-tight">Password Reset!</h2>
            <p className="text-sm text-gray-400 text-center mb-8">Your password has been successfully reset. You can now sign in with your new password.</p>
            
            <button className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition shadow-sm" onClick={() => setActivePanel('signin')}>Back to Sign In &rarr;</button>
          </div>
        )}

      </div>
    </div>
  );
}