import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    username: "Tinebeb",
    email: "tinebeb@email.com",
    bio: "Software Engineering Student",
    gender: "female",
    country: "Ethiopia",
  });

  const [avatar, setAvatar] = useState(null);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <h2>👤 Profile Settings</h2>

        {/* 🖼 AVATAR SECTION */}
        <div className="avatar-wrapper">

          <div className="avatar-circle">
            <img
              src={
                avatar ||
                "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              }
              alt="avatar"
            />

            {/* ➕ ADD BUTTON */}
            <label className="avatar-add-btn">
              +
              <input type="file" onChange={handleAvatar} hidden />
            </label>
          </div>

        </div>

        {/* FORM */}
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <input
            name="bio"
            value={user.bio}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={user.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Country</label>
          <input
            name="country"
            value={user.country}
            onChange={handleChange}
          />
        </div>

        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>

      </div>
    </div>
  );
}

export default Profile;