// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const steps = [1, 2, 3, 4];

// const Welcome = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <div className="steps-indicator">
//         {steps.map((step) => (
//           <div key={step} className="step-circle">
//             {step}
//           </div>
//         ))}
//       </div>
//       <div className="welcome-content">
//         <h1>Welcome to <span className="popx-highlight">PopX</span></h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
//         <button
//           className="btn-primary"
//           onClick={() => navigate('/create-account')}
//         >
//           Create Account
//         </button>
//         <button
//           className="btn-secondary"
//           onClick={() => navigate('/login')}
//         >
//           Already Registered? Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Welcome;



import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container animated-fadeIn">
      <div className="steps-indicator">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="step-circle">
            {step}
          </div>
        ))}
      </div>

      <h1 className="welcome-title">Welcome to PopX</h1>
      <p className="welcome-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button
        className="btn btn-create-account"
        onClick={() => navigate("/create-account")}
      >
        Create Account
      </button>

      <button
        className="btn btn-login"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>

      <button
        className="btn btn-account-settings"
        onClick={() => navigate("/account-settings")}
      >
        Account Setting
      </button>
    </div>
  );
};

export default Welcome;