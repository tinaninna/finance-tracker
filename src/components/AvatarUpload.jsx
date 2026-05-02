import React, { useRef, useState } from "react";

function AvatarUpload() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div style={styles.wrapper}>
      
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/*"
        style={{ display: "none" }}
      />

      {/* Avatar Circle */}
      <div style={styles.avatar} onClick={handleClick}>
        {image ? (
          <img src={image} alt="avatar" style={styles.img} />
        ) : (
          <div style={styles.placeholder}>
            📷
          </div>
        )}
      </div>

      <p style={styles.text}>Click to upload profile picture</p>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#e2e8f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
    border: "2px dashed #94a3b8",
  },
  placeholder: {
    fontSize: "30px",
    color: "#64748b",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  text: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#64748b",
  },
};

export default AvatarUpload;