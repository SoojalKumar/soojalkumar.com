"use client";

import Image from "next/image";
import { useState } from "react";

type ProfileAvatarProps = {
  size?: "hero" | "small";
};

const ProfileAvatar = ({ size = "hero" }: ProfileAvatarProps) => {
  const [failed, setFailed] = useState(false);
  const dimensions = size === "hero" ? "h-44 w-44 md:h-52 md:w-52" : "h-24 w-24";

  return (
    <div
      className={`${dimensions} relative mx-auto grid place-items-center overflow-hidden rounded-full border-4 border-sky-400 bg-slate-100 text-3xl font-bold text-slate-700 shadow-soft`}
      aria-label="Soojal Kumar profile image"
    >
      {failed ? (
        <span>SK</span>
      ) : (
        <Image
          src="/profile.jpg"
          alt="Soojal Kumar"
          fill
          sizes={size === "hero" ? "208px" : "96px"}
          className="object-cover object-[54%_40%]"
          priority={size === "hero"}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export default ProfileAvatar;
