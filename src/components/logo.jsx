import React, { useEffect, useState } from "react";

export default function FoodLoader({ onLoaded }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onLoaded) onLoaded();
      }, 500); // Match transition time
    }, 1000); // Delay before fade

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <>
      <style>{`
        .loader-container {
          height: 100vh;
          background: #fcfaef;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          user-select: none;
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
        }
        .fade-out {
          opacity: 0;
        }

        .plate {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: #fff9e5;
          box-shadow: 0 0 16px #fbbf24aa, inset 0 0 10px #ca8a04cc;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: plateRotate 6s linear infinite;
          filter: drop-shadow(0 0 8px #ca8a04aa);
        }

        @keyframes plateRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .fork, .spoon {
          position: absolute;
          width: 10px;
          height: 52px;
          background: #ca8a04;
          border-radius: 5px;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          filter: drop-shadow(0 0 6px #fbbf24dd);
        }

        .fork {
          left: 24px;
          top: 24px;
          animation: forkBounceGlow 1.6s infinite;
        }
        .fork::before,
        .fork::after {
          content: '';
          position: absolute;
          background: #ca8a04;
          box-shadow: 0 0 10px #ca8a04cc;
          filter: brightness(1.1);
        }
        .fork::before {
          top: 0;
          left: 2px;
          width: 5px;
          height: 10px;
          border-radius: 2px;
        }
        .fork::after {
          top: 10px;
          left: 0;
          width: 10px;
          height: 12px;
          border-radius: 4px 4px 0 0;
        }

        @keyframes forkBounceGlow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(6deg);
          }
        }

        .spoon {
          right: 24px;
          top: 24px;
          width: 12px;
          height: 54px;
          border-radius: 12px 12px 24px 24px;
          animation: spoonBounceGlow 1.8s infinite 0.3s;
        }
        .spoon::before {
          content: '';
          position: absolute;
          top: -14px;
          left: 0;
          width: 12px;
          height: 30px;
          background: #ca8a04;
          border-radius: 50% / 40%;
          box-shadow: 0 0 10px #ca8a04cc;
        }

        @keyframes spoonBounceGlow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(-5deg);
          }
        }

        .loading-text {
          margin-top: 30px;
          font-size: 20px;
          font-weight: 700;
          background: linear-gradient(90deg, #ca8a04, #fbbf24, #ca8a04);
          background-size: 200% 100%;
          background-position: 0% 50%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 2.5s linear infinite;
          user-select: none;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>

      <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
        <div className="plate">
          <div className="fork" />
          <div className="spoon" />
        </div>
        <div className="loading-text">Loading your orders...</div>
      </div>
    </>
  );
}
