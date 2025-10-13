import React from "react";

export const Card = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-2xl shadow-md border border-[#3B257A] bg-[#2C1A63] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
