import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function LoginSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const completeLogin = async () => {
      const token = searchParams.get('token');
      const refreshToken = searchParams.get('refreshToken');

      if (!token) {
        navigate('/oauth-error?error=missing_token', { replace: true });
        return;
      }

      localStorage.setItem('token', token);

      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
      window.dispatchEvent(new Event('auth-changed'));

      try {
        const response = await fetch('http://localhost:5000/api/v1/users/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Token verification failed');
        }

        navigate('/', { replace: true });
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        navigate('/oauth-error?error=server_error', { replace: true });
      }
    };

    completeLogin();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-3">Signing you in...</h1>
        <p className="text-gray-400">Completing Google authentication.</p>
      </div>
    </div>
  );
}
