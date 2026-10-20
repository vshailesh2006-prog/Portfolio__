import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { GoogleIcon, GithubIcon } from '../components/BrandIcons';

export default function LoginPage({ setCurrentPage, onShowToast }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setErrorMsg('Password must be at least 6 characters.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
      if (onShowToast) onShowToast(`Welcome back, ${email.split('@')[0]}! Logged in successfully.`, 'success');
      // Redirect to home after 1.2s or stay logged in
      setTimeout(() => {
        setCurrentPage('home');
      }, 1200);
    }, 700);
  };

  const handleDemoFill = () => {
    setEmail('developer@nexusflow.io');
    setPassword('Nexus2026!');
    setErrorMsg('');
    if (onShowToast) onShowToast('Demo credentials autofilled!', 'info');
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      if (onShowToast) onShowToast(`Signed in via ${provider}!`, 'success');
      setTimeout(() => setCurrentPage('home'), 1000);
    }, 600);
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-glow-blob"></div>

      <div className="auth-card">
        {/* Card Header */}
        <div className="auth-header">
          <div className="auth-icon-badge">
            <Lock size={22} className="auth-icon" />
          </div>
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Enter your credentials to access your workspace</p>
        </div>

        {/* Demo Fast Fill Pill */}
        <div className="demo-fill-banner">
          <Sparkles size={14} className="sparkle-icon" />
          <span>Testing?</span>
          <button type="button" onClick={handleDemoFill} className="btn-text-link">
            Click here to autofill demo credentials
          </button>
        </div>

        {/* Social Auth Buttons */}
        <div className="social-auth-grid">
          <button 
            type="button" 
            className="btn btn-social"
            onClick={() => handleSocialLogin('Google')}
            disabled={isLoading}
          >
            <GoogleIcon size={18} />
            <span>Google</span>
          </button>
          <button 
            type="button" 
            className="btn btn-social"
            onClick={() => handleSocialLogin('GitHub')}
            disabled={isLoading}
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </button>
        </div>

        <div className="auth-divider">
          <span>or continue with email</span>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="auth-error-alert fade-in">
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="auth-form">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <div className="input-wrap">
              <Mail size={18} className="input-icon" />
              <input 
                id="login-email"
                type="email" 
                placeholder="name@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <div className="label-row">
              <label htmlFor="login-password">Password</label>
              <button 
                type="button" 
                className="btn-text-link forgot-link"
                onClick={() => {
                  if (onShowToast) onShowToast('Password reset link sent to registered email.', 'info');
                }}
              >
                Forgot password?
              </button>
            </div>
            <div className="input-wrap">
              <Lock size={18} className="input-icon" />
              <input 
                id="login-password"
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button 
                type="button" 
                className="eye-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="form-options-row">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="checkbox-custom"></span>
              <span>Remember me for 30 days</span>
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-primary btn-block"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : (
              <>
                <span>Sign In to Account</span>
                <ArrowRight size={17} />
              </>
            )}
          </button>
        </form>

        {/* Card Footer */}
        <div className="auth-footer">
          <span>Don't have an account yet?</span>
          <button 
            type="button" 
            className="btn-text-link switch-auth-btn"
            onClick={() => setCurrentPage('signup')}
          >
            Create an account
          </button>
        </div>

        {/* Security badge */}
        <div className="auth-security-note">
          <ShieldCheck size={14} />
          <span>256-bit TLS encrypted connection</span>
        </div>
      </div>
    </div>
  );
}
