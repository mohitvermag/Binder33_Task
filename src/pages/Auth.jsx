import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState({});

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [regErrors, setRegErrors] = useState({});

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Password reset link sent to ' + (loginEmail || 'your email') + '.');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!loginEmail) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      errors.email = 'Please provide a valid email';
    }

    if (!loginPassword) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }

    setLoginErrors({});
    localStorage.setItem('userName', 'Mohit');
    navigate('/dashboard');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!regName.trim()) {
      errors.name = 'Full name is required';
    }
    if (!regEmail) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(regEmail)) {
      errors.email = 'Please provide a valid email';
    }
    if (!regPassword) {
      errors.password = 'Password is required';
    } else if (regPassword.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (regPassword !== regConfirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setRegErrors(errors);
      return;
    }

    setRegErrors({});
    localStorage.setItem('userName', regName.trim());
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <h2 className="text-3xl font-extrabold text-brand-orange tracking-widest">
          BINDER-OS
        </h2>
        <p className="mt-2 text-sm text-text-secondary">
          Sign in to continue
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="shadow-md border border-border-light">
          <div className="flex border-b border-border-light -mx-5 -mt-5 mb-6 bg-gray-50">
            <button
              type="button"
              onClick={() => { setActiveTab('login'); setRegErrors({}); }}
              className={`w-1/2 py-3.5 text-center text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'login'
                  ? 'border-brand-orange text-brand-orange bg-white'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setActiveTab('register'); setLoginErrors({}); }}
              className={`w-1/2 py-3.5 text-center text-sm font-semibold border-b-2 transition-all ${
                activeTab === 'register'
                  ? 'border-brand-orange text-brand-orange bg-white'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              Register
            </button>
          </div>

          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <Input
                label="Email Address"
                id="login-email"
                type="email"
                placeholder="name@company.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                error={loginErrors.email}
                required
              />

              <div className="relative">
                <Input
                  label="Password"
                  id="login-password"
                  type="password"
                  placeholder="Enter password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  error={loginErrors.password}
                  required
                />
                <div className="flex justify-end mt-1.5">
                  <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="text-xs font-semibold text-brand-orange hover:text-brand-orange-hover"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              <Button type="submit" className="w-full mt-4 justify-center">
                Sign In
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <Input
                label="Full Name"
                id="reg-name"
                placeholder="Mohit"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                error={regErrors.name}
                required
              />

              <Input
                label="Email Address"
                id="reg-email"
                type="email"
                placeholder="mohit@company.com"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                error={regErrors.email}
                required
              />

              <Input
                label="Password"
                id="reg-password"
                type="password"
                placeholder="Minimum 6 characters"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                error={regErrors.password}
                required
              />

              <Input
                label="Confirm Password"
                id="reg-confirm-password"
                type="password"
                placeholder="Confirm password"
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                error={regErrors.confirmPassword}
                required
              />

              <Button type="submit" className="w-full mt-4 justify-center">
                Sign Up
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}
