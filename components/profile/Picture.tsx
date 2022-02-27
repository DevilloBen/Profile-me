import React from "react";
import Image from 'next/image'

const Picture = () => (
    <div className="profile__image__wrapper">
        <Image className="rounded w-full" src="/profile.jpg" alt="Devillo Logo" width={200} height={200} />
        {/* <img src="profile.jpg" alt="Profile image" className="rounded w-full" /> */}

        <div className="profile__image__emojis">
            <span>🚀</span>
            <span>🇧🇷</span>
            <span>🍺</span>
            <span>👨‍💻</span>
        </div>
    </div>
);

export default Picture;