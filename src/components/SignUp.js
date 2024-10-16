import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // For displaying validation errors
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password and Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Clear any previous error messages
    setErrorMessage('');
    setLoading(true); // Start loading

    // Save user data to local storage
    localStorage.setItem('username', formData.username);
    localStorage.setItem('email', formData.email); // Store email
    localStorage.setItem('password', formData.password);
    localStorage.setItem('balance', '0'); // Initialize balance

    // Simulate a delay for loading state
    setTimeout(() => {
      setLoading(false);
      navigate('/signin'); // Redirect to sign in after successful signup
    }, 1000); // 1-second delay to simulate loading
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", minWidth: '100vw' }}>
      <div className="card p-4 col-md-6 col-lg-5">
        <h2 className="text-center mb-4">Sign Up</h2>
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
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter your email"
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
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link to="/signin" style={{ color: "#6200ea" }}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}





























// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function SignUp() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Password and Confirm Password validation
//     if (formData.password !== formData.confirmPassword) {
//       setErrorMessage('Passwords do not match');
//       return;
//     }

//     // Clear any previous error messages
//     setErrorMessage('');
//     setLoading(true); // Start loading

//     // Retrieve existing users from local storage
//     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Check for duplicate username
//     const isUserExists = existingUsers.some(user => user.username === formData.username);
//     if (isUserExists) {
//       setLoading(false);
//       setErrorMessage('Username already exists');
//       return;
//     }

//     // Create a new user object
//     const newUser = {
//       id: Date.now(), // Unique token ID (could also use UUID)
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//       balance: 0 // Initialize balance
//     };

//     // Add the new user to the existing users array
//     existingUsers.push(newUser);

//     // Save updated user array to local storage
//     localStorage.setItem('users', JSON.stringify(existingUsers));

//     // Simulate a delay for loading state
//     setTimeout(() => {
//       setLoading(false);
//       navigate('/signin'); // Redirect to sign in after successful signup
//     }, 1000); // 1-second delay to simulate loading
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", minWidth: '100vw' }}>
//       <div className="card p-4 col-md-6 col-lg-5">
//         <h2 className="text-center mb-4">Sign Up</h2>
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
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               value={formData.email}
//               onChange={handleChange}
//               id="email"
//               placeholder="Enter your email"
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
//           <div className="mb-3">
//             <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               className="form-control"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               id="confirmPassword"
//               placeholder="Confirm your password"
//               required
//             />
//           </div>
          
//           {errorMessage && (
//             <div className="alert alert-danger" role="alert">
//               {errorMessage}
//             </div>
//           )}

//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? 'Signing Up...' : 'Sign Up'}
//           </button>
//           <p className="mt-3 text-center">
//             Already have an account?{" "}
//             <Link to="/signin" style={{ color: "#6200ea" }}>Sign In</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
