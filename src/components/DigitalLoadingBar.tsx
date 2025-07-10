import React, { useState, useEffect } from 'react';
import './DigitalLoadingBar.css';

interface DigitalLoadingBarProps {
  duration?: number;
  onComplete?: () => void;
  className?: string;
}

const DigitalLoadingBar: React.FC<DigitalLoadingBarProps> = ({ 
  duration = 3000, 
  onComplete, 
  className = '' 
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        setIsComplete(true);
        onComplete?.();
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className={`digital-loading-bar ${className}`}>
      <div className="loading-container">
        <div className="progress-track">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
          <div className="progress-glow" />
        </div>
        <div className="progress-text">
          <span className="progress-percentage">{Math.round(progress)}%</span>
          <span className="progress-status">
            {isComplete ? 'Complete' : 'Loading...'}
          </span>
        </div>
        <div className="loading-dots">
          <span className="dot" style={{ animationDelay: '0s' }} />
          <span className="dot" style={{ animationDelay: '0.2s' }} />
          <span className="dot" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default DigitalLoadingBar; 