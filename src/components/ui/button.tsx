import React from "react";

export const Button = ({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition-all bg-[#4A2F95] hover:bg-[#5B3CB3] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
