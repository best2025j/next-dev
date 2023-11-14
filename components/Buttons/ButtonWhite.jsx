"use client";
export const ButtonWhite = ({ label, className }) => {
  return (
    <button
      className={`text-white rounded-full px-6 py-2 active:text-[#264ac4] shadow-none capitalize bg-[#00AFF0] active:scale-100 ${className}`}
    >
      {label}
    </button>
  );
};
