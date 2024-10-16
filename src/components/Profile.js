import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Import your custom CSS

const Profile = () => {
  const [user, setUser] = useState({ username: "", email: "", balance: 0 });
  const navigate = useNavigate();

  // Fetch user data from localStorage
  useEffect(() => {
    const username = localStorage.getItem("username");

    // Check if userId and token are available
    if (!username) {
      navigate("/signin"); // Redirect to login if not logged in
    } else {
      // Fetch user details from localStorage and update state
      const storedUser = {
        username: localStorage.getItem("username") || "",
        email: localStorage.getItem("email") || "",
        balance: Number(localStorage.getItem("balance")) || 0,
      };
      setUser(storedUser);
    }
  }, [navigate]);

  // Handle Logout
  const handleLogout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('userId');
    // localStorage.removeItem('username');
    // localStorage.removeItem('email');
    // localStorage.removeItem('balance');
    navigate("/signin");
  };

  const handleEditProfile = () => {
    // Redirect or show edit profile functionality
    console.log("Edit profile clicked");
    // Implement your edit profile functionality here
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://scontent.cdninstagram.com/v/t51.2885-19/331644425_230769925969630_2181726895602922270_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=108&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=IlXV9MaE9OcQ7kNvgHv9l8m&_nc_ht=scontent.cdninstagram.com&oh=00_AYAL1urmgb13gfvs4GraBrH9DrfuIromcSDMWuIrkNiECA&oe=67149259"
            alt="Profile"
            className="profile-image"
          />
          <h2>{user.username}</h2>
        </div>
        <div className="profile-details">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Balance:</strong> ${user.balance}
          </p>
        </div>
        <div className="profile-actions">
          <button className="btn btn-primary" onClick={handleEditProfile}>
            Edit Profile
          </button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;











// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Profile.css"; // Import your custom CSS

// const Profile = (props) => {
//   const [user, setUser] = useState({ username: "", email: "", balance: 0 });
//   const navigate = useNavigate();

//   // Fetch user data from localStorage
//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // Retrieve and parse the users array
//     const user = storedUsers.find(u => u.username === formData.username && u.password === formData.password); // Retrieve the logged-in username

//     // Check if storedUsername is available
//     if (!user) {
//       navigate("/signin"); // Redirect to login if not logged in
//     } else {
//       // Find the user that matches the stored username
//       const currentUser = storedUsers.find(
//         (user) => user.username === storedUsername
//       );
//       if (currentUser) {
//         setUser(currentUser); // Set the user state with the found user's details
//       } else {
//         navigate("/signin"); // Redirect if user is not found
//       }
//     }
//   }, [navigate]);

//   // Handle Logout
//   const handleLogout = () => {
//     // Optionally, clear username or user data from localStorage
//     localStorage.removeItem("username");
//     navigate("/signin");
//   };

//   const handleEditProfile = () => {
//     // Redirect or show edit profile functionality
//     console.log("Edit profile clicked");
//     // Implement your edit profile functionality here
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <img
//             src="https://scontent.cdninstagram.com/v/t51.2885-19/331644425969630_2181726895602922270_n.jpg?stp=cp0_dst-jpg_s110x80&_nc_cat=108&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=IlXV9MaE9OcQ7kNvgHv9l8m&_nc_ht=scontent.cdninstagram.com&oh=00_AYAL1urmgb13gfvs4GraBrH9DrfuIromcSDMWuIrkNiECA&oe=67149259"
//             alt="Profile"
//             className="profile-image"
//           />
//           <h2>{user.username}</h2>
//         </div>
//         <div className="profile-details">
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           <p>
//             <strong>Balance:</strong> ${user.balance}
//           </p>
//         </div>
//         <div className="profile-actions">
//           <button className="btn btn-primary" onClick={handleEditProfile}>
//             Edit Profile
//           </button>
//           <button className="btn btn-danger" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
