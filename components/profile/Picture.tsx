import React from "react";
import Image from "next/image";

const Picture = () => (
  <div className="profile__image__wrapper">
    <Image
      className="rounded w-full"
      src="https://firebasestorage.googleapis.com/v0/b/profile-me-dab9a.appspot.com/o/profile.jpg?alt=media&token=d121b787-9588-4d4d-b317-e5d7f4dfc162"
      alt="Devillo Logo"
      width={200}
      height={200}
    />
    <div className="profile__image__emojis">
      <span>🚀</span>
      <span>🇧🇷</span>
      <span>🍺</span>
      <span>👨‍💻</span>
    </div>
  </div>
);

export default Picture;
