import React from "react";

export const Alert = ({ variant = "info", children, className }) => {
  const baseStyle =
    "flex items-start gap-2 p-4 rounded-md border shadow-sm transition-all";
  const variants = {
    success: "bg-green-100 text-green-800 border-green-300",
    destructive: "bg-red-100 text-red-800 border-red-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };
  return <div className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</div>;
};

export const AlertTitle = ({ children }) => (
  <h3 className="font-semibold leading-none tracking-tight text-base">
    {children}
  </h3>
);

export const AlertDescription = ({ children }) => (
  <div className="text-sm mt-1 text-gray-700">{children}</div>
);