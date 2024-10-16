// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function SignIn() {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const [errorMessage, setErrorMessage] = useState(''); // State for error message
//   const [loading, setLoading] = useState(false); // State for loading indicator
//   const navigate = useNavigate(); // useNavigate for redirecting

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state to true when request starts

//     // Retrieve user data from local storage
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Find the user that matches the provided credentials
//     const user = storedUsers.find(u => u.username === formData.username && u.password === formData.password);

//     if (user) {
//       // If login is successful, navigate to the homepage
//       // You could also store the user token in local storage or state for further use
//       localStorage.setItem('token', user.token); // Store user token
//       navigate('/home');
//     } else {
//       // Set error message if credentials are invalid
//       setErrorMessage('Invalid credentials, please try again');
//     }
    
//     setLoading(false); // Set loading to false after request is completed
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", minWidth: '100vw' }}>
//       <div className="card p-4 col-md-6 col-lg-5">
//         <h2 className="text-center mb-4">Sign In</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input
//               type="text"
//               name="username"
//               className="form-control"
//               value={formData.username}
//               onChange={handleChange}
//               id="username"
//               placeholder="Enter your username"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               id="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {errorMessage && (
//             <div className="alert alert-danger" role="alert">
//               {errorMessage}
//             </div>
//           )}
//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? 'Signing In...' : 'Sign In'}
//           </button>
//           <p className="mt-3 text-center">
//             Don't have an account? <Link to="/signup" style={{ color: "#6200ea" }}>Sign Up</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }














import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate(); // useNavigate for redirecting

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when request starts

    // Retrieve user data from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    // Validate credentials against stored values
    if (
      formData.username === storedUsername && 
      formData.password === storedPassword
    ) {
      // If login is successful, navigate to the homepage
      navigate('/home');
    } else {
      // Set error message if credentials are invalid
      setErrorMessage('Invalid credentials, please try again');
    }
    setLoading(false); // Set loading to false after request is completed
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", minWidth: '100vw' }}>
      <div className="card p-4 col-md-6 col-lg-5">
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          <p className="mt-3 text-center">
            Don't have an account? <Link to="/signup" style={{ color: "#6200ea" }}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
