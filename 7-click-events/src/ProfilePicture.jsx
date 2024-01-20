import React from "react";

function ProfilePicture() {
  const imgUrl = "./src/assets/profile.png";

  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return <img onClick={(e) => handleClick(e)} src={imgUrl} alt="Profile Picture" />;
}

export default ProfilePicture;
