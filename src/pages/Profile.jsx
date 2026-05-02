import React from "react";
import AvatarUpload from "../components/AvatarUpload";

function Profile() {
  return (
    <div>
      <h2>👤 Profile</h2>

      <div style={styles.container}>
        <AvatarUpload />

        <div style={styles.info}>
          <h3>Tinebeb Amsalu</h3>
          <p>Email: tinebeb@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "30px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  info: {
    lineHeight: "1.8",
  },
};

export default Profile;