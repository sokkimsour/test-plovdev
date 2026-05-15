import { Link, useSearchParams } from 'react-router-dom';

const errorMessages = {
  auth_failed: 'Google authentication failed. Please try again.',
  missing_token: 'Google login completed, but no access token was returned.',
  server_error: 'The server could not finish Google login. Please try again.',
};

export default function OAuthErrorPage() {
  const [searchParams] = useSearchParams();
  const error = searchParams.get('error') || 'auth_failed';
  const message = errorMessages[error] || 'Authentication failed. Please try again.';

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold mb-3">Login failed</h1>
        <p className="text-gray-400 mb-6">{message}</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-[#00D4FF] text-black font-bold px-5 py-3 hover:opacity-90 transition"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
