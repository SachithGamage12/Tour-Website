import { useEffect, useState } from 'react';
import './LoadingScreen.css';

/*
 * LoadingScreen
 * Displays a branded splash screen for a configurable duration,
 * then signals the parent to unmount it via the onComplete callback.
 *
 * Props:
 *  duration — total visible time in ms (default 2600)
 */

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number;
}

function LoadingScreen({ onComplete, duration = 2600 }: LoadingScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Begin fade-out slightly before the full duration ends
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, duration - 600);

    // Notify parent to remove the component after fade completes
    const removeTimer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div className={`loading-screen${isFadingOut ? ' fade-out' : ''}`} role="status" aria-label="Loading">

      {/* Animated globe */}
      <div className="loading-globe-wrapper">
        <svg
          className="loading-globe-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>

      {/* Branding */}
      <div className="loading-brand">
        <h1 className="loading-title">
          World<span>Tour</span>
        </h1>
        <p className="loading-subtitle">Discover Your Next Adventure</p>
      </div>

      {/* Progress bar */}
      <div className="loading-bar-track" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
        <div className="loading-bar-fill" />
      </div>

      {/* Animated dots */}
      <div className="loading-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

    </div>
  );
}

export default LoadingScreen;
