import React from "react";
import { TbGridDots } from "react-icons/tb";

// import Profile from "../assets/profile-200x200.jpg";
// import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368" />
      </span>
      <span className="h-10 w-10 relative flex justify-center items-center">
        <img className="absolute" src="" />
        <span className="h-8 w-8 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="https://media.licdn.com/dms/image/v2/D4D03AQFE5DwmKkGEgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700839156751?e=1729728000&v=beta&t=KqOkWQtFujvbgOw3mLHxqWIHl-pE1HuPzIjyf_aff3c"
          />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
