import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { GoogleIcon, GithubIcon } from '../components/BrandIcons';

export default function SignupPage({ setCurrentPage, onShowToast }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Password strength calculation
  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length >= 8) score += 25;
    if (/[A-Z]/.test(pwd)) score += 25;
    if (/[0-9]/.test(pwd)) score += 25;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 25;
    return score;
  };

  const strength = calculateStrength(password);

  const getStrengthLabel = () => {
    if (!password) return { text: 'Enter a password', color: 'gray' };
    if (strength <= 25) return { text: 'Weak', color: 'red' };
    if (strength <= 50) return { text: 'Fair', color: 'yellow' };
    if (strength <= 75) return { text: 'Good', color: 'blue' };
    return { text: 'Strong & Secure', color: 'green' };
  };

  const strengthInfo = getStrengthLabel();

  const handleSignup = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setErrorMsg('Password must be at least 8 characters long.');
      return;
    }

    if (!agreeTerms) {
      setErrorMsg('You must agree to the Terms of Service to register.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Fire double confetti celebration
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.55 }
      });
      if (onShowToast) {
        onShowToast(`Account created successfully! Welcome to Nexus, ${fullName}! 🎉`, 'success');
      }
      setTimeout(() => {
        setCurrentPage('home');
      }, 1400);
    }, 800);
  };

  const handleDemoFill = () => {
    setFullName('Alex Morgan');
    setEmail('alex.morgan@nexusflow.io');
    setPassword('NexusDev2026!');
    setAgreeTerms(true);
    setErrorMsg('');
    if (onShowToast) onShowToast('Signup details filled for testing!', 'info');
  };

  const handleSocialSignup = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
      if (onShowToast) onShowToast(`Registered with ${provider}! Welcome aboard.`, 'success');
      setTimeout(() => setCurrentPage('home'), 1100);
    }, 600);
  };

  return (
    <div className="auth-page fade-in">
      <div className="auth-glow-blob"></div>

      <div className="auth-card">
        {/* Card Header */}
        <div className="auth-header">
          <div className="auth-icon-badge purple">
            <Sparkles size={22} className="auth-icon" />
          </div>
          <h2 className="auth-title">Create your account</h2>
          <p className="auth-subtitle">Join thousands of builders shaping modern web interfaces</p>
        </div>

        {/* Demo Fast Fill */}
        <div className="demo-fill-banner">
          <Sparkles size={14} className="sparkle-icon" />
          <span>Quick test?</span>
          <button type="button" onClick={handleDemoFill} className="btn-text-link">
            Autofill registration details
          </button>
        </div>

        {/* Social Auth Buttons */}
        <div className="social-auth-grid">
          <button 
            type="button" 
            className="btn btn-social"
            onClick={() => handleSocialSignup('Google')}
            disabled={isLoading}
          >
            <GoogleIcon size={18} />
            <span>Google</span>
          </button>
          <button 
            type="button" 
            className="btn btn-social"
            onClick={() => handleSocialSignup('GitHub')}
            disabled={isLoading}
          >
            <GithubIcon size={18} />
            <span>GitHub</span>
          </button>
        </div>

        <div className="auth-divider">
          <span>or sign up with email</span>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="auth-error-alert fade-in">
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="auth-form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>
            <div className="input-wrap">
              <User size={18} className="input-icon" />
              <input 
                id="signup-name"
                type="text" 
                placeholder="Alex Morgan" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                autoComplete="name"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="signup-email">Work Email</label>
            <div className="input-wrap">
              <Mail size={18} className="input-icon" />
              <input 
                id="signup-email"
                type="email" 
                placeholder="alex@company.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="signup-password">Create Password</label>
            <div className="input-wrap">
              <Lock size={18} className="input-icon" />
              <input 
                id="signup-password"
                type={showPassword ? 'text' : 'password'} 
                placeholder="At least 8 characters" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
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

            {/* Password Strength Meter */}
            {password && (
              <div className="strength-meter-wrap fade-in">
                <div className="strength-header">
                  <span className="strength-caption">Password strength:</span>
                  <span className={`strength-badge ${strengthInfo.color}`}>{strengthInfo.text}</span>
                </div>
                <div className="strength-track">
                  <div 
                    className={`strength-bar ${strengthInfo.color}`} 
                    style={{ width: `${strength}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="form-options-row">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-caption">
                I agree to the <a href="#terms" onClick={(e) => e.preventDefault()} className="inline-link">Terms of Service</a> and <a href="#privacy" onClick={(e) => e.preventDefault()} className="inline-link">Privacy Policy</a>
              </span>
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
                <span>Create Free Account</span>
                <ArrowRight size={17} />
              </>
            )}
          </button>
        </form>

        {/* Card Footer */}
        <div className="auth-footer">
          <span>Already have an account?</span>
          <button 
            type="button" 
            className="btn-text-link switch-auth-btn"
            onClick={() => setCurrentPage('login')}
          >
            Sign in instead
          </button>
        </div>

        {/* Security badge */}
        <div className="auth-security-note">
          <ShieldCheck size={14} />
          <span>Encrypted with 256-bit SSL • 14-day free trial</span>
        </div>
      </div>
    </div>
  );
}
