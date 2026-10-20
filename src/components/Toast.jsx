import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const renderIcon = () => {
    switch (type) {
      case 'error':
        return <AlertCircle size={18} className="toast-icon error" />;
      case 'info':
        return <Info size={18} className="toast-icon info" />;
      case 'success':
      default:
        return <CheckCircle2 size={18} className="toast-icon success" />;
    }
  };

  return (
    <div className={`toast-notification ${type} fade-in`}>
      <div className="toast-content">
        {renderIcon()}
        <span className="toast-text">{message}</span>
      </div>
      <button 
        type="button" 
        onClick={onClose} 
        className="toast-close-btn"
        aria-label="Close notification"
      >
        <X size={15} />
      </button>
    </div>
  );
}
