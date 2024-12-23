import React from "react";

interface CardProps {
  icon: React.ReactNode; // Icon to be displayed
  text: string;          // Text content for the card
}

const Card: React.FC<CardProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-[400px] h-[100px]">
      {/* Icon Section */}
      <div className="flex items-center justify-center bg-yellow-400 rounded-full w-12 h-12 mr-4">
        {icon}
      </div>
      {/* Text Section */}
      <div>
        <p className="text-lg font-semibold text-gray-800">{text}</p>
      </div>
    </div>
  );
};

export default Card;
